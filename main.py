import asyncio

from sqlalchemy.testing.suite.test_reflection import users

from src.graph.builder import build_graph, build_graph_with_memory
from langchain_core.messages import HumanMessage

from src.workflow import run_agent_workflow_async

if __name__ == "__main__":
    user_input = "列出2025年7月GitHub上最火爆的5个项目。这里的“火爆”定义为在该月内获得较多的星标（stars）、分支（forks）以及有较多的近期提交活动。对于每个项目，请提供项目名称、项目链接、项目的简要描述、该月新增的星标数量和分支数量。"
    initial_state = {
        "messages": [HumanMessage(content=user_input)],
        "enable_background_investigation": True, # 是否开启背景调查，默认开启
        "research_topic": user_input, # 研究主题，默认与用户输入相同
        "max_clarification_rounds": 1,  # 最大澄清轮数，默认3轮
        "clarified_research_topic": user_input, # 澄清后的研究主题，默认与用户输入相同

        "auto_accepted_plan": False,  # 是否自动接受计划，默认不自动接受
    }
    config = {
        "configurable": {
            "thread_id": "default", # 线程ID，默认default
            "enable_deep_thinking": True, # 是否开启深度思考，默认开启
            "max_plan_iterations": 1,  # 最大计划迭代次数，默认1次
            "max_step_num": 3,  # 最大步骤数，默认3步
            "max_search_result": 3,  # 最大搜索结果数，默认3个
            "report_style":"academic",
            "mcp_settings": {},  # MCP设置
        },
        "recursion_limit": 100, # 递归限制
    }
    asyncio.run(
        run_agent_workflow_async(
            user_input=user_input,
            debug=False,
            max_plan_iterations=1,
            max_step_num=3,
            enable_background_investigation=True,
            enable_clarification=True,
            max_clarification_rounds=3,
        )
    )


