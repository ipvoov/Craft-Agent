import logging
from typing import Literal

from langchain.agents import create_agent
from langchain_core.messages import HumanMessage
from langchain_core.runnables import RunnableConfig
from langgraph.types import Command

from src.config import AGENT_LLM_MAP
from src.graph.State import WebGenState
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template_not_with_messages
from src.tools.file import write_file_tool
from src.utils.json_utils import sanitize_tool_response

logger = logging.getLogger(__name__)


async def outline_node(
    state: WebGenState,
    config: RunnableConfig,
) -> Command[Literal["web_planner"]]:
    """项目大纲预生成节点：在进入 web_planner 之前先生成 outline.md 文档。

    - 使用 document_outline 提示词和 write_file_tool，生成完整的项目大纲文档；
    - 将模型最终回复视为 outline.md 的正文，写入 state.tree，供后续 web_planner 使用；
    - 不负责生成任何 WebPlan 步骤。
    """
    node_name = "outline"
    locale = state.get("locale", "zh-CN")
    logger.info("outline 节点：开始生成项目大纲文档")

    # 使用与 document_outline 相同的系统提示词
    system_prompt = apply_prompt_template_not_with_messages(
        "document_outline", state, locale=locale
    )

    agent = create_agent(
        model=get_llm_by_type(AGENT_LLM_MAP["document"]),
        tools=[write_file_tool],
        system_prompt=system_prompt,
        name=node_name,
    )

    # 取最近一条用户需求作为上下文
    user_desc = ""
    messages = state.get("messages", []) or []
    for msg in reversed(messages):
        if isinstance(msg, HumanMessage):
            user_desc = msg.content
            break
    if not user_desc and messages:
        last = messages[-1]
        user_desc = getattr(last, "content", str(last))

    content = (
        "你现在处于网页生成流程的预处理阶段，需要先为当前项目生成项目大纲文档（outline.md），"
        "后续的网页生成计划会严格参考这份大纲。\n\n"
        "# 用户需求\n\n"
        f"{user_desc}\n\n"
        "请严格按照系统提示词中对项目大纲文档的结构要求，输出完整的中文项目大纲文档，并通过 write_file_tool 将同样的内容写入项目根目录的 outline.md。"
    )

    try:
        result = await agent.ainvoke({"messages": [HumanMessage(content=content)]})
    except Exception as error:  # pragma: no cover - 保护性分支
        logger.exception("outline 节点执行出错: %s", error)
        error_message = f"[错误] outline 节点在生成项目大纲时发生异常: {error}"
        return Command(
            update={
                "messages": messages
                + [HumanMessage(content=error_message, name=node_name)],
                "tree": state.get("tree"),
            },
            goto="web_planner",
        )

    if isinstance(result, dict) and "messages" in result and result["messages"]:
        response_content = result["messages"][-1].content
    else:
        response_content = str(result)

    try:
        outline_text = sanitize_tool_response(str(response_content))
    except Exception:  # pragma: no cover - 容错处理
        outline_text = str(response_content)

    return Command(
        update={
            "messages": messages
            + [HumanMessage(content=outline_text, name=node_name)],
            "tree": outline_text,
        },
        goto="web_planner",
    )
