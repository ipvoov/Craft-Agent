from langchain_core.messages import HumanMessage
from langchain_core.runnables import RunnableConfig
from langgraph.prebuilt import create_react_agent
from langgraph.types import Command
from typing import Literal
from .coordinator import logger
from src.graph.State import State
from src.tools.search import web_search
from langchain.agents import create_agent

from .planner import preserve_state_meta_fields
from ...config import Config, AGENT_LLM_MAP
from ...llms.llm import get_llm_by_type
from ...prompts.template import apply_prompt_template, apply_prompt_template_not_with_messages
from ...tools.crawl import crawl_tool
from ...utils.context_manager import validate_message_content
from ...utils.json_utils import sanitize_tool_response


async def researcher_node(
        state: State, config: RunnableConfig
) -> Command[Literal["research_team"]]:
    """研究者节点 - 负责执行研究任务
    该节点配置并执行研究型 Agent，使用网络搜索、网页爬取等工具来收集信息。
    Args:
        state: 当前工作流状态，包含任务信息和资源
        config: 运行时配置，包含模型设置、工具参数等
    Returns:
        Command: 返回到 research_team 的命令，包含研究结果和状态更新
    """
    logger.info("研究者节点：开始执行研究任务")
    logger.debug(f"[研究者节点] 启动研究型 Agent")

    # 从运行时配置中提取可配置参数
    configurable = config.get("configurable",{})
    max_search_results = configurable.get("max_search_results", 3)
    logger.debug(f"[研究者节点] 最大搜索结果数: {max_search_results}")

    # 初始化工具列表：网络搜索工具和网页爬取工具
    tools = [web_search, crawl_tool]

    # 记录工具配置信息
    logger.info(f"[研究者节点] 可用工具数量: {len(tools)}")
    logger.debug(f"[研究者节点] 工具列表: {[tool.name if hasattr(tool, 'name') else str(tool) for tool in tools]}")

    node_name = "researcher"

    agent = create_agent(
        model = get_llm_by_type(AGENT_LLM_MAP["researcher"]),
        tools = tools,
        system_prompt= apply_prompt_template_not_with_messages(
            node_name, state, locale=state.get("locale", "zh-CN")
        ),
        name = node_name,
    )

    # 设置并执行 Agent 步骤
    return await _execute_agent_step(state, agent, node_name)


async def _execute_agent_step(
        state: State, agent, agent_name: str
) -> Command[Literal["research_team"]]:
    """使用指定 agent 执行步骤的辅助函数"""
    logger.debug(f"[_execute_agent_step] 开始执行 agent: {agent_name}")

    current_plan = state.get("current_plan")
    plan_title = current_plan.title
    observations = state.get("observations", [])
    logger.debug(f"[_execute_agent_step] 计划标题: {plan_title}, 观察数量: {len(observations)}")

    # 查找第一个未执行的步骤
    current_step = None
    completed_steps = []
    for idx, step in enumerate(current_plan.steps):
        # 执行结果为空表示未执行该步骤
        if not step.execution_res:
            current_step = step
            logger.debug(f"[_execute_agent_step] 在索引 {idx} 处找到未执行的步骤: {step.title}")
            break
        else:
            completed_steps.append(step)

    if not current_step:
        logger.warning(f"[_execute_agent_step] 在总共 {len(current_plan.steps)} 个步骤中未找到未执行的步骤")
        return Command(
            update=preserve_state_meta_fields(state),
            goto="research_team"
        )

    logger.info(f"[_execute_agent_step] 正在执行步骤: {current_step.title}, agent: {agent_name}")
    logger.debug(f"[_execute_agent_step] 目前已完成的步骤数: {len(completed_steps)}")

    # 格式化已完成步骤的信息
    completed_steps_info = ""
    if completed_steps:
        completed_steps_info = "# Completed Research Steps\n\n"
        for i, step in enumerate(completed_steps):
            completed_steps_info += f"## Completed Step {i + 1}: {step.title}\n\n"
            completed_steps_info += f"<finding>\n{step.execution_res}\n</finding>\n\n"

    # 准备包含已完成步骤信息的 agent 输入
    agent_input = {
        "messages": [
            HumanMessage(
                content=f"# 研究主题\n\n{plan_title}\n\n{completed_steps_info}# 当前步骤\n\n## 标题\n\n{current_step.title}\n\n## 描述\n\n{current_step.description}\n\n## 语言环境\n\n{state.get('locale', 'en-US')}"
            )
        ]
    }

    # 为 researcher agent 添加引用提醒
    if agent_name == "researcher":
        # if state.get("resources"):
        #     resources_info = "**The user mentioned the following resource files:**\n\n"
        #     for resource in state.get("resources"):
        #         resources_info += f"- {resource.title} ({resource.description})\n"
        #
        #     agent_input["messages"].append(
        #         HumanMessage(
        #             content=resources_info
        #                     + "\n\n"
        #                     + "You MUST use the **local_search_tool** to retrieve the information from the resource files.",
        #         )
        #     )

        agent_input["messages"].append(
            HumanMessage(
                content="重要提示：不要在文本中包含内联引用。相反，应跟踪所有来源，并在末尾使用链接引用格式包含参考文献部分。在每个引用之间包含一个空行以提高可读性。每个引用使用以下格式：\n- [来源标题](URL)\n\n- [另一个来源](URL)",
                name="system",
            )
        )

    # 调用 agent
    default_recursion_limit = 25
    try:
        value_str = Config.get("AGENT_RECURSION_LIMIT", str(default_recursion_limit))
        parsed_limit = int(value_str)

        if parsed_limit > 0:
            recursion_limit = parsed_limit
            logger.info(f"递归限制设置为: {recursion_limit}")
        else:
            logger.warning(
                f"AGENT_RECURSION_LIMIT 值 '{value_str}' (解析为 {parsed_limit}) 不是正数。"
                f"使用默认值 {default_recursion_limit}。"
            )
            recursion_limit = default_recursion_limit
    except ValueError:
        raw_value = Config["AGENT_RECURSION_LIMIT"]
        logger.warning(
            f"无效的 AGENT_RECURSION_LIMIT 值: '{raw_value}'。"
            f"使用默认值 {default_recursion_limit}。"
        )
        recursion_limit = default_recursion_limit

    logger.info(f"Agent 输入: {agent_input}")

    # 在调用 agent 前验证消息内容
    try:
        validated_messages = validate_message_content(agent_input["messages"])
        agent_input["messages"] = validated_messages
    except Exception as validation_error:
        logger.error(f"验证 agent 输入消息时出错: {validation_error}")

    try:
        result = await agent.ainvoke(
            input=agent_input, config={"recursion_limit": recursion_limit}
        )
    except Exception as e:
        import traceback

        error_traceback = traceback.format_exc()
        error_message = f"执行 {agent_name} agent 处理步骤 '{current_step.title}' 时出错: {str(e)}"
        logger.exception(error_message)
        logger.error(f"完整堆栈跟踪:\n{error_traceback}")

        # 针对内容相关错误的增强诊断
        if "Field required" in str(e) and "content" in str(e):
            logger.error(f"检测到消息内容验证错误")
            for i, msg in enumerate(agent_input.get('messages', [])):
                logger.error(f"消息 {i}: 类型={type(msg).__name__}, "
                             f"有content属性={hasattr(msg, 'content')}, "
                             f"content类型={type(msg.content).__name__ if hasattr(msg, 'content') else 'N/A'}, "
                             f"content长度={len(str(msg.content)) if hasattr(msg, 'content') and msg.content else 0}")

        detailed_error = f"[错误] {agent_name.capitalize()} Agent 错误\n\n步骤: {current_step.title}\n\n错误详情:\n{str(e)}\n\n请检查日志以获取更多信息。"
        current_step.execution_res = detailed_error

        return Command(
            update={
                "messages": [
                    HumanMessage(
                        content=detailed_error,
                        name=agent_name,
                    )
                ],
                "observations": observations + [detailed_error],
                **preserve_state_meta_fields(state),
            },
            goto="research_team",
        )

    # 处理结果
    response_content = result["messages"][-1].content

    # 清理响应以删除多余的标记并在需要时截断
    response_content = sanitize_tool_response(str(response_content))

    logger.debug(f"{agent_name.capitalize()} 完整响应: {response_content}")

    # 使用执行结果更新步骤
    current_step.execution_res = response_content
    logger.info(f"步骤 '{current_step.title}' 由 {agent_name} 执行完成")

    return Command(
        update={
            "messages": [
                HumanMessage(
                    content=response_content,
                    name=agent_name,
                )
            ],
            "observations": observations + [response_content],
            **preserve_state_meta_fields(state),
        },
        goto="research_team",
    )