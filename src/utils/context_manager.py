import json
from typing import List
import logging
from langchain_core.messages import BaseMessage, ToolMessage

logger = logging.getLogger(__name__)

def validate_message_content(messages: List[BaseMessage], max_content_length: int = 100000) -> List[BaseMessage]:
    """
    验证并修复所有消息，确保它们在发送到 LLM 之前具有有效内容
    该函数确保:
    1. 所有消息都有 content 字段
    2. 没有消息的 content 为 None 或空字符串（合法的空响应除外）
    3. 复杂对象（列表、字典）被转换为 JSON 字符串
    4. 如果内容过长则进行截断以防止 token 溢出
    参数:
        messages: 需要验证的消息列表
        max_content_length: 每条消息允许的最大内容长度（默认 100000）
    返回:
        包含修复内容的验证后消息列表
    """
    validated = []
    for i, msg in enumerate(messages):
        try:
            # 检查消息是否有 content 属性
            if not hasattr(msg, 'content'):
                logger.warning(f"消息 {i} ({type(msg).__name__}) 没有 content 属性")
                msg.content = ""

            # 处理 None 内容
            elif msg.content is None:
                logger.warning(f"消息 {i} ({type(msg).__name__}) 的 content 为 None，设置为空字符串")
                msg.content = ""

            # 处理复杂内容类型（转换为 JSON）
            elif isinstance(msg.content, (list, dict)):
                logger.debug \
                    (f"消息 {i} ({type(msg).__name__}) 具有复杂内容类型 {type(msg.content).__name__}，转换为 JSON")
                msg.content = json.dumps(msg.content, ensure_ascii=False)  # noqa: F821

            # 处理其他非字符串类型
            elif not isinstance(msg.content, str):
                logger.debug \
                    (f"消息 {i} ({type(msg).__name__}) 具有非字符串内容类型 {type(msg.content).__name__}，转换为字符串")
                msg.content = str(msg.content)

            # 验证内容长度
            if isinstance(msg.content, str) and len(msg.content) > max_content_length:
                logger.warning(f"消息 {i} 内容从 {len(msg.content)} 字符截断到 {max_content_length} 字符")
                msg.content = msg.content[:max_content_length].rstrip() + "..."

            validated.append(msg)
        except Exception as e:
            logger.error(f"验证消息 {i} 时出错: {e}")
            # 创建一个安全的回退消息
            if isinstance(msg, ToolMessage):
                msg.content = json.dumps({"error": str(e)}, ensure_ascii=False)
            else:
                msg.content = f"[处理消息时出错: {str(e)}]"
            validated.append(msg)

    return validated
