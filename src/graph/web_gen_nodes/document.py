import logging
from typing import Literal

from langchain.agents import create_agent
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command

from src.graph.State import WebGenState
from src.config import AGENT_LLM_MAP
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template_not_with_messages
from src.prompts.planner_model import WebStepType
from src.tools.file import write_file_tool
from .web_agent import execute_web_agent_step

logger = logging.getLogger(__name__)


async def document_node(
        state: WebGenState,
        config: RunnableConfig
) -> Command[Literal["code_team"]]:
    """需求文档节点：使用 React Agent 生成面向开发的需求与设计文档。"""
    logger.info("document 节点：开始执行需求文档步骤")

    node_name = "document"
    locale = state.get("locale", "zh-CN")

    current_plan = state.get("current_plan")
    incomplete_step = None
    if current_plan and getattr(current_plan, "steps", None):
        for step in current_plan.steps:
            if getattr(step, "step_type", None) == WebStepType.Document and not getattr(step, "execution_res", None):
                incomplete_step = step
                break

    prompt_name = "document_interaction"
    if incomplete_step is not None:
        description = getattr(incomplete_step, "description", "") or ""
        lowered = description.lower()
        if "interaction.md" in lowered:
            prompt_name = "document_interaction"
        elif "design.md" in lowered:
            prompt_name = "document_design"

    logger.info("document 节点：选用的文档模板为 %s", prompt_name)

    system_prompt = apply_prompt_template_not_with_messages(
        prompt_name, state, locale=locale
    )

    agent = create_agent(
        model=get_llm_by_type(AGENT_LLM_MAP[node_name]),
        tools=[write_file_tool],
        system_prompt=system_prompt,
        name=node_name,
    )

    return await execute_web_agent_step(state, agent, node_name)