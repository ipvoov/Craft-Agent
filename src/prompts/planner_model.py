# Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT

from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, Field


class StepType(str, Enum):
    """步骤类型枚举"""
    RESEARCH = "research"  # 研究型步骤：需要搜索和调研
    PROCESSING = "processing"  # 处理型步骤：需要编码和数据处理


class Step(BaseModel):
    """计划中的单个执行步骤"""
    need_search: bool = Field(..., description="是否需要联网搜索")
    title: str  # 步骤标题
    description: str = Field(..., description="详细描述要收集的数据")
    step_type: StepType = Field(..., description="步骤类型（研究或处理）")
    execution_res: Optional[str] = Field(
        default=None, description="步骤执行结果，执行前为 None"
    )


class Plan(BaseModel):
    """研究任务的执行计划"""
    locale: str = Field(
        ..., description="语言环境，如 'zh-CN' 或 'en-US'"
    )
    has_enough_context: bool  # 是否有足够的上下文信息来生成报告
    thought: str = Field(default="", description="创建计划的思考过程")
    title: str  # 计划标题
    steps: List[Step] = Field(
        default_factory=list,
        description="用于收集更多上下文的研究和处理步骤",
    )

    class Config:  # 指导 LLM 生成正确格式的输出
        json_schema_extra = {
            "examples": [
                {
                    "has_enough_context": False,
                    "thought": (
                        "To understand the current market trends in AI, we need to gather comprehensive information."
                    ),
                    "title": "AI Market Research Plan",
                    "steps": [
                        {
                            "need_search": True,
                            "title": "Current AI Market Analysis",
                            "description": (
                                "Collect data on market size, growth rates, major players, and investment trends in AI sector."
                            ),
                            "step_type": "research",
                        }
                    ],
                }
            ]
        }
