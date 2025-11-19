"""
PromptEnhancerState定义
用于prompt增强工作流的状态类
"""
from typing import Optional, TypedDict

from src.config.report_style import ReportStyle


class PromptEnhancerState(TypedDict):
    """State for the prompt enhancer workflow."""

    prompt: str  # 要增强的原始提示词
    context: Optional[str]  # 额外的上下文信息
    report_style: Optional[ReportStyle]  # 报告风格偏好
    output: Optional[str]  # 增强后的提示词结果
    locale: Optional[str]  # 语言环境设置
