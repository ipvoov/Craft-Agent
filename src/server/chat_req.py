from typing import List, Optional


from pydantic import BaseModel, Field

from src.config.report_style import ReportStyle


class ChatMessage(BaseModel):
    """单条对话消息模型，占位定义，字段由业务自行扩展。"""
    role: str = Field(..., description="消息角色: user, assistant, system, tool")
    content: str = Field(..., description="消息内容")


class Resource(BaseModel):
    """外部资源模型，占位定义，字段由业务自行扩展。"""
    ...


class ChatRequest(BaseModel):
    messages: Optional[List[ChatMessage]] = Field(
        default_factory=list,
        description="History of messages between the user and the assistant",
    )
    resources: Optional[List[Resource]] = Field(
        default_factory=list,
        description="Resources to be used for the research",
    )
    debug: Optional[bool] = Field(False, description="Whether to enable debug logging")
    thread_id: Optional[str] = Field(
        "__default__", description="A specific conversation identifier"
    )
    locale: Optional[str] = Field(
        "zh-CN",
        description="Language locale for the conversation (e.g., en-US, zh-CN)",
    )
    max_plan_iterations: Optional[int] = Field(
        1, description="The maximum number of plan iterations"
    )
    max_step_num: Optional[int] = Field(
        3, description="The maximum number of steps in a plan"
    )
    max_search_results: Optional[int] = Field(
        3, description="The maximum number of search results"
    )
    auto_accepted_plan: Optional[bool] = Field(
        False, description="Whether to automatically accept the plan",
    )
    interrupt_feedback: Optional[str] = Field(
        None, description="Interrupt feedback from the user on the plan",
    )
    mcp_settings: Optional[dict] = Field(
        None, description="MCP settings for the chat request",
    )
    enable_background_investigation: Optional[bool] = Field(
        True, description="Whether to get background investigation before plan",
    )
    report_style: Optional[ReportStyle] = Field(
        ReportStyle.ACADEMIC, description="The style of the report",
    )
    enable_deep_thinking: Optional[bool] = Field(
        False, description="Whether to enable deep thinking",
    )
    enable_clarification: Optional[bool] = Field(
        None,
        description=(
            "Whether to enable multi-turn clarification (default: None, "
            "uses State default=False)"
        ),
    )
    max_clarification_rounds: Optional[int] = Field(
        None,
        description=(
            "Maximum number of clarification rounds (default: None, "
            "uses State default=3)"
        ),
    )
    interrupt_before_tools: List[str] = Field(
        default_factory=list,
        description=(
            "List of tool names to interrupt before execution (e.g., "
            "['db_tool', 'api_tool'])"
        ),
    )


class WebChatRequest(BaseModel):
    """Web 代码生成 Agent 的对话请求模型"""

    messages: Optional[List[ChatMessage]] = Field(
        default_factory=list,
        description="History of messages between the user and the web generator agent",
    )
    thread_id: Optional[str] = Field(
        "__default__", description="A specific conversation identifier for web agent",
    )
    locale: Optional[str] = Field(
        "zh-CN",
        description="Language locale for the conversation (e.g., en-US, zh-CN)",
    )
    name: Optional[str] = Field(
        None,
        description="项目名称",
    )
    number: Optional[str] = Field(
        "",
        description="项目编号",
    )
    tree: Optional[str] = Field(
        None,
        description="项目目录结构",
    )
    interrupt_feedback: Optional[str] = Field(
        None,
        description="来自用户的中断反馈，用于恢复 WebGen 流程",
    )


class EnhancePromptRequest(BaseModel):
    """提示词增强请求模型"""
    prompt: str = Field(..., description="要增强的原始提示词")
    context: Optional[str] = Field(
        "", description="关于预期用途的额外上下文信息"
    )
    report_style: Optional[str] = Field(
        "academic", description="报告风格"
    )
