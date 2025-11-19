# Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT
from dataclasses import field
from langgraph.graph import MessagesState
from src.prompts.planner_model import Plan
# from src.rag import Resource

class State(MessagesState):
    """Agent 系统的状态类，继承 MessagesState 并扩展了额外字段"""

    # 运行时变量
    locale: str = "zh-CN"  # 语言环境，如 "zh-CN" 或 "en-US"
    research_topic: str = ""  # 用户原始研究主题
    clarified_research_topic: str = ""  # 澄清后的完整研究主题
    observations: list[str] = []  # 研究过程中的观察记录
    # resources: list[Resource] = []  # RAG 资源列表
    plan_iterations: int = 0  # 计划迭代次数
    current_plan: Plan | str = None  # 当前执行的计划
    final_report: str = ""  # 最终研究报告
    auto_accepted_plan: bool = False  # 是否自动接受计划
    enable_background_investigation: bool = True  # 是否启用背景调研
    background_investigation_results: str = None  # 背景调研结果
    enable_clarification: bool = True  # 是否开启澄清模式

    # 澄清状态追踪（强制启用）
    clarification_rounds: int = 0  # 当前澄清轮数
    clarification_history: list[str] = field(default_factory=list)  # 澄清对话历史
    is_clarification_complete: bool = False  # 澄清是否完成
    max_clarification_rounds: int = 1  # 最大澄清轮数

    # 工作流控制
    goto: str = "planner"  # 下一个节点名称
