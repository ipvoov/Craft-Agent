# Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT

import logging
import os
import base64
import io
from typing import Annotated, Optional
from langchain_core.tools import tool
from langchain_experimental.utilities import PythonREPL
import matplotlib.pyplot as plt

def _is_python_repl_enabled() -> bool:
    """检查配置中是否启用了 Python REPL 工具"""
    # 首先检查环境变量
    env_enabled = os.getenv("ENABLE_PYTHON_REPL", "false").lower()
    if env_enabled in ("true", "1", "yes", "on"):
        return True
    return False

# 初始化 REPL 和日志记录器
repl: Optional[PythonREPL] = None
logger = logging.getLogger(__name__)


def _get_repl() -> Optional[PythonREPL]:
    """获取或初始化 PythonREPL 实例"""
    global repl
    if repl is None and _is_python_repl_enabled():
        try:
            repl = PythonREPL()
            # 初始化 matplotlib 设置，使用非交互式后端
            plt.switch_backend('Agg')
        except Exception as e:
            logger.error(f"Failed to initialize PythonREPL: {e}")
            return None
    return repl


@tool
def python_repl_tool(
    code: Annotated[
        str, "要执行的 Python 代码，用于进一步分析或计算"
    ],
):
    """使用此工具执行 Python 代码并进行数据分析或计算。如果想查看某个值的输出，
    应使用 `print(...)` 打印出来。用户可以看到这些输出。注意:必须使用使用纯Python来实现。
    如果需要绘图，请使用 matplotlib.pyplot，不需要显式 show()，代码执行完会自动检查并返回图表。"""

    # 检查工具是否已启用
    if not _is_python_repl_enabled():
        error_msg = "Python REPL 工具已禁用。请在环境配置中启用它。"
        logger.warning(error_msg)
        return f"工具已禁用: {error_msg}"

    if not isinstance(code, str):
        error_msg = f"无效输入: code 必须是字符串类型，得到 {type(code)}"
        logger.error(error_msg)
        return f"执行代码时出错:\n```python\n{code}\n```\n错误: {error_msg}"

    # 获取 REPL 实例
    current_repl = _get_repl()
    if current_repl is None:
        error_msg = "Python REPL 初始化失败或不可用"
        logger.error(error_msg)
        return f"工具错误: {error_msg}"

    logger.info("正在执行 Python 代码")
    
    # 清除之前的绘图
    plt.clf()
    
    try:
        # 预处理代码：去掉多余的缩进（如果不是第一行），尝试修复简单的缩进错误
        # 这是一个非常基础的修复，可能无法覆盖所有情况，但能解决常见的复制粘贴导致的缩进问题
        lines = code.split('\n')
        if lines and (lines[0].startswith(' ') or lines[0].startswith('\t')):
             # 如果第一行有缩进，可能是被包裹在函数或类中的代码块，直接去除公共缩进
             import textwrap
             code = textwrap.dedent(code)
        
        result = current_repl.run(code)
        
        # 检查是否有绘图生成
        plot_output = ""
        if plt.get_fignums():
            buf = io.BytesIO()
            plt.savefig(buf, format='png')
            buf.seek(0)
            img_base64 = base64.b64encode(buf.read()).decode('utf-8')
            plot_output = f"\n\n![Chart](data:image/png;base64,{img_base64})"
            plt.clf() # 清理
            
        # 通过查找典型的错误模式来检查结果是否为错误消息
        if isinstance(result, str) and ("Error" in result or "Exception" in result):
            logger.error(result)
            return f"执行代码时出错:\n```python\n{code}\n```\n错误: {result}"
        logger.info("代码执行成功")
    except BaseException as e:
        error_msg = repr(e)
        logger.error(error_msg)
        return f"Error executing code:\n```python\n{code}\n```\nError: {error_msg}"

    result_str = f"Successfully executed:\n```python\n{code}\n```\nStdout: {result}{plot_output}"
    return result_str
