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


class WebStepType(str, Enum):
    """步骤类型枚举"""
    Source = "source"  # 资源型步骤：规划或获取图片、图标、插画、示例数据等资源
    Document = "document"  # 文档型步骤：生成需求文档、信息架构、组件与交互设计说明
    Codegen = "codegen"  # 生成型步骤：实现或调整前端页面、组件、样式与交互逻辑

class WebStep(BaseModel):
    """计划中的单个执行步骤"""
    title: str  # 步骤标题
    description: str = Field(
        ...,
        description=(
            "详细描述本步骤需要完成的具体工作，可以是资源规划、需求/设计文档或具体页面/组件实现；"
            "必须写清楚要做什么、产出什么"
        ),
    )
    step_type: WebStepType = Field(
        ...,
        description="步骤类型（资源 source、文档 document 或代码生成 codegen）",
    )
    execution_res: Optional[str] = Field(
        default=None, description="步骤执行结果，执行前为 None"
    )

class WebPlan(BaseModel):
    """代码生成任务的执行计划"""
    thought: str = Field(default="", description="创建计划的思考过程")
    title: str  # 计划标题
    steps: List[WebStep] = Field(
        default_factory=list,
        description=(
            "按固定顺序组织的步骤列表：通常依次包含交互设计文档、设计风格文档、"
            "图像资源搜索（可选）、项目大纲、主页面 HTML 开发、若干子页面开发、"
            "以及网站测试与部署等步骤"
        ),
    )