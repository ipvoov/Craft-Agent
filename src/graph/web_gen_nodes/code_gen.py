import logging
from typing import Literal

from langchain.agents import create_agent
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command

from src.graph.State import WebGenState
from src.config import AGENT_LLM_MAP
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template_not_with_messages
from src.tools.file import Tools
from .web_agent import execute_web_agent_step

logger = logging.getLogger(__name__)


async def code_gen_node(
        state: WebGenState,
        config: RunnableConfig
) -> Command[Literal["code_team"]]:
    """代码生成节点：使用 React Agent + CODER_MODEL 和文件工具完成代码生成步骤。"""
    logger.info("codegen 节点：开始执行代码生成步骤")

    node_name = "codegen"
    locale = state.get("locale", "zh-CN")

    system_prompt = apply_prompt_template_not_with_messages(
        node_name, state, locale=locale
    )

    agent = create_agent(
        model=get_llm_by_type(AGENT_LLM_MAP[node_name]),
        tools=Tools,  # 代码生成阶段挂载文件读写相关工具
        system_prompt=system_prompt,
        name=node_name,
    )

    return await execute_web_agent_step(state, agent, node_name)