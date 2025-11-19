import json
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command,interrupt
from typing import Literal
from .coordinator import logger
from src.graph.State import State
from langchain_core.messages import HumanMessage
from src.prompts.planner_model import Plan
from .planner import preserve_state_meta_fields, validate_and_fix_plan
from ...utils import repair_json_output

def human_feedback_node(
        state: State, config: RunnableConfig
) -> Command[Literal["planner", "research_team", "reporter", "__end__"]]:
    current_plan = state.get("current_plan", "")
    # 检查计划是否自动接受
    auto_accepted_plan = state.get("auto_accepted_plan", False)
    if not auto_accepted_plan:
        # 等待人类审核和指导
        feedback = interrupt("请审查计划。")

        # 处理空反馈或 None 反馈
        if not feedback:
            logger.warning(f"收到空反馈或 None 反馈: {feedback}。返回规划器生成新计划。")
            return Command(
                update=preserve_state_meta_fields(state),
                goto="planner"
            )

        # 规范化反馈字符串
        feedback_normalized = str(feedback).strip().upper()

        # 如果反馈未被接受，返回规划器节点
        # startswith() 是 Python 字符串的内置方法，用于检查字符串是否以指定的前缀开头。
        if feedback_normalized.startswith("[EDIT_PLAN]"):
            logger.info(f"用户请求编辑计划: {feedback}")
            return Command(
                update={
                    "messages": [
                        HumanMessage(content=feedback, name="feedback"),
                    ],
                    **preserve_state_meta_fields(state),
                },
                goto="planner",
            )
        elif feedback_normalized.startswith("[ACCEPTED]"):
            logger.info("用户已接受计划。")
        else:
            logger.warning(f"不支持的反馈格式: {feedback}。请使用 '[ACCEPTED]' 接受或 '[EDIT_PLAN]' 编辑。")
            return Command(
                update=preserve_state_meta_fields(state),
                goto="planner"
            )

    # 如果计划被接受，运行下一个节点
    plan_iterations = state.get("plan_iterations", 0) or 0
    try:
        current_plan = repair_json_output(current_plan)
        # 增加计划迭代次数
        plan_iterations += 1
        # 解析计划
        new_plan = json.loads(current_plan)
        # 验证并修复计划以确保满足网络搜索要求
        configurable = config.get("configurable", {})
        new_plan = validate_and_fix_plan(new_plan, configurable.get("enforce_web_search", False))
    except json.JSONDecodeError:
        logger.warning("规划器响应不是有效的 JSON")
        if plan_iterations > 1:  # 在此检查之前已增加 plan_iterations
            return Command(
                update=preserve_state_meta_fields(state),
                goto="reporter"
            )
        else:
            return Command(
                update=preserve_state_meta_fields(state),
                goto="__end__"
            )

    # 构建更新字典，安全处理 locale
    update_dict = {
        "current_plan": Plan.model_validate(new_plan),
        "plan_iterations": plan_iterations,
        **preserve_state_meta_fields(state),
    }

    # 仅当 new_plan 提供有效值时才覆盖 locale，否则使用保留的 locale
    if new_plan.get("locale"):
        update_dict["locale"] = new_plan["locale"]

    return Command(
        update=update_dict,
        goto="research_team",
    )