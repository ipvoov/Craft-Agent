
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command
from src.graph.State import WebGenState
from typing import Literal

def code_team_node(
        state :WebGenState,
        config: RunnableConfig
)-> Command[Literal["web_planner", "web_source", "document", "codegen", "__end__"]]:
    """页面生成团队节点，用于协作完成任务。"""
    pass