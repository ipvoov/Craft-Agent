# Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT

from typing import Any

# ========== Agent 角色名称集合 ==========
# 定义所有助手/Agent 的名称，用于区分用户消息和 Agent 消息
ASSISTANT_SPEAKER_NAMES = {
    "coordinator",  # 协调器
    "planner",  # 规划器
    "researcher",  # 研究员
    "coder",  # 编码器
    "reporter",  # 报告生成器
    "background_investigator",  # 背景调查器
}


def get_message_content(message: Any) -> str:
    """从字典或 LangChain 消息对象中提取消息内容。

    此函数兼容两种消息格式：
    1. 字典格式：{"role": "user", "content": "..."}
    2. LangChain 消息对象：HumanMessage(content="...")、
    Args:
        message: 消息对象，可以是字典或 LangChain 消息对象
    Returns:
        消息的文本内容，如果不存在则返回空字符串
    示例:
        >>> get_message_content({"content": "你好"})
        "你好"
        >>> get_message_content(HumanMessage(content="你好"))
        "你好"
    """
    # 处理字典格式的消息
    if isinstance(message, dict):
        return message.get("content", "")

    # 处理 LangChain 消息对象（使用 getattr 安全获取属性）
    return getattr(message, "content", "")


def is_user_message(message: Any) -> bool:
    """判断消息是否来自真实的终端用户（而非系统或 Agent）。
    此函数通过多种策略判断消息来源：
    1. 检查 role 字段是否为 "user" 或 "human"
    2. 检查 name 字段是否在 Agent 名称集合中
    3. 检查 LangChain 消息对象的 type 属性
    4. 检查附加属性（additional_kwargs）中的 role
    Args:
        message: 消息对象，可以是字典或 LangChain 消息对象
    Returns:
        True 表示来自真实用户，False 表示来自系统或 Agent
    示例:
        >>> is_user_message({"role": "user", "content": "你好"})
        True
        >>> is_user_message({"role": "assistant", "name": "coordinator"})
        False
    """
    # ========== 处理字典格式的消息 ==========
    if isinstance(message, dict):
        # 获取 role 字段并转为小写
        role = (message.get("role") or "").lower()

        # 明确的用户消息
        if role in {"user", "human"}:
            return True

        # 明确的非用户消息（系统或助手）
        if role in {"assistant", "system"}:
            return False

        # 检查 name 字段（用于区分不同的 Agent）
        name = (message.get("name") or "").lower()
        if name and name in ASSISTANT_SPEAKER_NAMES:
            return False  # 如果 name 是 Agent 名称，则不是用户消息

        # role 为空且 name 不是 Agent 名称，则认为是用户消息
        return role == "" and name not in ASSISTANT_SPEAKER_NAMES

    # ========== 处理 LangChain 消息对象 ==========
    # 检查 type 属性（如 HumanMessage 的 type 是 "human"）
    message_type = (getattr(message, "type", "") or "").lower()
    name = (getattr(message, "name", "") or "").lower()

    if message_type == "human":
        # 如果是 human 类型但 name 是 Agent 名称，则不是真实用户消息
        return not (name and name in ASSISTANT_SPEAKER_NAMES)

    # 检查 role 属性
    role_attr = getattr(message, "role", None)
    if isinstance(role_attr, str) and role_attr.lower() in {"user", "human"}:
        return True

    # 检查 additional_kwargs 中的 role（某些 LangChain 消息的附加信息）
    additional_role = getattr(message, "additional_kwargs", {}).get("role")
    if isinstance(additional_role, str) and additional_role.lower() in {
        "user",
        "human",
    }:
        return True

    # 默认返回 False（无法确定时，认为不是用户消息）
    return False


def get_latest_user_message(messages: list[Any]) -> tuple[Any, str]:
    """获取最新的用户消息及其内容。
    从消息列表末尾开始反向遍历，查找第一条用户消息。
    Args:
        messages: 消息列表，按时间顺序排列
    Returns:
        元组 (消息对象, 消息内容)
        如果没有找到用户消息，返回 (None, "")
    示例:
        >>> messages = [
        ...     {"role": "user", "content": "第一条"},
        ...     {"role": "assistant", "content": "回复"},
        ...     {"role": "user", "content": "第二条"},
        ... ]
        >>> msg, content = get_latest_user_message(messages)
        >>> content
        "第二条"
    """
    # 反向遍历消息列表（从最新到最旧）
    for message in reversed(messages or []):
        # 检查是否为用户消息
        if is_user_message(message):
            # 提取消息内容
            content = get_message_content(message)
            # 如果有内容，返回消息和内容
            if content:
                return message, content

    # 没有找到有效的用户消息
    return None, ""


def build_clarified_topic_from_history(
        clarification_history: list[str],
) -> tuple[str, list[str]]:
    """从有序的澄清历史记录构建澄清后的主题字符串。
    将多轮澄清的用户输入组合成一个完整的主题描述。
    格式：第一轮输入 - 第二轮输入, 第三轮输入, ...
    Args:
        clarification_history: 按时间顺序的澄清历史记录列表
    Returns:
        元组 (澄清后的主题字符串, 清理后的历史记录列表)
    示例:
        >>> history = ["研究AI", "GPT模型", "GPT-4"]
        >>> topic, cleaned = build_clarified_topic_from_history(history)
        >>> topic
        "研究AI - GPT模型, GPT-4"
        >>> cleaned
        ["研究AI", "GPT模型", "GPT-4"]
    """
    # 过滤掉空字符串
    sequence = [item for item in clarification_history if item]

    # 如果没有有效内容，返回空结果
    if not sequence:
        return "", []

    # 如果只有一轮输入，直接返回
    if len(sequence) == 1:
        return sequence[0], sequence

    # 多轮输入：第一轮作为主题，后续轮次作为补充说明
    head, *tail = sequence  # head 是第一个元素，tail 是剩余元素列表

    # 构建格式：主题 - 补充1, 补充2, ...
    clarified_string = f"{head} - {', '.join(tail)}"

    return clarified_string, sequence


def reconstruct_clarification_history(
        messages: list[Any],
        fallback_history: list[str] | None = None,
        base_topic: str = "",
) -> list[str]:
    """从用户消息中重建澄清历史，并提供多层回退机制。

    此函数用于在澄清启用模式下，从完整的对话消息中提取用户的输入历史。
    采用三层回退策略确保总能返回有效结果。
    Args:
        messages: 按时间顺序排列的对话消息列表（包含用户、系统、Agent 等所有消息）
        fallback_history: 可选的现有历史记录，当找不到用户消息时使用（第二层回退）
        base_topic: 可选的基础主题，当前两层都失败时使用（第三层回退）
    Returns:
        清理后的澄清历史记录，包含不重复的连续用户内容
    回退策略:
        第一层：从 messages 中提取用户消息
        第二层：使用 fallback_history
        第三层：使用 base_topic
        最终：返回空列表
    示例:
        >>> messages = [
        ...     {"role": "user", "content": "研究AI"},
        ...     {"role": "assistant", "content": "具体方向？", "name": "coordinator"},
        ...     {"role": "user", "content": "GPT模型"},
        ...     {"role": "user", "content": "GPT模型"},  # 重复，会被去除
        ... ]
        >>> history = reconstruct_clarification_history(messages)
        >>> history
        ["研究AI", "GPT模型"]
    """
    # ========== 第一层：从消息中提取用户内容 ==========
    sequence: list[str] = []

    for message in messages or []:
        # 1. 过滤：只保留用户消息
        if not is_user_message(message):
            continue
        # 2. 提取：获取消息内容
        content = get_message_content(message)
        if not content:
            continue
        # 3. 去重：跳过连续重复的内容
        if sequence and sequence[-1] == content:
            continue
        # 4. 添加：加入序列
        sequence.append(content)

    # 如果成功提取到用户消息，直接返回
    if sequence:
        return sequence

    # ========== 第二层回退：使用提供的历史记录 ==========
    # 过滤掉空字符串
    fallback = [item for item in (fallback_history or []) if item]
    if fallback:
        return fallback

    # ========== 第三层回退：使用基础主题 ==========
    # 清理基础主题（去除首尾空白）
    base_topic = (base_topic or "").strip()

    # 如果基础主题有效，返回包含它的列表；否则返回空列表
    return [base_topic] if base_topic else []
