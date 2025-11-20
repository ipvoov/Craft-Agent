import json
import logging
from typing import Annotated

from langchain_core.tools import tool

from src.crawler import Crawler

logger = logging.getLogger(__name__)


@tool
def crawl_tool(
    url: Annotated[str, "要爬取的网页 URL 地址"],
) -> str:
    """使用此工具爬取指定 URL 并获取 Markdown 格式的可读内容。"""
    try:
        crawler = Crawler()
        article = crawler.crawl(url)
        markdown = article.to_markdown()

        # 与 deer-flow 一致：做长度截断，避免单次消息过长
        markdown = markdown[:1000]

        return json.dumps({"url": url, "crawled_content": markdown}, ensure_ascii=False)
    except BaseException as e:
        error_msg = f"Failed to crawl. Error: {repr(e)}"
        logger.error(error_msg)
        return error_msg