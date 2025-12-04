import json
import logging
from pathlib import Path
from typing import Annotated

import httpx
from langchain_core.tools import tool

from src.config.config import Config
from .file import _get_project_dir

logger = logging.getLogger(__name__)

PEXELS_API_URL = "https://api.pexels.com/v1/search"
PEXELS_API_KEY = Config.get("PEXELS_API_KEY", "")


def _get_pexels_headers() -> dict:
    """获取 Pexels API 请求头"""
    return {
        "Authorization": PEXELS_API_KEY,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
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
    
    # 检查 API 密钥
    if not PEXELS_API_KEY:
        logger.error("PEXELS_API_KEY 未设置")
        for img_info in images:
            results["failed"].append({
                "image_name": img_info.get("image_name", ""),
                "keyword": img_info.get("keyword", ""),
                "error": "PEXELS_API_KEY 未设置"
            })
        return json.dumps(results, ensure_ascii=False)
    
    headers = _get_pexels_headers()
    
    with httpx.Client(timeout=15.0, headers=headers) as client:
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
                # 使用 Pexels API 搜索图片
                search_resp = client.get(
                    PEXELS_API_URL,
                    params={"query": keyword, "per_page": 1},
                )
                search_resp.raise_for_status()
                data = search_resp.json()
                photos = data.get("photos") or []
                
                if not photos:
                    results["failed"].append({
                        "image_name": image_name,
                        "keyword": keyword,
                        "error": f"未找到关键词 '{keyword}' 的图片"
                    })
                    continue
                
                # 从 Pexels 响应中提取原始尺寸图片 URL
                first_photo = photos[0]
                src = first_photo.get("src", {})
                resolved_image_url = src.get("original") or src.get("large") or src.get("medium")
                
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
                    PEXELS_API_URL,
                    params={"query": link_keyword, "per_page": 10},
                )
                link_search_resp.raise_for_status()
                link_data = link_search_resp.json()
                photos = link_data.get("photos") or []
                
                # 提取前 10 张图片链接
                for photo in photos[:10]:
                    src = photo.get("src", {})
                    image_url = src.get("original") or src.get("large")
                    if image_url:
                        results["image_links"].append(image_url)
                
                logger.info("成功搜索到 %d 张图片链接", len(results["image_links"]))
            except Exception as e:
                logger.warning("搜索图片链接失败: %s", str(e))
    
    return json.dumps(results, ensure_ascii=False)
