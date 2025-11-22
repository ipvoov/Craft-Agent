import json
import logging
from pathlib import Path
from typing import Annotated

import httpx
from langchain_core.tools import tool

from .file import _get_project_dir

logger = logging.getLogger(__name__)

BING_IMAGE_SEARCH_URL = "https://www.bing.com/images/vsasync"
BING_HEADERS = {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.bing.com/visualsearch?mkt=zh-CN",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/142.0.0.0 Safari/537.36"
    ),
}


@tool("batch_download_images_tool")
def batch_download_images_tool(
    project_num: Annotated[str, "项目的编号，如 '01', '02'"],
    images: Annotated[list[dict[str, str]], "图片列表，每个元素包含 {'image_name': 'xxx.png', 'keyword': 'search term'}"],
    link_keyword: Annotated[str, "图片链接搜索关键词，用于获取 10 张图片链接供代码生成使用"],
) -> str:
    """批量下载图片工具：批量下载图片到 resources 目录，并额外搜索返回 10 张图片链接。
    
    Args:
        project_num: 项目编号
        images: 图片列表，每个元素包含 {"image_name": "xxx.png", "keyword": "search term"}
        link_keyword: 图片链接搜索关键词，系统会搜索并返回 10 张图片链接，供代码生成阶段使用
    
    Returns:
        JSON 字符串，包含：
        - success: 成功下载的图片列表
        - failed: 失败的图片列表
        - total: 总数
        - image_links: 根据 link_keyword 搜索到的 10 张图片链接
    """
    project_dir: Path = _get_project_dir(project_num).resolve()
    resources_dir = project_dir / "resources"
    resources_dir.mkdir(parents=True, exist_ok=True)
    
    results = {
        "success": [],
        "failed": [],
        "total": len(images),
        "image_links": [],
    }
    
    with httpx.Client(timeout=10.0, headers=BING_HEADERS) as client:
        for img_info in images:
            image_name = img_info.get("image_name", "")
            keyword = img_info.get("keyword", "")
            
            if not image_name or not keyword:
                results["failed"].append({
                    "image_name": image_name,
                    "keyword": keyword,
                    "error": "缺少必要参数"
                })
                continue
            
            try:
                # 搜索图片
                search_resp = client.get(
                    BING_IMAGE_SEARCH_URL,
                    params={"q": keyword},
                )
                search_resp.raise_for_status()
                data = search_resp.json()
                items = data.get("results") or data.get("value") or []
                
                if not items:
                    results["failed"].append({
                        "image_name": image_name,
                        "keyword": keyword,
                        "error": f"未找到关键词 '{keyword}' 的图片"
                    })
                    continue
                
                first = items[0] or {}
                resolved_image_url = first.get("imageUrl") or first.get("contentUrl")
                if not resolved_image_url:
                    results["failed"].append({
                        "image_name": image_name,
                        "keyword": keyword,
                        "error": "搜索结果缺少图片URL"
                    })
                    continue
                
                # 下载图片
                filename = image_name.strip()
                save_path = resources_dir / filename
                
                resp = client.get(resolved_image_url)
                resp.raise_for_status()
                save_path.write_bytes(resp.content)
                
                results["success"].append({
                    "image_name": image_name,
                    "keyword": keyword,
                    "file_path": str(save_path.relative_to(project_dir)),
                    "image_url": resolved_image_url,
                })
                
                logger.info(
                    "批量下载成功: %s (project_%s, keyword=%s)",
                    str(save_path.resolve()),
                    project_num,
                    keyword,
                )
                
            except Exception as e:
                results["failed"].append({
                    "image_name": image_name,
                    "keyword": keyword,
                    "error": str(e)
                })
                logger.exception(
                    "批量下载失败: project_num=%s, image_name=%s, keyword=%s",
                    project_num,
                    image_name,
                    keyword,
                )
        
        # 搜索图片链接（最多 10 张）
        if link_keyword:
            try:
                logger.info("正在搜索图片链接: keyword=%s", link_keyword)
                link_search_resp = client.get(
                    BING_IMAGE_SEARCH_URL,
                    params={"q": link_keyword},
                )
                link_search_resp.raise_for_status()
                link_data = link_search_resp.json()
                link_items = link_data.get("results") or link_data.get("value") or []
                
                # 提取前 10 张图片链接
                for item in link_items[:10]:
                    image_url = item.get("imageUrl") or item.get("contentUrl")
                    if image_url:
                        results["image_links"].append(image_url)
                
                logger.info("成功搜索到 %d 张图片链接", len(results["image_links"]))
            except Exception as e:
                logger.warning("搜索图片链接失败: %s", str(e))
    
    return json.dumps(results, ensure_ascii=False)
