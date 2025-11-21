import json
import logging
from pathlib import Path
from typing import Annotated, Optional

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


@tool("download_image_tool")
def download_image_tool(
    project_num: Annotated[str, "项目的编号，如 '01', '02'"],
    image_name: Annotated[str, "保存到 resources 目录的图片文件名，例如 'hero-blog.png'"],
    keyword: Annotated[str, "图片搜索关键词，例如 'geek blog hero illustration'"],
    image_url: Annotated[
        Optional[str],
        "图片直链 URL，如果已经在外部选择好了图片，可以直接提供用于下载",
    ] = None,
) -> str:
    """图片获取工具：根据项目编号与图片名，将图片下载到
    `source/project_{编号}/resources/` 目录下，并返回保存结果。

    行为说明：
    - 如果提供了 image_url：直接从该 URL 下载图片并保存；
    - 如果未提供 image_url：
      - 使用 Bing 图片搜索接口 `https://www.bing.com/images/vsasync?q={keyword}`；
      - 从返回结果中选取第一张图片的地址（imageUrl/contentUrl）；
      - 再从该地址下载图片并保存。
    """
    try:
        project_dir: Path = _get_project_dir(project_num).resolve()
        resources_dir = project_dir / "resources"
        resources_dir.mkdir(parents=True, exist_ok=True)

        # 如果未提供 image_url，则先通过关键词调用 Bing 图片搜索接口选出一张图片
        resolved_image_url: Optional[str] = image_url

        with httpx.Client(timeout=10.0, headers=BING_HEADERS) as client:
            if not resolved_image_url:
                search_resp = client.get(
                    BING_IMAGE_SEARCH_URL,
                    params={"q": keyword},
                )
                search_resp.raise_for_status()
                data = search_resp.json()
                items = data.get("results") or data.get("value") or []
                if not items:
                    return (
                        f"错误: 未能根据关键词 '{keyword}' 找到可用图片，"
                        "请尝试调整关键词或补充更具体的描述。"
                    )

                first = items[0] or {}
                resolved_image_url = first.get("imageUrl") or first.get("contentUrl")
                if not resolved_image_url:
                    return "错误: 搜索结果中缺少 imageUrl/contentUrl 字段，无法下载图片"

            filename = image_name.strip() or "image.png"
            save_path = resources_dir / filename

            resp = client.get(resolved_image_url)
            resp.raise_for_status()
            save_path.write_bytes(resp.content)

        logger.info(
            "成功下载图片: %s (project_%s, keyword=%s, url=%s)",
            str(save_path.resolve()),
            project_num,
            keyword,
            resolved_image_url,
        )

        return json.dumps(
            {
                "status": "success",
                "project": f"project_{project_num}",
                "file_path": str(save_path.relative_to(project_dir)),
                "keyword": keyword,
                "image_url": resolved_image_url,
            },
            ensure_ascii=False,
        )

    except Exception as e:  # pragma: no cover - 防御性分支
        logger.exception(
            "图片下载失败: project_num=%s, image_name=%s, keyword=%s", project_num, image_name, keyword
        )
        return f"错误: 无法下载图片，原因: {str(e)}"
