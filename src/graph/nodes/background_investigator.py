from langchain_core.messages import SystemMessage, HumanMessage
from langchain_core.runnables import RunnableConfig
from src.graph.State import State
from .coordinator import logger
from src.tools.search import web_search
from src.config.agents import AGENT_LLM_MAP
from src.prompts.template import get_prompt_template
import json

from ...llms.llm import get_llm_by_type


def background_investigation_node(state: State, config: RunnableConfig):
    """背景调查节点：在规划前进行网络搜索，收集背景信息。
    此节点在 Coordinator 转交任务后、Planner 生成计划前执行，用于：
    1. 对研究主题进行网络搜索
    2. 收集相关背景信息和资料
    3. 为后续的计划生成提供上下文
    Args:
        state: 工作流状态，包含研究主题等信息
        config: 运行时配置，包含搜索引擎设置等
    Returns:
        包含 background_investigation_results 的字典
    """
    logger.info("背景调查节点开始运行")
    # 优先使用澄清后的主题，否则使用原始主题
    query = state.get("clarified_research_topic") or state.get("research_topic")

    if len(query) > 100:
        llm = get_llm_by_type(AGENT_LLM_MAP["background_investigator"])
        prompt = get_prompt_template("background_investigation","zh-CN")
        messages = [SystemMessage(content=prompt),HumanMessage(content=query)]
        res = llm.invoke(input=messages)
        query = res.content
        # todo 注释掉print
        print(f"background_investigation_Tavily_query={query}")


    # 使用 Tavily 搜索引擎进行查询
    background_investigation_results = web_search.invoke(query)

    # ========== 返回结果 ==========
    # 将搜索结果序列化为 JSON 字符串（保留非 ASCII 字符，如中文）
    return {
        "background_investigation_results": json.dumps(
            background_investigation_results, ensure_ascii=False
        )
    }