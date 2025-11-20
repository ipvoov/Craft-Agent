import json

from langchain_core.tools import tool
from tavily import TavilyClient
from typing import Annotated
from src.config.config import Config
from src.tools.search_postprocessor import SearchResultPostProcessor

@tool
def web_search(
    query: Annotated[str, "搜索查询字符串"],
):
    """使用 Tavily 搜索引擎进行查询并返回搜索结果。"""
    client = TavilyClient(Config["TAVILY_API_KEY"])
    response = client.search(
        query=query,
        max_results=Config["TAVILY_MAX_RESULTS"],
        search_depth="advanced",              # 搜索深度
        include_raw_content=True,             # 是否包含原始内容
        include_images=True,                  # 是否包含图片
        include_image_descriptions=True,      # 是否包含图片描述

        include_domains=[],                   # 包含域名过滤
        exclude_domains=[],                   # 排除域名过滤
        include_answer=False,                 # 是否包含回答
    )
    
    # 转换 Tavily 响应格式以匹配前端期望
    # 前端期望一个扁平化的列表，包含 "page" 和 "image" 类型的结果
    results = []
    
    # 处理文本/页面结果
    if "results" in response and isinstance(response["results"], list):
        for result in response["results"]:
            results.append({
                "type": "page",
                "title": result.get("title", ""),
                "url": result.get("url", ""),
                "content": result.get("content", ""),
                "raw_content": result.get("raw_content", ""),
                "score": result.get("score", 0),
            })
            
    # 处理图片结果
    if "images" in response and isinstance(response["images"], list):
        for image in response["images"]:
            # Tavily 的 images 可能是字符串 URL 列表，也可能是对象列表
            if isinstance(image, str):
                results.append({
                    "type": "image",
                    "image_url": image,
                    "image_description": "",
                })
            elif isinstance(image, dict):
                results.append({
                    "type": "image",
                    "image_url": image.get("url", ""),
                    "image_description": image.get("description", ""),
                })

    # 对搜索结果进行后处理：去重、过滤低质量结果、截断过长内容等
    processor = SearchResultPostProcessor(
        min_score_threshold=0.0,
        max_content_length_per_page=4000,
    )
    results = processor.process_results(results)
    
    # 如果没有结果，但 response 本身不是空的，尝试将其转换为 JSON 字符串以便调试
    if not results and response:
        # 保留原始响应以便前端备用处理或调试
        return json.dumps(response, ensure_ascii=False)
        
    return json.dumps(results, ensure_ascii=False)

if __name__ == "__main__":
    result = web_search.invoke("2025年7月GitHub上最火爆的5个项目")
    x = json.dumps(result, ensure_ascii=False)
    print(x)

