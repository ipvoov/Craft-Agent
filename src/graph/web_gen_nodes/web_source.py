import logging
from typing import Literal

from langchain.agents import create_agent
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command

from src.graph.State import WebGenState
from src.config import AGENT_LLM_MAP
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template_not_with_messages
from src.tools.image import download_image_tool
from .web_agent import execute_web_agent_step

logger = logging.getLogger(__name__)


async def web_source_node(
        state: WebGenState,
        config: RunnableConfig
) -> Command[Literal["code_team"]]:
    """资源规划节点：使用 React Agent 为当前步骤生成资源规划说明。"""
    logger.info("web_source 节点：开始执行资源规划步骤")

    node_name = "web_source"
    locale = state.get("locale", "zh-CN")

    system_prompt = apply_prompt_template_not_with_messages(
        node_name, state, locale=locale
    )

    agent = create_agent(
        model=get_llm_by_type(AGENT_LLM_MAP[node_name]),
        tools=[download_image_tool],  # 资源规划阶段暂不挂载任何工具
        system_prompt=system_prompt,
        name=node_name,
    )

    return await execute_web_agent_step(state, agent, node_name)