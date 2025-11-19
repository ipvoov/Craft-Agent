from langchain_core.tools import tool
from typing import Annotated


@tool
def handoff_to_planner(
    research_topic: Annotated[str, "要转交的研究任务主题。"],
    locale: Annotated[str, "用户检测到的语言环境（例如：zh-CN）。"],
):
    """转交给 planner Agent 来制定计划。"""

    # 这个工具不会返回任何内容：我们只是用它来让大模型发出信号，表明它需要移交给规划代理。
    return

@tool
def handoff_after_clarification(
    locale: Annotated[str, "用户检测到的语言区域（例如：zh-CN）。"],
    research_topic: Annotated[
        str, "基于所有澄清轮次后最终确定的研究主题。"
    ],
):
    """在澄清轮次完成后移交给 planner 。将所有澄清历史传递给 planner 以供分析。"""
    return