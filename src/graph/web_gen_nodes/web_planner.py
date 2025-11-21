import json
import logging
from langchain_core.messages import AIMessage
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command
from src.graph.State import WebGenState
from typing import Literal

from src.prompts.template import apply_prompt_template
from src.llms.llm import get_llm_by_type
from src.prompts.planner_model import WebPlan
from src.utils import repair_json_output

logger = logging.getLogger(__name__)


def web_planner_node(
        state: WebGenState,
        config: RunnableConfig
) -> Command[Literal["code_team", "__end__"]]:
    """规划器节点，负责生成完整的网站生成计划。"""
    logger.info("网页生成规划器正在生成完整计划")
    configurable = config.get("configurable", {})
    
    # 准备消息：从用户消息中提取需求
    modified_state = state.copy()
    messages = apply_prompt_template("web_planner", modified_state, configurable, "zh-CN")
    
    # 使用 reasoning 模型生成计划
    llm = get_llm_by_type("reasoning")
    
    logger.info("开始调用 reasoning 模型生成网页生成计划")
    full_response = ""
    response = llm.stream(messages)
    for chunk in response:
        full_response += chunk.content
    
    logger.info(f"网页生成规划器响应: {full_response}")
    
    # 解析 JSON 响应
    try:
        plan_dict = json.loads(repair_json_output(full_response))
        current_plan = WebPlan.model_validate(plan_dict)
        logger.info(f"成功生成网页生成计划，包含 {len(current_plan.steps)} 个步骤")
        
        return Command(
            update={
                "messages": state["messages"] + [AIMessage(content=full_response, name="web_planner")],
                "current_plan": current_plan,
            },
            goto="code_team",
        )
    except json.JSONDecodeError as e:
        logger.error(f"规划器响应不是有效的 JSON 格式: {e}")
        # JSON 解析失败，返回错误消息
        return Command(
            update={
                "messages": state["messages"] + [
                    AIMessage(
                        content=f"生成计划时出错，无法解析 JSON 响应。请重试。\n原始响应：{full_response[:200]}...",
                        name="web_planner"
                    )
                ],
            },
            goto="__end__",
        )
    except Exception as e:
        logger.error(f"生成网页计划时发生错误: {e}")
        return Command(
            update={
                "messages": state["messages"] + [
                    AIMessage(
                        content=f"生成计划时发生错误: {str(e)}",
                        name="web_planner"
                    )
                ],
            },
            goto="__end__",
        )