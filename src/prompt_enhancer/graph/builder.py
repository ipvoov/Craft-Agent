"""
Prompt Enhancer Graph Builder
构建提示词增强工作流图
"""
from langgraph.graph import StateGraph

from src.prompt_enhancer.graph.enhancer_node import prompt_enhancer_node
from src.prompt_enhancer.graph.state import PromptEnhancerState


def build_graph():
    """
    构建并返回提示词增强工作流图
    
    该工作流包含一个简单的节点，用于接收用户提示词并返回增强版本
    
    Returns:
        CompiledGraph: 编译后的工作流图
    """
    # 构建状态图
    builder = StateGraph(PromptEnhancerState)

    # 添加增强节点
    builder.add_node("enhancer", prompt_enhancer_node)

    # 设置入口点
    builder.set_entry_point("enhancer")

    # 设置结束点
    builder.set_finish_point("enhancer")

    # 编译并返回图
    return builder.compile()
