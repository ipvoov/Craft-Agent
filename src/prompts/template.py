from src.graph.State import State
import dataclasses
import os
from datetime import datetime
from jinja2 import Environment, FileSystemLoader, TemplateNotFound, select_autoescape
from langchain_core.messages import SystemMessage

# ========== Jinja2 模板引擎初始化 ==========
# 创建 Jinja2 环境对象，用于加载和渲染 Prompt 模板
env = Environment(
    # 模板加载器：从当前文件所在目录（src/prompts/）加载模板
    loader=FileSystemLoader(os.path.dirname(__file__)),
    # 自动转义：防止 XSS 攻击，自动转义 HTML 特殊字符
    autoescape=select_autoescape(),
    # 去除模板中块标签后的空行，使生成的文本更紧凑
    trim_blocks=True,
    # 去除块标签所在行开头的空白字符，使生成的文本更整洁
    lstrip_blocks=True,
)


def get_prompt_template(prompt_name: str, locale: str = "zh-CN") -> str:
    """
    加载并返回指定语言的 Prompt 模板（不进行变量替换）。
    Args:
        prompt_name: 模板名称（不含 .md 扩展名），如 "coordinator", "planner"
        locale: 语言环境（如 en-US, zh-CN），默认 zh-CN
    Returns:
        模板的原始字符串内容（包含 Jinja2 变量占位符）
    """
    try:
        # ========== 1. 规范化语言环境格式 ==========
        normalized_locale = locale.replace("-", "_") if locale and locale.strip() else "zh_CN"
        # ========== 2. 尝试加载本地化模板 ==========
        template = env.get_template(f"{prompt_name}.{normalized_locale}.md")
        # 渲染模板（此处不传入变量，只是返回模板内容）
        return template.render()
    except Exception as e:
        # ========== 4. 错误处理 ==========
        # 如果模板加载失败，抛出详细的错误信息
        raise ValueError(f"Error loading template {prompt_name} for locale {locale}: {e}")


def apply_prompt_template(
        prompt_name: str, state: State, configurable: dict = None, locale: str = "zh-CN"
) -> list:
    """
    应用 Prompt 模板并返回格式化的消息列表。
    此函数的主要作用：
    1. 将 state 和 configurable 中的变量合并为模板上下文
    2. 根据 locale 加载对应语言的模板文件
    3. 渲染模板生成系统 Prompt
    4. 将系统 Prompt 和历史消息组合返回
    Args:
        prompt_name: 模板名称（不含 .md 扩展名），如 "coordinator", "planner"
        state: State 当前状态，包含消息历史和其他状态变量
        configurable: 配置对象，包含额外的模板变量（如 max_plan_iterations 等）
        locale: 语言环境（如 en-US, zh-CN），默认 zh-CN
    Returns:
        消息列表，格式为 [系统消息, 历史消息1, 历史消息2, ...]
    """
    # ========== 1. 准备模板变量 ==========
    # 将 state 转换为字典，并添加当前时间戳

    state_vars = {
        "CURRENT_TIME": datetime.now().strftime("%a %b %d %Y %H:%M:%S %z"),  # 当前时间
        **state,  # 展开 state 中的所有字段
    }

    # ========== 2. 合并配置变量 ==========
    # 如果提供了 configurable，将其字段添加到模板变量中
    if configurable:
        # 将 Configuration 对象转换为字典并合并
        state_vars.update(configurable)

    try:
        # ========== 3. 规范化语言环境格式 ==========
        # 将 "zh-CN" 转换为 "zh_CN"（Jinja2 模板文件命名格式）
        normalized_locale = locale.replace("-", "_") if locale and locale.strip() else "zh_CN"

        # ========== 4. 加载模板文件 ==========
        # 尝试加载特定语言的模板（如 coordinator.zh_CN.md）
        template = env.get_template(f"{prompt_name}.{normalized_locale}.md")

        # ========== 5. 渲染模板 ==========
        # 使用 state_vars 中的变量渲染模板，生成系统 Prompt
        system_prompt = template.render(**state_vars)

        # ========== 6. 组合消息列表 ==========
        # 返回：[系统消息] + [历史消息列表]
        # 系统消息在最前面，包含 Agent 的角色定义和指令
        return [SystemMessage(content=system_prompt)] + state["messages"]
    except Exception as e:
        # 模板加载或渲染失败时抛出异常
        raise ValueError(f"Error applying template {prompt_name} for locale {locale}: {e}")


def apply_prompt_template_not_with_messages(
        prompt_name: str, state: State, configurable: dict = None, locale: str = "zh-CN"
) -> str:
    """
    应用 Prompt 模板并返回格式化的消息。
    此函数的主要作用：
    1. 将 state 和 configurable 中的变量合并为模板上下文
    2. 根据 locale 加载对应语言的模板文件
    3. 渲染模板生成系统 Prompt
    4. 将系统 Prompt 和历史消息组合返回
    Args:
        prompt_name: 模板名称（不含 .md 扩展名），如 "coordinator", "planner"
        state: State 当前状态，包含消息历史和其他状态变量
        configurable: 配置对象，包含额外的模板变量（如 max_plan_iterations 等）
        locale: 语言环境（如 en-US, zh-CN），默认 zh-CN
    Returns:
        系统 Prompt 字符串
    """
    # ========== 1. 准备模板变量 ==========
    # 将 state 转换为字典，并添加当前时间戳

    state_vars = {
        "CURRENT_TIME": datetime.now().strftime("%a %b %d %Y %H:%M:%S %z"),  # 当前时间
        **state,  # 展开 state 中的所有字段
    }

    # ========== 2. 合并配置变量 ==========
    # 如果提供了 configurable，将其字段添加到模板变量中
    if configurable:
        # 将 Configuration 对象转换为字典并合并
        state_vars.update(configurable)

    try:
        # ========== 3. 规范化语言环境格式 ==========
        # 将 "zh-CN" 转换为 "zh_CN"（Jinja2 模板文件命名格式）
        normalized_locale = locale.replace("-", "_") if locale and locale.strip() else "zh_CN"

        # ========== 4. 加载模板文件 ==========
        # 尝试加载特定语言的模板（如 coordinator.zh_CN.md）
        template = env.get_template(f"{prompt_name}.{normalized_locale}.md")

        # ========== 5. 渲染模板 ==========
        # 使用 state_vars 中的变量渲染模板，生成系统 Prompt
        system_prompt = template.render(**state_vars)
        return system_prompt
    except Exception as e:
        # 模板加载或渲染失败时抛出异常
        raise ValueError(f"Error applying template {prompt_name} for locale {locale}: {e}")
