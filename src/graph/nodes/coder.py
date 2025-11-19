
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command
from typing import Literal
from .coordinator import logger
from src.graph.State import State
from langchain.agents import create_agent
from .researcher import _execute_agent_step
from ...config import AGENT_LLM_MAP
from ...llms.llm import get_llm_by_type
from ...prompts.template import apply_prompt_template_not_with_messages
from ...tools import python_repl_tool

async def coder_node(
        state: State, config: RunnableConfig
) -> Command[Literal["research_team"]]:
    """执行代码分析的 Coder 节点"""
    logger.info("Coder 节点正在编码。")
    logger.debug(f"[coder_node] 使用 python_repl_tool 启动 coder agent")


    node_name = "coder"

    agent = create_agent(
        model = get_llm_by_type(AGENT_LLM_MAP[node_name]),
        tools = [python_repl_tool],
        system_prompt= apply_prompt_template_not_with_messages(
            node_name, state, locale=state.get("locale", "zh-CN")
        ),
        name = node_name,
    )

    # 设置并执行 Agent 步骤
    return await _execute_agent_step(state, agent, node_name)