
import logging
from typing import Annotated
from langchain_core.tools import tool
from src.utils.jina import jina_crawl, clean_html_for_llm, html_to_markdown

logger = logging.getLogger(__name__)


@tool
def crawl_tool(
    url: Annotated[str, "要爬取的网页 URL 地址"],
) -> str:
    """使用此工具爬取指定 URL 并获取 Markdown 格式的可读内容。"""
    try:
        # 使用 HTML -> 清理 -> Markdown
        raw_html = jina_crawl(url, return_format="html")
        cleaned_html = clean_html_for_llm(raw_html)
        markdown = html_to_markdown(cleaned_html)
        
        # 检查并处理长度限制
        markdown = markdown[:2000] + "\n\n[...Content truncated due to length limit...]"
            
    except Exception as e:
        logger.error(f"Failed to fetch URL {url} from Jina: {repr(e)}")
        raise

    return markdown