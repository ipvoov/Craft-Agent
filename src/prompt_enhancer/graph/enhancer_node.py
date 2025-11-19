"""
Prompt Enhancer Node
使用 AI 分析增强用户提示词的节点
"""
import logging
import re

from langchain_core.messages import HumanMessage

from src.config.agents import AGENT_LLM_MAP
from src.llms.llm import get_llm_by_type
from src.prompt_enhancer.graph.state import PromptEnhancerState
from src.prompts.template import apply_prompt_template

logger = logging.getLogger(__name__)


def prompt_enhancer_node(state: PromptEnhancerState):
    """
    增强用户提示词的节点
    
    该节点使用 AI 模型分析并增强用户的原始提示词，使其更有效、更具体
    并更可能从 AI 系统产生高质量结果
    
    Args:
        state: PromptEnhancerState 包含原始提示词、上下文和风格信息
        
    Returns:
        dict: 包含增强后提示词的字典 {"output": enhanced_prompt}
    """
    logger.info("开始增强用户提示词...")

    # 获取配置的 LLM 模型
    model = get_llm_by_type(AGENT_LLM_MAP["prompt_enhancer"])

    try:
        # 构建上下文信息
        context_info = ""
        if state.get("context"):
            context_info = f"\n\n额外上下文: {state['context']}"

        # 创建用户消息
        original_prompt_message = HumanMessage(
            content=f"请增强这个提示词:{context_info}\n\n原始提示词: {state['prompt']}"
        )

        # 应用提示词模板
        messages = apply_prompt_template(
            "prompt_enhancer/prompt_enhancer",
            {
                "messages": [original_prompt_message],
                "report_style": state.get("report_style"),
            },
            locale=state.get("locale", "zh-CN"),
        )

        # 调用模型获取响应
        response = model.invoke(messages)

        # 提取响应内容
        response_content = response.content.strip()
        logger.debug(f"模型响应内容: {response_content}")

        # 尝试从 XML 标签中提取增强后的提示词
        xml_match = re.search(
            r"<enhanced_prompt>(.*?)</enhanced_prompt>", response_content, re.DOTALL
        )

        if xml_match:
            # 从 XML 标签中提取内容并清理
            enhanced_prompt = xml_match.group(1).strip()
            logger.debug("成功从 XML 标签中提取增强后的提示词")
        else:
            # 如果没有找到 XML 标签，使用回退逻辑
            enhanced_prompt = response_content
            logger.warning("响应中未找到 XML 标签，使用回退解析")

            # 移除模型可能添加的常见前缀
            prefixes_to_remove = [
                "增强提示词:",
                "增强后的提示词:",
                "这是增强后的提示词:",
                "Enhanced Prompt:",
                "Enhanced prompt:",
                "Here's the enhanced prompt:",
                "Here is the enhanced prompt:",
                "**增强提示词**:",
                "**增强后的提示词**:",
                "**Enhanced Prompt**:",
                "**Enhanced prompt**:",
            ]

            for prefix in prefixes_to_remove:
                if enhanced_prompt.startswith(prefix):
                    enhanced_prompt = enhanced_prompt[len(prefix):].strip()
                    break

        logger.info("提示词增强完成")
        logger.debug(f"增强后的提示词: {enhanced_prompt}")
        return {"output": enhanced_prompt}
    except Exception as e:
        logger.error(f"提示词增强过程中出错: {str(e)}")
        # 发生错误时返回原始提示词
        return {"output": state["prompt"]}
