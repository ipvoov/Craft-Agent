
from langchain_core.messages import ToolMessage
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command
from src.graph.State import WebGenState
from typing import Literal

def planner_node(
        state:WebGenState,
        config: RunnableConfig
)->Command[Literal["developer"]]:
    """计划节点：生成项目计划"""

    

    return Command(
        update={
            "messages": [],
            "goto": "developer",
        },
        goto="developer",
    )