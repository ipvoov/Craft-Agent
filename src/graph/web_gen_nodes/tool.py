from langchain_core.messages import ToolMessage
from langgraph.types import Command
from src.graph.State import WebGenState
from src.tools.file import Tools
from typing import Literal

async def tool_node(state:WebGenState)->Command[Literal["developer"]]:
    """工具节点：执行工具调用"""
    # 获取最后一条消息（包含 tool_calls）
    last_message = state["messages"][-1]

    # 执行所有工具调用
    tool_messages = []
    for tool_call in last_message.tool_calls:
        tool_name = tool_call["name"]
        tool_args = tool_call["args"]

        # 找到对应工具并执行
        for tool in Tools:
            if tool.name == tool_name:
                result = await tool.ainvoke(tool_args)
                tool_messages.append(
                    ToolMessage(content=result, tool_call_id=tool_call["id"])
                )
                break

    return Command(
        update={
            "messages": tool_messages,
            "goto": "developer",
        },
        goto="developer",
    )