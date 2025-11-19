import json
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command
from typing import Literal
from .coordinator import logger
from src.graph.State import State
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from src.config.agents import AGENT_LLM_MAP
from src.prompts.planner_model import Plan
from ...utils import repair_json_output

def planner_node(
    state: State, config: RunnableConfig
) -> Command[Literal["human_feedback", "reporter"]]:
    """规划器节点，负责生成完整的研究计划。"""
    logger.info("规划器正在生成完整计划，语言环境: %s", state.get("locale", "zh-CN"))
    configurable = config.get("configurable", {})
    plan_iterations = state["plan_iterations"] if state.get("plan_iterations", 0) else 0

    # 澄清功能：使用澄清后的研究主题（完整历史记录）
    # 修改状态，使用澄清后的研究主题而非完整对话历史
    modified_state = state.copy()
    modified_state["messages"] = [HumanMessage(content=state["clarified_research_topic"])]
    modified_state["research_topic"] = state["clarified_research_topic"]

    messages = apply_prompt_template("planner", modified_state, configurable, state.get("locale", "zh-CN"))

    logger.info(f"澄清模式：使用澄清后的研究主题: {state['clarified_research_topic']}")

    # 背景调查功能：如果启用且有结果，添加背景调查结果到消息中
    if state.get("enable_background_investigation") and state.get(
        "background_investigation_results"
    ):
        messages += [
            HumanMessage(content=(
                    "用户查询的背景调查结果：\n"
                    + state["background_investigation_results"]
                    + "\n"
                ))
        ]

    if configurable.get("enable_deep_thinking", False):
        llm = get_llm_by_type("reasoning")
    else:
        llm = get_llm_by_type("basic").with_structured_output( # with_structured_output 结构化输出
            Plan,
            method="json_mode",
        )

    # 如果计划迭代次数超过最大限制，直接返回到报告节点
    if plan_iterations >= configurable.get("max_plan_iterations", 1):
        return Command(
            update=preserve_state_meta_fields(state),
            goto="reporter"
        )

    full_response = ""
    if AGENT_LLM_MAP["planner"] == "basic" and not configurable.get("enable_deep_thinking", False):
        response = llm.invoke(messages)
        # 基本模型响应转换为 JSON 字符串 （indent 美化JSON 输出，设置缩进层级 || exclude_none 排除None值）
        full_response = response.model_dump_json(indent=4, exclude_none=True)
    else:
        response = llm.stream(messages)
        for chunk in response:
            full_response += chunk.content
    logger.debug(f"当前状态消息: {state['messages']}")
    logger.info(f"规划器响应: {full_response}")

    try:
        curr_plan = json.loads(repair_json_output(full_response))
    except json.JSONDecodeError:
        logger.warning("规划器响应不是有效的 JSON 格式")
        if plan_iterations > 0:
            return Command(
                update=preserve_state_meta_fields(state),
                goto="reporter"
            )
        else:
            return Command(
                update=preserve_state_meta_fields(state),
                goto="__end__"
            )

    # 验证并修复计划，确保满足网络搜索要求
    if isinstance(curr_plan, dict):                  # enforce_web_search 强制确保每个计划中至少有一个网络搜索步骤
        curr_plan = validate_and_fix_plan(curr_plan, configurable.get("enforce_web_search", False))
    if isinstance(curr_plan, dict) and curr_plan.get("has_enough_context"):
        logger.info("规划器响应包含足够的上下文信息。")
        new_plan = Plan.model_validate(curr_plan)
        return Command(
            update={
                "messages": [AIMessage(content=full_response, name="planner")],
                "current_plan": new_plan,
                **preserve_state_meta_fields(state),
            },
            goto="reporter",
        )

    return Command(
        update={
            "messages": [AIMessage(content=full_response, name="planner")],
            "current_plan": full_response,
            **preserve_state_meta_fields(state),
        },
        goto="human_feedback",
    )


def preserve_state_meta_fields(state: State) -> dict:
    """
    提取在状态转换过程中需要保留的元数据/配置字段。
    这些字段对于工作流的连续性至关重要，必须显式地包含在所有 Command.update 字典中，
    以防止它们恢复为默认值。
    参数:
        state: 当前状态对象
    返回:
        需要保留的元数据字段字典
    """
    return {
        "locale": state.get("locale", "zh-CN"), # 语言环境
        "research_topic": state.get("research_topic", ""), # 原始研究主题
        "clarified_research_topic": state.get("clarified_research_topic", ""), # 澄清后的研究主题
        "clarification_history": state.get("clarification_history", []), # 澄清历史记录
        "max_clarification_rounds": state.get("max_clarification_rounds", 3), # 最大澄清轮次
        "clarification_rounds": state.get("clarification_rounds", 0), # 当前澄清轮次
        # "resources": state.get("resources", []), # RAG资源列表
    }


def validate_and_fix_plan(plan: dict, enforce_web_search: bool = False) -> dict:
    """
    验证并修复计划以确保其满足要求。
    参数:
        plan: 要验证的计划字典
        enforce_web_search: 如果为 True，确保至少有一个步骤的 need_search=true
    返回:
        验证/修复后的计划字典
    """
    if not isinstance(plan, dict):
        return plan

    steps = plan.get("steps", [])

    # ============================================================
    # 第一部分：修复缺失的 step_type 字段（Issue #650 修复）
    # ============================================================
    for idx, step in enumerate(steps):
        if not isinstance(step, dict):
            continue

        # 检查 step_type 是否缺失或为空
        if "step_type" not in step or not step.get("step_type"):
            # 根据 need_search 值推断 step_type
            inferred_type = "research" if step.get("need_search", False) else "processing"
            step["step_type"] = inferred_type
            logger.info(
                f"已修复步骤 {idx} 缺失的 step_type ({step.get('title', 'Untitled')}): "
                f"根据 need_search={step.get('need_search', False)} 推断为 '{inferred_type}'"
            )

    # ============================================================
    # 第二部分：强制网络搜索要求
    # ============================================================
    if enforce_web_search:
        # 检查是否有任何步骤的 need_search=true
        has_search_step = any(step.get("need_search", False) for step in steps)

        if not has_search_step and steps:
            # 确保第一个研究步骤启用网络搜索
            for idx, step in enumerate(steps):
                if step.get("step_type") == "research":
                    step["need_search"] = True
                    logger.info(f"已在索引 {idx} 的研究步骤上强制启用网络搜索")
                    break
            else:
                # 备用方案：如果不存在研究步骤，将第一个步骤转换为启用网络搜索的研究步骤。
                # 这确保至少有一个步骤会按要求执行网络搜索。
                steps[0]["step_type"] = "research"
                steps[0]["need_search"] = True
                logger.info("已将第一个步骤转换为研究步骤并强制启用网络搜索")
        elif not has_search_step and not steps:
            # 如果没有步骤存在，添加一个默认的研究步骤
            logger.warning("计划没有步骤。正在添加默认研究步骤。")
            plan["steps"] = [
                {
                    "need_search": True,
                    "title": "Initial Research",
                    "description": "Gather information about the topic",
                    "step_type": "research",
                }
            ]

    return plan