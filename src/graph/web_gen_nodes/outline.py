import logging
import uuid
from langchain_core.messages import HumanMessage, SystemMessage, ToolMessage, AIMessageChunk, AIMessage
from langchain_core.runnables import RunnableConfig

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
) -> WebGenState:
    """项目大纲预生成节点：在进入 web_planner 之前先生成 outline.md 文档。

    - 使用简单的 LLM 调用生成项目大纲内容；
    - 直接调用 write_file_tool 写入 outline.md 文件；
    - 将大纲内容写入 state.tree，供后续 web_planner 使用。
    """
    locale = state.get("locale", "zh-CN")
    
    # 从 state 中获取项目名称和编号
    project_name = state.get("name") or "未命名项目"
    project_number = state.get("number") or "00"
    
    logger.info(
        "outline 节点：开始生成项目大纲文档 - 项目名称: %s, 项目编号: %s",
        project_name,
        project_number
    )

    # 获取系统提示词
    system_prompt = apply_prompt_template_not_with_messages(
        "document_outline", state, locale=locale
    )

    # 获取 LLM 模型
    llm = get_llm_by_type(AGENT_LLM_MAP["outline"])

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

    # 从 state 中直接读取待办事项状态列表
    todo_status = ""
    todo_list = state.get("todo_list") or []
    if todo_list:
        todo_status = "# 当前计划待办事项状态\n\n" + "\n".join(todo_list) + "\n\n"

    # 构建任务消息：只包含待办状态，让 LLM 自己判断
    task_message = HumanMessage(
        content=(
            f"{todo_status}"
            f"请根据系统提示词、待办事项状态和历史消息（包括用户需求），"
            f"严格按照系统提示词中的结构要求，生成完整的中文项目大纲文档（outline.md）内容。"
        )
    )

    # 组合消息：系统提示词 + 历史消息 + 当前任务
    llm_messages = [SystemMessage(content=system_prompt)] + list(messages) + [task_message]

    try:
        # 调用 LLM 生成大纲内容
        logger.info("outline 节点：调用 LLM 生成大纲内容")
        
        full_content = ""
        reasoning_content = ""
        
        # 使用 astream 获取流式响应，以便前端能接收到 reasoning_content 事件
        async for chunk in llm.astream(llm_messages, config=config):
            full_content += str(chunk.content)
            # 累积 reasoning_content (如果有)
            if chunk.additional_kwargs.get("reasoning_content"):
                reasoning_content += chunk.additional_kwargs["reasoning_content"]
        
        outline_content = full_content
        
        # 构造一个完整的 AIMessage 对象作为 result
        result = AIMessage(
            content=outline_content, 
            additional_kwargs={"reasoning_content": reasoning_content} if reasoning_content else {}
        )

        # 清理大纲内容
        try:
            outline_text = sanitize_tool_response(str(outline_content))
        except Exception:
            outline_text = str(outline_content)
        
        # 直接调用 write_file_tool 写入文件
        logger.info("outline 节点：调用 write_file_tool 写入 outline.md")
        write_result = write_file_tool.invoke({
            "project_num": project_number,
            "file_name": "outline.md",
            "content": outline_text
        })
        logger.info("outline 节点：文件写入结果 - %s", write_result)
        
        # 构造一个假的 AIMessage 来表示工具调用
        tool_call_id = f"call_{uuid.uuid4().hex[:8]}"
        
        logger.info(f"Outline node reasoning content length: {len(reasoning_content) if reasoning_content else 0}")

        fake_ai_message = AIMessageChunk(
            content="",
            tool_calls=[{
                "name": "write_file_tool",
                "args": {
                    "project_num": project_number,
                    "file_name": "outline.md",
                    "content": outline_text
                },
                "id": tool_call_id
            }]
        )
        
        # 如果有深度思考内容，挂载到 fake_ai_message 上，确保前端能展示
        if reasoning_content:
            if "reasoning_content" not in fake_ai_message.additional_kwargs:
                fake_ai_message.additional_kwargs["reasoning_content"] = reasoning_content

        # 将工具调用结果作为工具消息追加到消息列表中（而不是 HumanMessage）
        tool_message = ToolMessage(
            content=str(write_result),
            tool_call_id=tool_call_id,
            name="write_file_tool",
            status="success",
            artifact={
                "file_name": "outline.md",
                "project_num": project_number,
            },
        )
        
        updated_messages = list(messages) + [result, fake_ai_message, tool_message]
        
    except Exception as error:
        logger.exception("outline 节点执行出错: %s", error)
        error_message = f"[错误] outline 节点在生成项目大纲时发生异常: {error}"
        
        error_tool_message = ToolMessage(
            content=error_message,
            tool_call_id=f"call_{uuid.uuid4().hex[:8]}",
            name="write_file_tool",
            status="error",
        )
        
        return {
            "messages": messages + [error_tool_message],
            "tree": state.get("tree"),
        }

    # 返回更新后的状态
    return {
        "messages": updated_messages,
        "tree": outline_text,
    }
