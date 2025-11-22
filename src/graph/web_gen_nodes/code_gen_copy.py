import logging
from langchain.agents import create_agent
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.runnables import RunnableConfig

from src.graph.State import WebGenState
from src.config import AGENT_LLM_MAP
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template_not_with_messages
from src.tools.file import Tools
from src.utils.json_utils import sanitize_tool_response

logger = logging.getLogger(__name__)


async def code_gen_node(
        state: WebGenState,
        config: RunnableConfig
) -> WebGenState:
    """代码生成节点：使用 React Agent + CODER_MODEL 和文件工具完成所有代码生成。
    
    简化流程：
    - 不依赖计划和步骤
    - 直接基于 outline.md 和 web_source 的资源结果
    - 一次性生成所有页面代码
    """
    logger.info("codegen 节点：开始执行代码生成")

    node_name = "codegen"
    locale = state.get("locale", "zh-CN")
    
    # 获取项目信息
    project_name = state.get("name") or "未命名项目"
    project_number = state.get("number") or "00"

    # 构建系统提示词
    system_prompt = apply_prompt_template_not_with_messages(
        node_name, state, locale=locale
    )

    # 创建 React Agent
    agent = create_agent(
        model=get_llm_by_type(AGENT_LLM_MAP[node_name]),
        tools=Tools,  # 代码生成阶段挂载文件读写相关工具
        system_prompt=system_prompt,
        name=node_name,
    )

    # 构建简洁的任务描述
    content = (
        f"你现在是 {node_name} agent，负责为项目「{project_name}」(编号: {project_number}) 生成完整的网页代码。\n\n"
        f"请根据系统提示词中的说明，以及历史消息中的项目大纲（outline.md）和图片资源信息，完成以下任务：\n"
        f"1. 阅读项目大纲，了解需要生成哪些页面\n"
        f"2. 使用历史消息中的图片链接（image_links）作为页面素材\n"
        f"3. 依次生成所有页面的完整代码（HTML + 内联 CSS + JS）\n"
        f"4. 确保页面之间的导航链接正确\n\n"
        f"请开始工作，使用文件工具生成代码。"
    )

    # 包含历史消息，让 Agent 能看到 outline 和图片资源信息
    agent_input = {
        "messages": list(state.get("messages", [])) + [HumanMessage(content=content)]
    }

    try:
        logger.info("codegen 节点：调用 React Agent 生成代码")
        result = await agent.ainvoke(agent_input, config=config)
    except Exception as error:
        logger.exception("codegen 节点执行出错: %s", error)
        error_message = f"[错误] codegen agent 在生成代码时发生异常: {error}"
        return {
            "messages": state["messages"]
            + [AIMessage(content=error_message, name=node_name)],
        }

    # 提取 Agent 的响应内容
    if isinstance(result, dict) and "messages" in result and result["messages"]:
        # 获取所有新生成的消息（除了输入的那些）
        # 但这里我们简单点，只获取最后一条消息作为总结
        response_content = result["messages"][-1].content
    else:
        response_content = str(result)

    # 清理响应内容
    try:
        response_content = sanitize_tool_response(str(response_content))
    except Exception:
        response_content = str(response_content)

    logger.info("codegen 节点：代码生成完成")
    
    return {
        "messages": state["messages"]
        + [AIMessage(content=response_content, name=node_name)],
    }