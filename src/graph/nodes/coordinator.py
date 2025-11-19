from langchain_core.runnables import RunnableConfig
from langgraph.types import Command
from typing import Literal
import logging
from src.graph.State import State
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from src.config.agents import AGENT_LLM_MAP
from src.graph.utils import reconstruct_clarification_history,build_clarified_topic_from_history

# 导入协调器工具
from src.tools.condinator_tools import (
    handoff_to_planner,
    handoff_after_clarification,
)

logger = logging.getLogger(__name__)

def coordinator_node(
        state: State, config: RunnableConfig
) -> Command[Literal["planner", "background_investigator", "coordinator", "__end__"]]:
    """
    Coordinator 节点：与用户沟通并处理需求澄清

    这是工作流的入口节点，负责：
    1. 处理用户的初始请求
    2. 可选的多轮澄清对话
    3. 将明确的任务转交给 Planner
    """
    logger.info("Coordinator 开始处理")
    # 从配置中提取配置对象
    configurable = config.get("configurable", {})

    # ========== 状态初始化 ==========
    # 获取用户原始研究主题
    initial_topic = state.get("research_topic", "")
    # 初始化澄清后的主题（初始值为原始主题）
    clarified_topic = initial_topic

    # ========== 检查是否开启澄清模式 ==========
    if not state.get("enable_clarification", True):
        logger.info("澄清模式已禁用，跳过澄清流程")
        
        goto = "planner"
        if state.get("enable_background_investigation"):
            goto = "background_investigator"
            
        return Command(
            update={
                "clarified_research_topic": initial_topic,
                "is_clarification_complete": True,
                "goto": goto,
            },
            goto=goto,
        )

    # ========== 加载澄清状态 ==========
    # 当前已进行的澄清轮数
    clarification_rounds = state.get("clarification_rounds", 0)
    # 澄清对话历史（只包含用户的回答）
    clarification_history = list(state.get("clarification_history", []) or [])
    # 过滤掉空值
    clarification_history = [item for item in clarification_history if item]
    # 最大澄清轮数
    max_clarification_rounds = state.get("max_clarification_rounds", 3)

    # ========== 准备消息 ==========
    state_messages = list(state.get("messages", []))
    messages = apply_prompt_template("coordinator", state, locale=state.get("locale", "zh-CN"))

    # 重建澄清历史（从消息中提取）
    clarification_history = reconstruct_clarification_history(
        state_messages, clarification_history, initial_topic
    )

    # 从历史记录构建澄清后的主题  clarified_topic = "研究AI - GPT模型, GPT-4" || clarification_history = ["研究AI", "GPT模型","GPT-4"]
    clarified_topic, clarification_history = build_clarified_topic_from_history(
        clarification_history
    )
    logger.debug("澄清历史已重建: %s", clarification_history)

    # 提取初始主题和最新用户回答
    if clarification_history:
        initial_topic = clarification_history[0]  # 第一条是初始主题
        latest_user_content = clarification_history[-1]  # 最后一条是最新回答
    else:
        latest_user_content = ""

    # ========== 添加澄清上下文 ==========
    # 第一轮：添加澄清模式说明
    if clarification_rounds == 0:
        messages.append(
           SystemMessage(content="澄清模式已启用。请遵循指令中的'澄清流程'指南进行操作。")
        )

    # 记录当前澄清状态
    current_response = latest_user_content or "无响应"
    logger.info(
        "澄清轮次 %s/%s | 主题: %s | 当前用户响应: %s",
        clarification_rounds,
        max_clarification_rounds,
        clarified_topic or initial_topic,
        current_response,
    )

    # Todo 构建澄清上下文消息
    clarification_context = f"""Continuing clarification (round {clarification_rounds}/{max_clarification_rounds}):
        User's latest response: {current_response}
        Ask for remaining missing dimensions. Do NOT repeat questions or start new topics."""

    messages.append(SystemMessage(content=clarification_context))

    # 绑定两个工具：让 LLM 自行选择使用哪个
    tools = [handoff_to_planner, handoff_after_clarification]

    # ========== 检查是否达到最大轮数 ==========
    if clarification_rounds >= max_clarification_rounds:
        # 达到最大轮数，强制转交
        logger.warning(
            f"已达到最大澄清轮数 ({max_clarification_rounds})。强制转交给 planner。使用准备好的澄清主题: {clarified_topic}"
        )
        # 添加强制转交的系统指令
        messages.append(
            SystemMessage(content=f"已达到最大轮数。你必须根据用户的语言调用 handoff_after_clarification 工具（而不是 handoff_to_planner），并使用相应的语言环境和 research_topic='{clarified_topic}'。不要再提问。")
        )

    # ========== 调用 LLM ==========
    response = (
        get_llm_by_type(AGENT_LLM_MAP["coordinator"])
        .bind_tools(tools)
        .invoke(messages)
    )
    logger.debug(f"当前状态消息: {state['messages']}")

    # ========== 初始化响应处理变量 ==========
    goto = "__end__"
    locale = state.get("locale", "zh-CN")
    # research_topic 使用历史记录的第一条或状态中的值
    research_topic = (
        clarification_history[0]
        if clarification_history
        else state.get("research_topic", "")
    )
    # 确保 clarified_topic 有值
    if not clarified_topic:
        clarified_topic = research_topic

    # ========== 处理 LLM 响应 ==========
    # 情况 1：LLM 没有调用工具，而是在提问（澄清中）
    if not response.tool_calls and response.content:
        # 检查是否已达到最大轮数
        if clarification_rounds >= max_clarification_rounds:
            # 达到最大轮数但 LLM 仍在提问，强制转交
            logger.warning(
                f"已达到最大澄清轮数 ({max_clarification_rounds})。"
                "LLM 未调用转交工具，强制转交给 planner。"
            )
            goto = "planner"
            # 继续到最后的统一处理部分
        else:
            # 继续澄清流程
            clarification_rounds += 1  # 增加轮数

            # 注意：不要将 LLM 的问题添加到 clarification_history
            # clarification_history 只存储用户的回答
            logger.info(
                f"澄清响应: {clarification_rounds}/{max_clarification_rounds}: {response.content}"
            )

            # 将 Coordinator 的问题添加到消息历史
            updated_messages = list(state_messages)
            if response.content:
                updated_messages.append(
                    AIMessage(content=response.content, name="coordinator")
                )

            # 返回命令，继续澄清（返回到 coordinator）
            return Command(
                update={
                    "messages": updated_messages,
                    "locale": locale,
                    "research_topic": research_topic,
                    # "resources": configurable.resources,
                    "clarification_rounds": clarification_rounds,
                    "clarification_history": clarification_history,
                    "clarified_research_topic": clarified_topic,
                    "is_clarification_complete": False,
                    "goto": goto,
                    # 中断以等待用户回答
                    "__interrupt__": [("coordinator", response.content)],
                },
                goto=goto,
            )
    else:
        # 情况 2：LLM 调用了工具（转交）或没有内容
        if response.tool_calls:
            logger.info(
                f"澄清在 {clarification_rounds} 轮后完成。LLM 调用了转交工具。"
            )
        else:
            logger.warning("LLM 响应没有内容且没有工具调用。")
        # goto 将在下面的统一处理部分设置

    # ============================================================
    # 最终：构建并返回 Command
    # ============================================================

    # 将响应内容添加到消息历史
    messages = list(state.get("messages", []) or [])
    if response.content:
        messages.append(HumanMessage(content=response.content, name="coordinator"))

    # 处理工具调用
    if response.tool_calls:
        try:
            for tool_call in response.tool_calls:
                tool_name = tool_call.get("name", "")

                # 检查是否调用了转交工具
                if tool_name in ["handoff_to_planner", "handoff_after_clarification"]:
                    logger.info("转交给 planner")
                    goto = "planner"

                    # 记录使用的澄清主题
                    logger.info(
                        "使用准备好的澄清主题: %s",
                        clarified_topic or research_topic,
                    )
                    break

        except Exception as e:
            logger.error(f"处理工具调用时出错: {e}")
            goto = "planner"  # 出错时默认转交给 planner
    else:
        # 没有工具调用：可能是 LLM 出错，回退到 planner
        logger.warning(
            "LLM 未调用任何工具。这可能表示模型的工具调用存在问题。"
            "回退到 planner 以确保研究继续进行。"
        )
        logger.debug(f"Coordinator 响应内容: {response.content}")
        logger.debug(f"Coordinator 响应对象: {response}")
        goto = "planner"

    # ========== 应用背景调研路由 ==========
    # 如果启用了背景调研，并且要去 planner，则先去 background_investigator
    if goto == "planner" and state.get("enable_background_investigation"):
        goto = "background_investigator"

    # 确定最终的澄清后主题
    clarified_research_topic_value = clarified_topic or research_topic

    # ========== 返回 Command ==========
    return Command(
        update={
            "messages": messages,  # 更新消息历史
            "locale": locale,  # 语言环境
            "research_topic": research_topic,  # 原始主题
            "clarified_research_topic": clarified_research_topic_value,  # 澄清后的完整主题
            # "resources": configurable.resources,  # RAG资源配置
            "clarification_rounds": clarification_rounds,  # 澄清轮数
            "clarification_history": clarification_history,  # 澄清历史
            "is_clarification_complete": goto != "coordinator",  # 澄清是否完成
            "goto": goto,  # 下一个节点
        },
        goto=goto,  # 指定下一个要执行的节点
    )