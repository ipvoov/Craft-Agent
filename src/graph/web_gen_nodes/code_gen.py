import logging
import uuid
import json
from langchain_core.messages import HumanMessage, AIMessage, ToolMessage, AIMessageChunk, SystemMessage
from langchain_core.runnables import RunnableConfig

from src.graph.State import WebGenState
from src.config import AGENT_LLM_MAP
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template_not_with_messages
from src.tools.file import Tools, write_file_tool, read_file_tool, modify_file_tool, delete_file_tool
from src.utils.json_utils import sanitize_tool_response

logger = logging.getLogger(__name__)

# 工具映射表
TOOL_MAP = {
    "write_file_tool": write_file_tool,
    "read_file_tool": read_file_tool,
    "modify_file_tool": modify_file_tool,
    "delete_file_tool": delete_file_tool,
}

async def code_gen_node(
        state: WebGenState,
        config: RunnableConfig
) -> WebGenState:
    """代码生成节点：手动管理 LLM 与工具交互，实现更精细的流式输出控制。
    
    - 绑定文件工具到 LLM
    - 循环执行：LLM -> 工具调用 -> 执行工具 -> 反馈结果
    - 确保每个工具调用都产生标准的 AIMessage(tool_calls) 和 ToolMessage，以便前端渲染
    """
    logger.info("codegen 节点：开始执行代码生成 (Manual Mode)")

    node_name = "codegen"
    locale = state.get("locale", "zh-CN")
    
    # 获取项目信息
    project_name = state.get("name") or "未命名项目"
    project_number = state.get("number") or "00"

    # 编辑模式状态
    is_editing: bool = bool(state.get("is_editing", False))
    edit_round: int = int(state.get("edit_round", 0) or 0)
    edit_history = list(state.get("edit_history", []) or [])
    last_edit_instruction: str = state.get("last_edit_instruction", "") or ""

    # 构建系统提示词
    system_prompt_content = apply_prompt_template_not_with_messages(
        node_name, state, locale=locale
    )
    system_message = SystemMessage(content=system_prompt_content)

    # 获取并绑定工具的 LLM
    llm = get_llm_by_type(AGENT_LLM_MAP[node_name])
    llm_with_tools = llm.bind_tools(Tools)

    # 根据是否处于编辑模式构建任务描述
    if is_editing:
        # 组合历史编辑指令，便于模型理解上下文
        history_block = ""
        if edit_history:
            numbered = [f"{idx + 1}. {item}" for idx, item in enumerate(edit_history)]
            history_block = "\n".join(numbered)

        task_content = (
            f"你现在是 {node_name} agent，负责在已有项目「{project_name}」(编号: {project_number}) 的基础上按用户的最新修改要求调整代码。\n\n"
            f"当前处于第 {max(edit_round, 1)} 轮代码修改。\n\n"
            f"请基于系统提示词、历史消息中的项目大纲（outline.md）、现有代码文件以及以下编辑历史，谨慎地进行增量修改：\n\n"
            + (f"历史编辑指令：\n{history_block}\n\n" if history_block else "")
            + "本轮用户的最新修改指令如下（务必严格遵守）：\n"
            + (last_edit_instruction or "（注意：用户本轮未提供明确修改说明，请结合现有页面和历史编辑记录做小幅、安全的优化。）")
            + "\n\n在修改过程中：\n"
            + "1. 优先使用 read_file_tool 阅读现有文件，理解当前实现；\n"
            + "2. 使用 modify_file_tool / write_file_tool 对相关文件做最小必要修改，避免无关重构；\n"
            + "3. 保持页面结构、交互逻辑与视觉风格的一致性；\n"
            + "4. 修改完成后，确保页面仍然可以正常运行。"
        )
    else:
        # 初次生成模式
        task_content = (
            f"你现在是 {node_name} agent，负责为项目「{project_name}」(编号: {project_number}) 生成完整的网页代码。\n\n"
            f"请根据系统提示词中的说明，以及历史消息中的项目大纲（outline.md）和图片资源信息，完成以下任务：\n"
            f"1. 阅读项目大纲，了解需要生成哪些页面\n"
            f"2. 使用历史消息中的图片链接（image_links）作为页面素材\n"
            f"3. 依次生成所有页面的完整代码（HTML + 内联 CSS + JS）\n"
            f"4. 确保页面之间的导航链接正确\n\n"
            f"请开始工作，使用文件工具生成代码。每次可以生成一个或多个文件。"
        )

    # 初始化消息列表：保留历史消息 + 系统提示 + 任务描述
    # state["messages"] 包含历史对话，将其作为上下文
    current_messages = [system_message] + list(state.get("messages", [])) + [HumanMessage(content=task_content)]

    # 最大循环次数，防止死循环
    max_iterations = 15
    iteration = 0

    new_messages = [] # 用于记录本轮产生的消息

    while iteration < max_iterations:
        iteration += 1
        logger.info(f"codegen 节点：第 {iteration} 轮调用 LLM")

        try:
            # 调用 LLM
            response = await llm_with_tools.ainvoke(current_messages, config=config)
            
            # 将 LLM 的回复加入消息历史
            current_messages.append(response)
            new_messages.append(response)

            # 检查是否有工具调用
            if not response.tool_calls:
                logger.info("codegen 节点：LLM 未返回工具调用，流程结束")
                break
            
            # 处理工具调用
            for tool_call in response.tool_calls:
                tool_name = tool_call["name"]
                tool_args = tool_call["args"]
                tool_call_id = tool_call["id"]
                
                logger.info(f"codegen 节点：检测到工具调用 {tool_name}")

                if tool_name in TOOL_MAP:
                    tool = TOOL_MAP[tool_name]
                    try:
                        tool_result = await tool.ainvoke(tool_args)
                        tool_output = str(tool_result)
                        status = "success"
                        logger.info(f"codegen 节点：工具 {tool_name} 执行成功")
                    except Exception as e:
                        logger.error(f"codegen 节点：工具 {tool_name} 执行失败: {e}")
                        tool_output = f"Error executing {tool_name}: {str(e)}"
                        status = "error"
                    
                    # 构造 ToolMessage
                    tool_msg = ToolMessage(
                        content=tool_output,
                        tool_call_id=tool_call_id,
                        name=tool_name,
                        status=status
                    )
                    
                    current_messages.append(tool_msg)
                    new_messages.append(tool_msg)
                else:
                    logger.warning(f"codegen 节点：未知工具 {tool_name}")
                    tool_msg = ToolMessage(
                        content=f"Error: Tool {tool_name} not found",
                        tool_call_id=tool_call_id,
                        name=tool_name,
                        status="error"
                    )
                    current_messages.append(tool_msg)
                    new_messages.append(tool_msg)
            
            # 继续循环，把工具结果给 LLM，看它是否还要继续生成
            
        except Exception as error:
            logger.exception("codegen 节点执行出错: %s", error)
            error_message = f"[错误] codegen 节点发生异常: {error}"
            return {
                "messages": state["messages"] + [AIMessage(content=error_message, name=node_name)]
            }
    
    logger.info("codegen 节点：代码生成全部完成")
    
    return {
        "messages": state["messages"] + new_messages
    }
