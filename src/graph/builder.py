from langgraph.graph import StateGraph,START,END
from langgraph.graph.state import CompiledStateGraph
from langgraph.store.memory import InMemoryStore
from langgraph.checkpoint.memory import MemorySaver

from src.graph.State import State
from src.prompts.planner_model import StepType

# 导入节点
from src.graph.nodes import *

def continue_to_running_research_team(state: State):
    """
    确定研究团队的下一步操作。
    根据当前计划的执行状态，决定工作流应该跳转到哪个节点。
    如果计划不完整或所有步骤都已完成，则返回planner节点；
    否则，根据第一个未完成步骤的类型，返回对应的处理节点。
    参数:
        state: 当前系统状态对象，包含当前计划等信息
    返回:
        str: 下一个应该执行的节点名称("planner"、"researcher"或"coder")
    """
    # 获取当前计划
    current_plan = state.get("current_plan")
    
    # 检查计划是否存在或计划中是否有步骤，如果没有则跳转到规划器节点
    # 这是一个防御性检查，确保后续操作的安全性
    if not current_plan or not current_plan.steps:
        return "planner"

    # 检查所有步骤是否都已完成执行（都有execution_res结果）
    # 如果所有步骤都已完成，则需要重新规划
    if all(step.execution_res for step in current_plan.steps):
        return "planner"

    # 查找第一个未完成的步骤（没有execution_res结果的步骤）
    incomplete_step = None
    for step in current_plan.steps:
        if not step.execution_res:
            incomplete_step = step
            break

    # 再次确认是否找到未完成的步骤（虽然理论上应该已经找到了）
    if not incomplete_step:
        return "planner"

    # 根据未完成步骤的类型，返回对应的处理节点
    # 研究类型的步骤交由researcher节点处理
    if incomplete_step.step_type == StepType.RESEARCH:
        return "researcher"
    # 处理/编码类型的步骤交由coder节点处理
    if incomplete_step.step_type == StepType.PROCESSING:
        return "coder"
    # 默认情况返回规划器节点
    return "planner"


def _build_base_graph() -> StateGraph:
    """构建研究代理的状态图"""
    builder = StateGraph(State)
    # 添加节点
    builder.add_node("coordinator", coordinator_node)
    builder.add_node("background_investigator", background_investigation_node)
    builder.add_node("planner", planner_node)
    builder.add_node("human_feedback", human_feedback_node)
    builder.add_node("research_team", research_team_node)
    builder.add_node("researcher", researcher_node)
    builder.add_node("coder", coder_node)
    builder.add_node("reporter", reporter_node)

    builder.add_edge(START, "coordinator")
    builder.add_edge("background_investigator", "planner")
    builder.add_conditional_edges(
        "research_team",
        continue_to_running_research_team,
        ["planner", "researcher", "coder"],
    )
    builder.add_edge("reporter", END)

    return builder

def build_prompt_enhancer_graph():
    """
    构建 Prompt 增强图
    
    使用专门的提示词模板和增强逻辑来优化用户输入的提示词
    
    Returns:
        CompiledGraph: 编译后的提示词增强工作流图
    """
    from src.prompt_enhancer.graph.builder import build_graph as build_enhancer_graph
    return build_enhancer_graph()


def build_graph_with_memory() ->  CompiledStateGraph:
    """构建并返回带有内存和存储的代理工作流图。"""
    # 创建checkpointer用于保存对话历史记录
    checkpointer = MemorySaver()
    # build state graph
    graph = _build_base_graph()
    return graph.compile(checkpointer=checkpointer)

def build_graph():
    """构建并返回不含记忆的代理工作流图。"""
    # build state graph
    graph = _build_base_graph()
    return graph.compile()

if __name__ == "__main__":
    DeepAgent = build_graph_with_memory()
    with open("DeepAgent.png", "wb") as f:
        f.write(DeepAgent.get_graph().draw_mermaid_png())
