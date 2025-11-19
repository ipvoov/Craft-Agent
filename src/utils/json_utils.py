import json
import logging
import re

import json_repair


logger = logging.getLogger(__name__)

def repair_json_output(content: str) -> str:
    """
    修复并规范化 JSON 输出。
    处理以下情况：
    - 结束括号后有额外 token 的 JSON
    - 不完整的 JSON 结构
    - 量化模型生成的格式错误的 JSON
    参数:
        content (str): 可能包含 JSON 的字符串内容
    返回:
        str: 修复后的 JSON 字符串，如果不是 JSON 则返回原内容
    """
    content = content.strip()

    if not content:
        return content

    # 首次尝试：如果有额外的 token，尝试提取有效的 JSON
    content = _extract_json_from_content(content)

    try:
        # 尝试修复并解析 JSON
        repaired_content = json_repair.loads(content)
        if not isinstance(repaired_content, dict) and not isinstance(
                repaired_content, list
        ):
            logger.warning("修复后的内容不是有效的 JSON 对象或数组。")
            return content
        content = json.dumps(repaired_content, ensure_ascii=False)
    except Exception as e:
        logger.debug(f"JSON 修复失败: {e}")

    return content


def _extract_json_from_content(content: str) -> str:
    """
    从可能包含额外 token 的内容中提取有效的 JSON。
    尝试找到最后一个有效的 JSON 结束括号并在此处截断。
    同时处理对象 {} 和数组 []。

    参数:
        content: 可能包含带额外 token 的 JSON 的字符串
    返回:
        提取出的潜在 JSON 字符串或原始内容
    """
    content = content.strip()

    # 尝试查找完整的 JSON 对象或数组
    # 寻找可能是有效 JSON 的最后一个结束大括号/方括号

    # 追踪计数器以及是否已经看到开括号
    brace_count = 0
    bracket_count = 0
    seen_opening_brace = False
    seen_opening_bracket = False
    in_string = False
    escape_next = False
    last_valid_end = -1

    for i, char in enumerate(content):
        if escape_next:
            escape_next = False
            continue

        if char == '\\':
            escape_next = True
            continue

        if char == '"' and not escape_next:
            in_string = not in_string
            continue

        if in_string:
            continue

        if char == '{':
            brace_count += 1
            seen_opening_brace = True
        elif char == '}':
            brace_count -= 1
            # 只有在以开大括号开始并达到平衡状态时才标记为有效结尾
            if brace_count == 0 and seen_opening_brace:
                last_valid_end = i
        elif char == '[':
            bracket_count += 1
            seen_opening_bracket = True
        elif char == ']':
            bracket_count -= 1
            # 只有在以开方括号开始并达到平衡状态时才标记为有效结尾
            if bracket_count == 0 and seen_opening_bracket:
                last_valid_end = i

    if last_valid_end > 0:
        truncated = content[:last_valid_end + 1]
        if truncated != content:
            logger.debug(f"内容已从 {len(content)} 字符截断到 {len(truncated)} 字符")
        return truncated

    return content


def sanitize_tool_response(content: str, max_length: int = 50000) -> str:
    """
    清理工具响应以删除多余的标记和无效内容
    该函数:
    - 去除空白字符和尾部标记
    - 截断过长的响应
    - 清理常见的垃圾模式
    - 尝试修复类似 JSON 的响应
    参数:
        content: 工具响应内容
        max_length: 允许的最大长度（默认 50000 字符）
    返回:
        清理后的内容字符串
    """
    if not content:
        return content

    content = content.strip()

    # 首先，尝试提取有效的 JSON 以删除尾部标记
    if content.startswith('{') or content.startswith('['):
        content = _extract_json_from_content(content)

    # 如果太长则截断以防止 token 溢出
    if len(content) > max_length:
        logger.warning(f"工具响应从 {len(content)} 字符截断到 {max_length} 字符")
        content = content[:max_length].rstrip() + "..."

    # 删除一些模型中出现的常见垃圾模式
    # 这些通常出现在量化模型的输出损坏中
    garbage_patterns = [
        r'[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F-\x9F]',  # 控制字符
    ]

    for pattern in garbage_patterns:
        content = re.sub(pattern, '', content)

    return content