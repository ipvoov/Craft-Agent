from langchain_openai import ChatOpenAI
from src.config.config import Config

from langchain_core.language_models import BaseChatModel
from typing import Any, Dict

from src.config.agents import LLMType
from src.llms.providers.dashscope import ChatDashscope


_llm_cache: dict[LLMType, BaseChatModel] = {}


def _get_llm_conf(llm_type: LLMType) -> Dict[str, Any]:
    key = "BASIC_MODEL" if llm_type == "basic" else "REASONING_MODEL"
    conf = Config.get(key, {})
    if not isinstance(conf, dict):
        raise ValueError(f"无效的 LLM 配置: {key}")

    if "max_retries" not in conf:
        conf["max_retries"] = 3

    return conf


def _create_llm(llm_type: LLMType) -> BaseChatModel:
    conf = _get_llm_conf(llm_type)

    if llm_type == "reasoning":
        return ChatDashscope(
            model=conf["model"],
            api_key=conf["api_key"],
            base_url=conf.get("base_url"),
            max_retries=conf.get("max_retries", 3),
        )

    return ChatOpenAI(
        model=conf["model"],
        api_key=conf["api_key"],
        base_url=conf.get("base_url"),
        max_retries=conf.get("max_retries", 3),
    )


def get_llm_by_type(llm_type: LLMType) -> BaseChatModel:
    """根据LLM类型获取对应的LLM实例，并做简单缓存"""
    if llm_type not in _llm_cache:
        _llm_cache[llm_type] = _create_llm(llm_type)
    return _llm_cache[llm_type]
