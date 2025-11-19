from langchain_core.runnables import RunnableConfig
from .coordinator import logger
from src.graph.State import State
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template
from langchain_core.messages import HumanMessage
from src.config.agents import AGENT_LLM_MAP

def reporter_node(state: State, config: RunnableConfig):
    """编写最终报告的 Reporter 节点"""
    logger.info("Reporter 正在编写最终报告")
    configurable = config.get("configurable",{})
    # 获取当前计划
    current_plan = state.get("current_plan")
    # 准备输入消息，包含研究任务和描述
    input_ = {
        "messages": [
            HumanMessage(
                f"# 研究需求\n\n## 任务\n\n{current_plan.title}\n\n## 描述\n\n{current_plan.thought}"
            )
        ],
        "locale": state.get("locale", "zh-CN"),
    }
    # 应用 reporter 提示词模板
    invoke_messages = apply_prompt_template("reporter", input_, configurable, input_.get("locale", "zh-CN"))
    # 获取所有观察结果
    observations = state.get("observations", [])

    # 添加关于报告格式、引用样式和表格使用的提醒
    invoke_messages.append(
        HumanMessage(
            content="重要提示：按照提示中的格式组织您的报告。请确保包含：\n\n1. 关键要点 - 最重要发现的项目符号列表\n2. 概述 - 对主题的简要介绍\n3. 详细分析 - 按逻辑部分组织\n4. 调查说明（可选） - 用于更全面的报告\n5. 关键引用 - 在末尾列出所有参考文献\n\n对于引用，不要在文本中包含内联引用。相反，将所有引用放在末尾的“关键引用”部分，使用以下格式：`- [来源标题](URL)`。在每个引用之间包含一个空行以提高可读性。\n\n优先使用 MARKDOWN 表格来展示数据和进行比较。在展示对比数据、统计信息、功能或选项时使用表格。使用清晰的表头和对齐的列来组织表格。表格格式示例：\n\n| 功能 | 描述 | 优点 | 缺点 |\n|---------|-------------|------|------|\n| 功能 1 | 描述 1 | 优点 1 | 缺点 1 |\n| 功能 2 | 描述 2 | 优点 2 | 缺点 2 |",
            name="system",
        )
    )

    # 将所有观察结果转换为消息格式
    observation_messages = []
    for observation in observations:
        observation_messages.append(
            HumanMessage(
                content=f"以下是研究任务的一些观察结果：\n\n{observation}",
                name="observation",
            )
        )

    # # 上下文压缩：如果观察消息过长，进行压缩
    # llm_token_limit = get_llm_token_limit_by_type(AGENT_LLM_MAP["reporter"])
    # compressed_state = ContextManager(llm_token_limit).compress_messages(
    #     {"messages": observation_messages}
    # )
    # 将压缩后的观察消息添加到调用消息中
    invoke_messages += observation_messages

    logger.debug(f"当前调用消息: {invoke_messages}")
    # 调用 LLM 生成最终报告
    response = get_llm_by_type(AGENT_LLM_MAP["reporter"]).invoke(invoke_messages)
    response_content = response.content
    logger.info(f"reporter 响应: {response_content}")

    return {"final_report": response_content}