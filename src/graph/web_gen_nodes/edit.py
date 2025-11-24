from typing import Literal

from langchain_core.runnables import RunnableConfig
from langgraph.types import Command, interrupt

from src.graph.State import WebGenState


def edit_node(
    state: WebGenState,
    config: RunnableConfig,  # noqa: ARG001 - 当前未使用，但保留以便后续扩展
) -> Command[Literal["codegen", "__end__"]]:
    """WebGen 编辑确认节点。

    使用 langgraph 的 ``interrupt`` 机制，在代码生成完成后暂停，
    让用户在对话框中选择：

    - 继续修改代码 → 跳回 ``codegen`` 节点
    - 完成生成       → 结束 WebGen 流程（``__end__``）
    """

    # 第一次运行到这里时，会触发中断事件并立刻返回，等待下一次请求恢复；
    # 恢复时，``interrupt`` 会返回用户提供的反馈字符串。
    #
    # 对于 WebGen，我们约定反馈格式为：
    #   "[EDIT_CODE] 用户的修改指令..." 或 "[DONE] 可选说明..."
    feedback = interrupt(
        "代码生成已完成。请确认是否需要继续修改：\n\n"
        "- 选择 [EDIT_CODE] 继续改进或补充代码；\n"
        "- 选择 [DONE] 表示对当前结果满意并结束本次生成。"
    )

    raw_feedback = str(feedback).strip()
    upper_feedback = raw_feedback.upper()

    is_edit = False
    instruction = ""

    # 解析是否为编辑指令，并提取用户的自然语言修改说明
    if upper_feedback.startswith("[EDIT_CODE]"):
        is_edit = True
        instruction = raw_feedback[len("[EDIT_CODE]") :].strip()
    elif upper_feedback.startswith("EDIT_CODE"):
        is_edit = True
        instruction = raw_feedback[len("EDIT_CODE") :].strip()
    elif upper_feedback.startswith("[DONE]") or upper_feedback == "DONE":
        is_edit = False
    else:
        # 未知前缀时，默认按 DONE 处理，避免死循环
        is_edit = False

    if is_edit:
        goto: Literal["codegen", "__end__"] = "codegen"

        # 递增编辑轮次
        prev_round = int(state.get("edit_round", 0) or 0)
        new_round = prev_round + 1

        # 维护修改历史
        history = list(state.get("edit_history", []) or [])
        if instruction:
            history.append(instruction)

        update = {
            "messages": list(state.get("messages", []) or []),
            "is_editing": True,
            "edit_round": new_round,
            "edit_history": history,
            "last_edit_instruction": instruction,
        }
    else:
        goto = "__end__"
        update = {
            "messages": list(state.get("messages", []) or []),
            "is_editing": False,
            # 保留 edit_round 和 edit_history，便于后续分析
            "last_edit_instruction": "",
        }

    return Command(
        update=update,
        goto=goto,
    )