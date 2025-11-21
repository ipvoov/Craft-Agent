import logging
from typing import Literal

from langchain_core.messages import HumanMessage
from langgraph.types import Command

from src.graph.State import WebGenState

logger = logging.getLogger(__name__)


async def execute_web_agent_step(
    state: WebGenState,
    agent,
    agent_name: str,
) -> Command[Literal["code_team"]]:
    current_plan = state.get("current_plan")
    if not current_plan or not getattr(current_plan, "steps", None):
        logger.warning("当前计划不存在或不包含步骤")
        return Command(
            update={
                "messages": state["messages"],
                "current_plan": current_plan,
            },
            goto="code_team",
        )

    current_step = None
    completed_steps = []
    for step in current_plan.steps:
        if not getattr(step, "execution_res", None):
            current_step = step
            break
        completed_steps.append(step)

    if current_step is None:
        logger.info("所有步骤均已完成")
        return Command(
            update={
                "messages": state["messages"],
                "current_plan": current_plan,
            },
            goto="code_team",
        )

    plan_title = getattr(current_plan, "title", "")
    project_name = state.get("name") or ""
    project_number = state.get("number") or ""

    completed_info = ""
    if completed_steps:
        lines = []
        for index, step in enumerate(completed_steps, start=1):
            preview = str(step.execution_res) if step.execution_res else ""
            if len(preview) > 200:
                preview = preview[:200] + "..."
            lines.append(f"## 已完成步骤 {index}: {step.title}\n\n{preview}")
        completed_info = "# 已完成的步骤\n\n" + "\n\n".join(lines) + "\n\n"

    content = (
        f"你是网页生成流程中的 {agent_name} agent，请只专注于执行当前步骤。\n\n"
        f"# 项目信息\n\n"
        f"- 项目名称: {project_name}\n"
        f"- 项目编号: {project_number}\n\n"
        f"# 整体计划标题\n\n{plan_title}\n\n"
        f"{completed_info}"
        f"# 当前步骤\n\n"
        f"## 标题\n\n{current_step.title}\n\n"
        f"## 描述\n\n{current_step.description}\n\n"
        "请根据系统提示词和上述信息完成本步骤，并输出高质量的结果，供后续步骤继续使用。"
    )

    agent_input = {"messages": [HumanMessage(content=content)]}

    try:
        result = await agent.ainvoke(agent_input)
    except Exception as error:
        logger.exception("执行 %s agent 出错: %s", agent_name, error)
        error_message = (
            f"[错误] {agent_name} agent 在执行步骤 '{current_step.title}' 时发生异常: {error}"
        )
        current_step.execution_res = error_message
        return Command(
            update={
                "messages": state["messages"]
                + [HumanMessage(content=error_message, name=agent_name)],
                "current_plan": current_plan,
            },
            goto="code_team",
        )

    if isinstance(result, dict) and "messages" in result and result["messages"]:
        response_content = result["messages"][-1].content
    else:
        response_content = str(result)

    try:
        from src.utils.json_utils import sanitize_tool_response

        response_content = sanitize_tool_response(str(response_content))
    except Exception:
        response_content = str(response_content)

    current_step.execution_res = response_content

    return Command(
        update={
            "messages": state["messages"]
            + [HumanMessage(content=response_content, name=agent_name)],
            "current_plan": current_plan,
        },
        goto="code_team",
    )
