from langchain_core.messages import SystemMessage
from langgraph.types import Command
from typing import Literal
from src.graph.State import WebGenState
from src.llms.llm import get_llm_by_type
from src.config.agents import AGENT_LLM_MAP
from src.tools.file import Tools

async def developer_node(state:WebGenState)->Command[Literal["tools", "__end__"]]:
    """Agent 节点：调用模型进行推理"""
    # 绑定工具到模型
    model = get_llm_by_type(AGENT_LLM_MAP["developer"]).bind_tools(Tools)
    message = state["messages"]

    # 调用模型
    result = await model.ainvoke(input=message)

    # 使用最新模型输出判断是否需要调用工具
    if hasattr(result, "tool_calls") and result.tool_calls:
        return Command(
            update={
                "messages": [result],
                "goto": "tools",
            },
            goto="tools",
        )

    # 没有工具调用时，直接结束对话
    return Command(
        update={
            "messages": [result],
            "goto": "__end__",
        },
        goto="__end__",
    )