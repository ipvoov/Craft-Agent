


def is_interrupt_event(event: dict) -> tuple[bool, str | None, str | None]:
    """
    判断事件是否为中断事件
    Args:
        event: LangGraph stream 返回的事件字典
    Returns:
        (是否中断, 中断消息)
        - 是否中断: True 表示这是一个中断事件
        - 中断消息: 中断时的提示消息，如果不是中断则为 None
    """
    # 情况1: 检查事件级别的 __interrupt__ 键（最常见）
    if "__interrupt__" in event:
        interrupt_info = event["__interrupt__"]
        return True, None, str(interrupt_info)
    
    # 情况2: 检查节点输出中的 __interrupt__ 标记（某些特殊情况）
    for node_name, node_output in event.items():
        if isinstance(node_output, dict) and "__interrupt__" in node_output:
            interrupt_info = node_output.get("__interrupt__")
            return True, node_name, str(interrupt_info)
    
    return False, None, None
