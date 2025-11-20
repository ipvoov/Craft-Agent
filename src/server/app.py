import json
from uuid import uuid4
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from typing import Optional, List
from langchain_core.messages import ToolMessage, AIMessageChunk
from langgraph.types import Command
from .chat_req import ChatRequest, EnhancePromptRequest
import logging
from .config_req import ConfigResponse, ModelConfig, RagConfig
from ..config import Config
from ..config.report_style import ReportStyle
from ..graph.builder import build_graph_with_memory, build_prompt_enhancer_graph, build_web_gent_graph_with_memory
from ..graph.utils import reconstruct_clarification_history, build_clarified_topic_from_history

load_dotenv()  # noqa: E402

logger = logging.getLogger(__name__)

graph = build_graph_with_memory()

WebGenGraph = build_web_gent_graph_with_memory()



def get_configured_llm_models() -> ModelConfig:
    """从配置文件中读取已配置的LLM模型"""
    basic_models = []
    reasoning_models = []
    
    # 读取基础模型配置
    if "BASIC_MODEL" in Config and isinstance(Config["BASIC_MODEL"], dict):
        model_name = Config["BASIC_MODEL"].get("model", "")
        if model_name:
            basic_models.append(model_name)
    
    # 读取推理模型配置
    if "REASONING_MODEL" in Config and isinstance(Config["REASONING_MODEL"], dict):
        model_name = Config["REASONING_MODEL"].get("model", "")
        if model_name:
            reasoning_models.append(model_name)
    
    return ModelConfig(basic=basic_models, reasoning=reasoning_models)

app = FastAPI(
    title="Deer API",
    description="API for Deer",
    version="0.1.0",
)

# 配置CORS中间件,允许前端跨域访问
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001", "http://127.0.0.1:3001"],  # 前端地址
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有HTTP方法
    allow_headers=["*"],  # 允许所有请求头
)


@app.get("/api/config", response_model=ConfigResponse)
async def config():
    """获取服务器配置,包括模型和RAG配置"""
    return ConfigResponse(
        models=get_configured_llm_models(),
        rag=RagConfig(provider=""),  # 暂不使用RAG,返回空字符串
    )


@app.post("/api/chat/stream")
async def chat_stream(request: ChatRequest):
    """流式对话接口，具体业务逻辑由调用方实现。"""

    thread_id = request.thread_id
    if thread_id == "__default__":
        thread_id = str(uuid4())
    return StreamingResponse(
        _astream_workflow_generator(
            request.model_dump()["messages"],
            thread_id,
            # request.resources,
            request.max_plan_iterations,
            request.max_step_num,
            request.max_search_results,
            request.auto_accepted_plan,
            request.interrupt_feedback,
            {},# mcp_settings
            request.enable_background_investigation,
            request.report_style,
            request.enable_deep_thinking,
            request.enable_clarification,
            request.max_clarification_rounds,
            request.locale,
            request.interrupt_before_tools,
        ),
        media_type="text/event-stream",
    )

@app.post("/api/prompt/enhance")
async def enhance_prompt(request: EnhancePromptRequest):
    """
    提示词增强端点
    
    接收用户的原始提示词、可选的上下文信息和报告风格，
    返回经过 AI 优化的增强版提示词
    
    Args:
        request: EnhancePromptRequest 包含 prompt、context 和 report_style
        
    Returns:
        dict: {"result": enhanced_prompt}
    """
    try:
        sanitized_prompt = request.prompt.replace("\r\n", "").replace("\n", "")
        logger.info(f"增强提示词: {sanitized_prompt}")

        # 将字符串 report_style 转换为 ReportStyle 枚举
        report_style = None
        if request.report_style:
            try:
                # 处理大小写输入
                style_mapping = {
                    "ACADEMIC": ReportStyle.ACADEMIC,
                    "POPULAR_SCIENCE": ReportStyle.POPULAR_SCIENCE,
                    "NEWS": ReportStyle.NEWS,
                    "SOCIAL_MEDIA": ReportStyle.SOCIAL_MEDIA,
                    "STRATEGIC_INVESTMENT": ReportStyle.STRATEGIC_INVESTMENT,
                }
                report_style = style_mapping.get(
                    request.report_style.upper(), ReportStyle.ACADEMIC
                )
            except Exception:
                # 如果风格无效，默认使用学术风格
                report_style = ReportStyle.ACADEMIC
        else:
            report_style = ReportStyle.ACADEMIC

        # 构建工作流并执行
        workflow = build_prompt_enhancer_graph()
        final_state = workflow.invoke(
            {
                "prompt": request.prompt,
                "context": request.context,
                "report_style": report_style,
                "locale": "zh-CN",  # 默认使用中文
            }
        )
        return {"result": final_state["output"]}
    except Exception as e:
        logger.exception(f"提示词增强过程中发生错误: {str(e)}")
        raise e


async def _astream_workflow_generator(
        messages: List[dict],
        thread_id: str,
        # resources: List[Resource],
        max_plan_iterations: int,
        max_step_num: int,
        max_search_results: int,
        auto_accepted_plan: bool,
        interrupt_feedback: str,
        mcp_settings: dict,
        enable_background_investigation: bool,
        report_style: ReportStyle,
        enable_deep_thinking: bool,
        enable_clarification: bool,
        max_clarification_rounds: int,
        locale: str = "en-US",
        interrupt_before_tools: Optional[List[str]] = None,
):
    """
    异步流式生成工作流执行事件的生成器函数
    该函数负责处理整个 Agent 工作流的执行流程，包括：
    1. 处理初始消息和用户输入
    2. 重建澄清历史并构建研究主题
    3. 准备工作流输入和配置
    4. 根据配置选择合适的检查点保存器（PostgreSQL/MongoDB/内存）
    5. 流式输出工作流执行过程中的所有事件
    参数:
        messages: 对话消息列表，包含用户和系统的历史消息
        thread_id: 线程ID，用于标识当前对话会话
        resources: 资源列表，包含外部数据源和工具
        max_plan_iterations: 最大计划迭代次数，控制规划器的重试次数
        max_step_num: 最大步骤数，限制单个计划的执行步骤数量
        max_search_results: 最大搜索结果数，限制搜索工具返回的结果数量
        auto_accepted_plan: 是否自动接受计划，True 表示跳过计划确认环节
        interrupt_feedback: 中断反馈信息，用于恢复执行时的用户反馈
        mcp_settings: MCP（Model Context Protocol）设置字典
        enable_background_investigation: 是否启用后台调查功能
        report_style: 报告样式枚举，控制最终报告的格式
        enable_deep_thinking: 是否启用深度思考模式
        enable_clarification: 是否启用澄清功能，用于向用户提问以明确需求
        max_clarification_rounds: 最大澄清轮次，限制澄清问答的次数
        locale: 语言区域设置，默认为 "en-US"
        interrupt_before_tools: 需要在执行前中断的工具列表，用于人工审核
    生成:
        str: 流式输出的事件字符串，采用 Server-Sent Events (SSE) 格式
    说明:
        - 这是一个异步生成器函数，使用 yield 逐步返回执行事件
        - 支持断点续传，可以从中断点恢复执行
        - 根据环境配置自动选择检查点存储方式（PostgreSQL/MongoDB/内存）
        - 所有日志都包含 thread_id 前缀，便于追踪和调试
    """
    # 清理和验证输入参数，防止日志注入攻击
    safe_thread_id = thread_id
    safe_feedback = interrupt_feedback if interrupt_feedback else ""
    logger.debug(
        f"[{safe_thread_id}] 工作流生成器启动: "
        f"消息数量={len(messages)}, "
        f"自动接受计划={auto_accepted_plan}, "
        f"中断反馈={safe_feedback}, "
        f"中断前工具列表={interrupt_before_tools}"
    )

    # 处理初始消息：遍历所有消息并发送给客户端
    logger.debug(f"[{safe_thread_id}] 开始处理 {len(messages)} 条初始消息")
    # for message in messages:
    #     if isinstance(message, dict) and "content" in message:
    #         safe_content = message.get('content', '')
    #         logger.debug(f"[{safe_thread_id}] 向客户端发送初始消息: {safe_content}")
    #         #todo 没有传给前端，处理初始消息并生成格式化的事件。
    #         # _process_initial_messages(message, thread_id)

    # 重建澄清历史：从消息列表中提取澄清对话历史
    logger.debug(f"[{safe_thread_id}] 正在重建澄清历史")
    clarification_history = reconstruct_clarification_history(messages)

    # 从澄清历史构建明确的研究主题
    logger.debug(f"[{safe_thread_id}] 正在从历史记录构建明确主题")
    clarified_topic, clarification_history = build_clarified_topic_from_history(
        clarification_history
    )
    # 安全获取最新消息内容,处理可能没有content字段的情况
    latest_message_content = messages[-1].get("content", "") if messages else ""
    clarified_research_topic = clarified_topic or latest_message_content
    safe_topic = clarified_research_topic
    logger.debug(f"[{safe_thread_id}] 明确的研究主题: {safe_topic}")

    # 准备工作流输入：构建包含所有必要参数的输入字典
    logger.debug(f"[{safe_thread_id}] 正在准备工作流输入参数")
    workflow_input = {
        "messages": messages,  # 对话消息列表
        "plan_iterations": 0,  # 计划迭代计数器，初始为0
        "final_report": "",  # 最终报告内容，初始为空
        "current_plan": None,  # 当前执行计划，初始为None
        "observations": [],  # 观察结果列表，用于记录执行过程
        "auto_accepted_plan": auto_accepted_plan,  # 是否自动接受计划
        "enable_background_investigation": enable_background_investigation,  # 是否启用背景调查
        "research_topic": latest_message_content,  # 原始研究主题
        "clarification_history": clarification_history,  # 澄清对话历史
        "clarified_research_topic": clarified_research_topic,  # 明确后的研究主题
        "enable_clarification": enable_clarification,  # 是否启用澄清功能
        "max_clarification_rounds": max_clarification_rounds,  # 最大澄清轮次
        "locale": locale,  # 语言区域设置
    }

    # 处理中断恢复场景：如果存在中断反馈，创建恢复命令
    if not auto_accepted_plan and interrupt_feedback:
        logger.debug(f"[{safe_thread_id}] 创建恢复命令，中断反馈: {safe_feedback}")
        resume_msg = f"[{interrupt_feedback}]"
        if messages:
            resume_msg += f" {messages[-1]['content']}"
        workflow_input = Command(resume=resume_msg)

    # 准备工作流配置：构建运行时配置参数
    logger.debug(
        f"[{safe_thread_id}] 正在准备工作流配置: "
        f"最大计划迭代次数={max_plan_iterations}, "
        f"最大步骤数={max_step_num}, "
        f"报告样式={report_style.value}, "
        f"启用深度思考={enable_deep_thinking}"
    )
    workflow_config = {
        "thread_id": thread_id,  # 线程ID
        # "resources": resources,  # 可用资源列表
        "max_plan_iterations": max_plan_iterations,  # 最大计划迭代次数
        "max_step_num": max_step_num,  # 单个计划的最大步骤数
        "max_search_results": max_search_results,  # 搜索结果数量限制
        "mcp_settings": mcp_settings,  # MCP协议设置
        "report_style": report_style.value,  # 报告样式
        "enable_deep_thinking": enable_deep_thinking,  # 是否启用深度思考
        "interrupt_before_tools": interrupt_before_tools,  # 需要中断的工具列表
        "recursion_limit": Config.get("AGENT_RECURSION_LIMIT", 20),  # 递归深度限制
    }

    # 获取检查点配置：从环境变量读取检查点存储设置
    checkpoint_saver = Config.get("LANGGRAPH_CHECKPOINT_SAVER", False)
    checkpoint_url = Config.get("LANGGRAPH_CHECKPOINT_DB_URL", "")

    logger.debug(
        f"[{safe_thread_id}] 检查点配置: "
        f"存储器启用={checkpoint_saver}, "
        f"URL已配置={bool(checkpoint_url)}"
    )

    # 使用不带检查点存储器的图，执行状态仅保存在内存中
    logger.debug(f"[{safe_thread_id}] 开始流式传输图执行事件")
    async for event in _stream_graph_events(
            graph, workflow_input, workflow_config, thread_id
    ):
        yield event
    logger.debug(f"[{safe_thread_id}] 图事件流传输完成")


async def _stream_graph_events(
        graph_instance, workflow_input, workflow_config, thread_id
):
    """
    从图工作流中流式处理事件并分发给客户端
    核心功能：
    1. 监听 LangGraph 工作流产生的所有事件（消息和状态更新）
    2. 识别并处理中断事件（需要用户交互的情况）
    3. 处理消息块事件并流式传输给客户端
    4. 异常处理和错误事件生成
    参数：
        graph_instance: LangGraph 工作流实例
        workflow_input: 工作流输入数据（包含消息、配置等）
        workflow_config: 工作流配置（包含 thread_id、checkpointer 等）
        thread_id: 会话 ID，用于追踪和日志记录
    yields:
        SSE 格式的事件字典，包括：
        - message_chunk: 消息片段事件
        - interrupt: 中断事件（如等待用户确认计划）
        - error: 错误事件
    """
    safe_thread_id = thread_id
    logger.debug(f"[{safe_thread_id}] 开始流式处理图事件，包含 agent 节点")

    try:
        event_count = 0  # 事件计数器，用于追踪处理的事件数量

        # 异步迭代图工作流产生的事件流
        async for agent, x, event_data in graph_instance.astream(
                workflow_input,
                config=workflow_config,
                stream_mode=["messages", "updates"], # stream_mode=["messages", "updates"]: 同时获取消息和状态更新
                subgraphs=True, # 包含子图的事件（支持嵌套的 Agent）
        ):
            event_count += 1
            safe_agent = agent
            logger.debug(f"[{safe_thread_id}] 收到图事件 #{event_count}，来自 agent: {safe_agent}")
            # Todo
            print(f"agent = {agent}\nx={x}\nevent_data={event_data}\n")

            # 处理字典类型的事件（通常是状态更新或中断事件）
            if isinstance(event_data, dict):
                # 检查是否为中断事件（如等待用户确认计划）
                if "__interrupt__" in event_data:
                    logger.debug(
                        f"[{safe_thread_id}] 处理中断事件: "
                        f"ns={getattr(event_data['__interrupt__'][0], 'ns', 'unknown') if isinstance(event_data['__interrupt__'], (list, tuple)) and len(event_data['__interrupt__']) > 0 else 'unknown'}, "
                        f"value_len={len(getattr(event_data['__interrupt__'][0], 'value', '')) if isinstance(event_data['__interrupt__'], (list, tuple)) and len(event_data['__interrupt__']) > 0 and hasattr(event_data['__interrupt__'][0], 'value') and hasattr(event_data['__interrupt__'][0].value, '__len__') else 'unknown'}"
                    )
                    # 生成中断事件并发送给客户端
                    yield _create_interrupt_event(thread_id, event_data)
                logger.debug(f"[{safe_thread_id}] 字典事件但不包含中断，跳过")
                continue

            # 将事件数据转换为消息块和元数据
            # event_data = tuple[BaseMessage, dict[str, Any]
            message_chunk, message_metadata = event_data

            # 提取节点和步骤信息用于调试
            safe_node = message_metadata.get('langgraph_node', 'unknown')
            safe_step = message_metadata.get('langgraph_step', 'unknown')
            logger.debug(
                f"[{safe_thread_id}] 处理消息块: "
                f"类型={type(message_chunk).__name__}, "
                f"节点={safe_node}, "
                f"步骤={safe_step}"
            )

            # 处理消息块并生成 SSE 事件
            # 这个函数会将消息块转换为客户端可识别的事件格式
            async for event in _process_message_chunk(
                    message_chunk, message_metadata, thread_id, agent
            ):
                yield event

        logger.debug(f"[{safe_thread_id}] 图事件流处理完成。总事件数: {event_count}")

    except Exception:
        # 捕获所有异常，记录日志并向客户端发送错误事件
        logger.exception(f"[{safe_thread_id}] 图执行过程中发生错误")
        yield _make_event(
            "error",
            {
                "thread_id": thread_id,
                "error": "图执行过程中发生错误",
            },
        )


async def _process_message_chunk(message_chunk, message_metadata, thread_id, agent):
    """
    处理单个消息块并生成相应的 SSE 事件
    功能说明：
    这是消息流处理的核心函数，负责识别和处理不同类型的消息块，并生成对应的
    SSE（Server-Sent Events）事件发送给客户端。
    消息类型分类：
    1. ToolMessage: 工具调用的执行结果
       - 生成事件: tool_call_result
       - 包含: 工具返回的数据、tool_call_id
    2. AIMessageChunk (包含完整工具调用):
       - 生成事件: tool_calls
       - 包含: 完整的工具调用列表（工具名、参数等）
       - 场景: Agent 决定调用工具的时刻
    3. AIMessageChunk (包含工具调用片段):
       - 生成事件: tool_call_chunks
       - 包含: 流式传输的工具调用片段
       - 场景: 工具调用正在流式生成中
    4. AIMessageChunk (普通消息):
       - 生成事件: message_chunk
       - 包含: Agent 生成的文本内容
       - 场景: Agent 的思考过程或回复内容
    参数：
        message_chunk: LangChain 消息块对象 (ToolMessage 或 AIMessageChunk)
        message_metadata: 消息的元数据（节点名、步骤等）
        thread_id: 会话 ID
        agent: 当前处理的 Agent 标识符
    yields:
        SSE 格式的事件字典，类型包括：
        - tool_call_result: 工具执行结果
        - tool_calls: 完整的工具调用
        - tool_call_chunks: 工具调用片段
        - message_chunk: 普通消息内容
    """
    # 提取并清理 Agent 名称，用于日志和事件标识
    agent_name = _get_agent_name(agent, message_metadata)
    safe_agent_name = agent_name
    safe_thread_id = thread_id
    logger.debug(f"[{safe_thread_id}] 开始处理消息块，agent={safe_agent_name}")
    logger.debug(f"[{safe_thread_id}] 提取的 agent_name: {safe_agent_name}")

    # 创建基础事件消息结构（包含通用字段：thread_id、id、role、content 等）
    event_stream_message = _create_event_stream_message(
        message_chunk, message_metadata, thread_id, agent_name
    )

    # 分支 1: 处理工具消息（工具执行完毕返回的结果）
    if isinstance(message_chunk, ToolMessage):
        logger.debug(f"[{safe_thread_id}] 处理 ToolMessage（工具执行结果）")
        tool_call_id = message_chunk.tool_call_id
        event_stream_message["tool_call_id"] = tool_call_id

        # 验证 tool_call_id 的有效性（用于调试）
        if tool_call_id:
            safe_tool_id = tool_call_id
            logger.debug(f"[{safe_thread_id}] ToolMessage 包含 tool_call_id: {safe_tool_id}")
        else:
            logger.warning(f"[{safe_thread_id}] ToolMessage 缺少 tool_call_id")

        logger.debug(f"[{safe_thread_id}] 生成 tool_call_result 事件")
        yield _make_event("tool_call_result", event_stream_message)

    # 分支 2: 处理 AI 消息块（Agent 生成的内容）
    elif isinstance(message_chunk, AIMessageChunk):
        # 检查是否包含工具调用相关信息
        has_tool_calls = bool(message_chunk.tool_calls)
        has_chunks = bool(message_chunk.tool_call_chunks)
        logger.debug(
            f"[{safe_thread_id}] 处理 AIMessageChunk，"
            f"包含完整工具调用={has_tool_calls}，包含工具调用片段={has_chunks}"
        )

        # 子分支 2.1: 包含完整的工具调用（Agent 决定调用工具）
        if message_chunk.tool_calls:
            safe_tool_names = [tc.get('name', 'unknown') for tc in message_chunk.tool_calls]
            logger.debug(f"[{safe_thread_id}] AIMessageChunk 包含完整的工具调用列表: {safe_tool_names}")
            event_stream_message["tool_calls"] = message_chunk.tool_calls

            # 处理工具调用片段（基于 index 进行分组）
            processed_chunks = _process_tool_call_chunks(
                message_chunk.tool_call_chunks
            )
            if processed_chunks:
                event_stream_message["tool_call_chunks"] = processed_chunks
                safe_chunk_names = [c.get('name') for c in processed_chunks]
                logger.debug(
                    f"[{safe_thread_id}] 工具调用: {safe_tool_names}，"
                    f"已处理的片段数: {len(processed_chunks)}"
                )

            logger.debug(f"[{safe_thread_id}] 生成 tool_calls 事件")
            yield _make_event("tool_calls", event_stream_message)

        # 子分支 2.2: 包含工具调用片段（流式生成工具调用的过程）
        elif message_chunk.tool_call_chunks:
            chunks_count = len(message_chunk.tool_call_chunks)
            logger.debug(f"[{safe_thread_id}] AIMessageChunk 包含流式工具调用片段: {chunks_count} 个片段")

            # 处理并合并工具调用片段
            processed_chunks = _process_tool_call_chunks(
                message_chunk.tool_call_chunks
            )

            # 处理具有不同索引的片段（检测工具调用边界）
            if processed_chunks:
                prev_chunk = None
                for chunk in processed_chunks:
                    current_index = chunk.get("index")

                    # 记录索引变化，用于检测不同工具调用之间的边界
                    if prev_chunk is not None and current_index != prev_chunk.get("index"):
                        prev_name = prev_chunk.get('name')
                        curr_name = chunk.get('name')
                        logger.debug(
                            f"[{safe_thread_id}] 检测到工具调用边界: "
                            f"索引 {prev_chunk.get('index')} ({prev_name}) -> "
                            f"{current_index} ({curr_name})"
                        )

                    prev_chunk = chunk

                # 将所有处理过的片段包含在事件中
                event_stream_message["tool_call_chunks"] = processed_chunks
                safe_chunk_names = [c.get('name') for c in processed_chunks]
                logger.debug(
                    f"[{safe_thread_id}] 流式传输了 {len(processed_chunks)} 个工具调用片段: "
                    f"{safe_chunk_names}"
                )

            logger.debug(f"[{safe_thread_id}] 生成 tool_call_chunks 事件")
            yield _make_event("tool_call_chunks", event_stream_message)

        # 子分支 2.3: 普通的 AI 消息内容（Agent 的思考或回复）
        else:
            content_len = len(message_chunk.content) if isinstance(message_chunk.content, str) else 0
            logger.debug(f"[{safe_thread_id}] AIMessageChunk 是普通消息内容，长度={content_len}")
            yield _make_event("message_chunk", event_stream_message)


def _process_tool_call_chunks(tool_call_chunks):
    """
    处理工具调用片段并按索引进行正确分组
    功能说明：
    这个函数负责将属于同一个工具调用的片段（相同 index）合并在一起，
    同时正确分离来自不同工具调用的片段（不同 index）。
    背景问题：
    在流式传输中，LangChain 的 ToolCallChunk 会自动拼接相同 index 的字符串属性
    （name、args）。我们需要：
    1. 按 index 对片段进行分组
    2. 检测不同工具名称的索引冲突
    3. 累积相同 index 的参数
    4. 返回正确分离的工具调用列表
    参数：
        tool_call_chunks: 工具调用片段列表，每个片段包含：
            - index: 工具调用的索引（用于区分多个工具调用）
            - id: 工具调用的唯一标识符
            - name: 工具名称（如 "search", "calculator"）
            - args: 工具参数（JSON 字符串片段）
            - type: 类型标识
    返回：
        处理后的工具调用列表，每个元素包含完整的工具调用信息
    示例：
        输入片段流：
        [
            {"index": 0, "name": "sea", "args": '{"que'},
            {"index": 0, "name": "rch", "args": 'ry": "P'},
            {"index": 0, "args": 'ython"}'},
            {"index": 1, "name": "cal", "args": '{"exp'},
            {"index": 1, "name": "culator", "args": 'ression": "1+1"}'}
        ]
        输出结果：
        [
            {"index": 0, "name": "search", "args": '{"query": "Python"}', ...},
            {"index": 1, "name": "calculator", "args": '{"expression": "1+1"}', ...}
        ]
    """
    # 空片段列表直接返回
    if not tool_call_chunks:
        return []

    # # 验证工具调用片段的结构（用于调试）
    # _validate_tool_call_chunks(tool_call_chunks)

    chunks = []  # 最终返回的工具调用列表
    chunk_by_index = {}  # 按 index 分组的字典，用于处理流式累积

    # 遍历所有工具调用片段
    for chunk in tool_call_chunks:
        index = chunk.get("index")
        chunk_id = chunk.get("id")

        # 分支 1: 处理带有 index 的片段（正常情况）
        if index is not None:
            # 如果这个 index 是第一次出现，初始化数据结构
            if index not in chunk_by_index:
                chunk_by_index[index] = {
                    "name": "",      # 工具名称（将逐步累积）
                    "args": "",      # 工具参数（将逐步累积）
                    "id": chunk_id or "",  # 工具调用 ID
                    "index": index,  # 索引
                    "type": chunk.get("type", ""),  # 类型
                }

            # 处理并累积工具名称
            chunk_name = chunk.get("name", "")
            if chunk_name:
                stored_name = chunk_by_index[index]["name"]

                # 检测索引冲突：同一 index 出现不同的工具名称
                # 这可能表示流式传输异常或连续的工具调用使用了相同的索引
                if stored_name and stored_name != chunk_name:
                    logger.warning(
                        f"检测到索引 {index} 的工具名称不匹配: "
                        f"'{stored_name}' != '{chunk_name}'。"
                        f"这可能表示流式传输异常或使用了相同索引分配的连续工具调用。"
                    )
                    # 保留第一个名称，防止错误拼接
                else:
                    # 正常情况：累积工具名称
                    # 例如: "sea" + "rch" = "search"
                    chunk_by_index[index]["name"] = chunk_name

            # 更新工具调用 ID（如果提供了新的 ID 且之前没有）
            if chunk_id and not chunk_by_index[index]["id"]:
                chunk_by_index[index]["id"] = chunk_id

            # 累积工具参数（逐步拼接 JSON 字符串）
            # 例如: '{"que' + 'ry": "P' + 'ython"}' = '{"query": "Python"}'
            if chunk.get("args"):
                chunk_by_index[index]["args"] += chunk.get("args", "")

        # 分支 2: 处理没有 index 的片段（边缘情况）
        else:
            logger.debug(f"遇到没有索引的片段: {chunk}")
            # 直接添加到结果列表，使用默认 index=0
            chunks.append({
                "name": chunk.get("name", ""),
                "args": chunk.get("args", ""),
                "id": chunk.get("id", ""),
                "index": 0,  # 默认索引
                "type": chunk.get("type", ""),
            })

    # 将按 index 分组的字典转换为列表
    # 按 index 排序以保证正确的顺序（index 0, 1, 2, ...）
    for index in sorted(chunk_by_index.keys()):
        chunk_data = chunk_by_index[index]
        # 清理和验证参数（确保是有效的 JSON）
        chunk_data["args"] = chunk_data["args"]
        chunks.append(chunk_data)
        logger.debug(
            f"已处理工具调用: 索引={index}, 名称={chunk_data['name']}, "
            f"ID={chunk_data['id']}"
        )

    return chunks


def _create_event_stream_message(
    message_chunk, message_metadata, thread_id, agent_name
):
    """创建基础事件流消息"""
    content = message_chunk.content
    if not isinstance(content, str):
        content = json.dumps(content, ensure_ascii=False)

    event_stream_message = {
        "thread_id": thread_id,
        "agent": agent_name,
        "id": message_chunk.id,
        "role": "assistant",
        "checkpoint_ns": message_metadata.get("checkpoint_ns", ""),
        "langgraph_node": message_metadata.get("langgraph_node", ""),
        "langgraph_path": message_metadata.get("langgraph_path", ""),
        "langgraph_step": message_metadata.get("langgraph_step", ""),
        "content": content,
    }

    # Add optional fields
    if message_chunk.additional_kwargs.get("reasoning_content"):
        event_stream_message["reasoning_content"] = message_chunk.additional_kwargs[
            "reasoning_content"
        ]

    if message_chunk.response_metadata.get("finish_reason"):
        event_stream_message["finish_reason"] = message_chunk.response_metadata.get(
            "finish_reason"
        )

    return event_stream_message


# review
def _create_interrupt_event(thread_id, event_data):
    """创建中断事件
    
    event_data["__interrupt__"] 可能包含两种类型的数据：
    1. Interrupt 对象（从 langgraph.types.interrupt() 函数）
    2. 元组列表 [("node_name", "content")]（手动创建）
    """
    interrupt_list = event_data["__interrupt__"]
    
    # 处理空列表情况
    if not interrupt_list:
        logger.warning("收到空的中断列表")
        return _make_event(
            "interrupt",
            {
                "thread_id": thread_id,
                "id": "unknown",
                "role": "assistant",
                "content": "收到中断请求",
                "finish_reason": "interrupt",
                "options": [
                    {"text": "Edit plan", "value": "edit_plan"},
                    {"text": "Start research", "value": "accepted"},
                ],
            },
        )
    
    interrupt_data = interrupt_list[0]
    
    # 情况1: Interrupt 对象（有 value 属性）
    if hasattr(interrupt_data, 'value'):
        # Interrupt 对象通常有 value 属性存储中断消息
        content = str(interrupt_data.value) if interrupt_data.value else ""
        # 尝试获取 ns 属性作为 id，如果没有则使用默认值
        node_id = interrupt_data.ns[0] if hasattr(interrupt_data, 'ns') and interrupt_data.ns else "interrupt"
    # 情况2: 元组 (node_name, content)
    elif isinstance(interrupt_data, tuple) and len(interrupt_data) >= 2:
        node_id, content = interrupt_data[0], interrupt_data[1]
    # 情况3: 其他类型，尝试转为字符串
    else:
        node_id = "interrupt"
        content = str(interrupt_data)
    
    return _make_event(
        "interrupt",
        {
            "thread_id": thread_id,
            "id": node_id,
            "role": "assistant",
            "content": content,
            "finish_reason": "interrupt",
            "options": [
                {"text": "Edit plan", "value": "edit_plan"},
                {"text": "Start research", "value": "accepted"},
            ],
        },
    )

def _make_event(event_type: str, data: dict[str, any]):
    if data.get("content") == "":
        data.pop("content")
    # Ensure JSON serialization with proper encoding
    try:
        json_data = json.dumps(data, ensure_ascii=False)

        return f"event: {event_type}\ndata: {json_data}\n\n"
    except (TypeError, ValueError) as e:
        logger.error(f"Error serializing event data: {e}")
        # Return a safe error event
        error_data = json.dumps({"error": "Serialization failed"}, ensure_ascii=False)
        return f"event: error\ndata: {error_data}\n\n"

def _get_agent_name(agent, message_metadata):
    """Extract agent name from agent tuple."""
    agent_name = "unknown"
    if agent and len(agent) > 0:
        agent_name = agent[0].split(":")[0] if ":" in agent[0] else agent[0]
    else:
        agent_name = message_metadata.get("langgraph_node", "unknown")
    return agent_name
