from src.config.config import Config
import logging
import requests
import re
from bs4 import BeautifulSoup
import html2text


logger = logging.getLogger(__name__)

def jina_crawl(url: str, return_format: str = "html") -> str:
    """使用 Jina API 爬取指定 URL 并获取指定格式的内容。"""
    headers = {
        "Content-Type": "application/json",
        "X-Return-Format": return_format,
    }
    
    # 高级功能需要 API key
    if Config.get("JINA_API_KEY"):
        headers["Authorization"] = f"Bearer {Config.get('JINA_API_KEY')}"
        headers["X-With-Generated-Alt"] = "true"  # 为图片生成描述文本，提升可读性
        headers["X-With-Links-Summary"] = "true"  # 在末尾添加所有链接的摘要列表
    else:
        logger.warning("Jina API key is not set.")

    response = requests.post("https://r.jina.ai/" + url, headers=headers)

    if response.status_code != 200:
        raise ValueError(f"Jina API returned status {response.status_code}: {response.text}")

    if not response.text or not response.text.strip():
        raise ValueError("Jina API returned empty response")

    return response.text


def clean_html_for_llm(html_content: str) -> str:
    """第二阶段：清理 HTML，移除噪音元素，保留主要内容。
    清理策略（基于 HTML 结构）：
    - 提取主内容区域（article, main, .content）
    - 移除导航栏（nav, header）
    - 移除页脚（footer）
    - 移除侧边栏（aside）
    - 移除广告和推荐（常见 class/id）
    """
    if not html_content or not html_content.strip():
        return ""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # 1. 尝试提取主内容区域（优先级从高到低）
    # 先提取再清理，可以避免误删外层容器，且减少处理量
    main_content = None
    # 优先查找语义化标签
    # 调整优先级：先找 main，再找 article，因为 article 可能出现在侧边栏或页眉中
    for selector in ['main', '[role="main"]', 'article']:
        main_content = soup.select_one(selector)
        if main_content:
            break
            
    # 如果没找到，尝试常见的内容容器（扩展列表）
    if not main_content:
        content_patterns = [
            'post_body', 'post-body', 'article-body', 'entry-body',
            'post_content', 'post-content', 'article-content', 'entry-content',
            'main-content', 'main_content', 'content-main',
            'post-text', 'article-text',
        ]
        for pattern in content_patterns:
            # 精确匹配 class
            main_content = soup.find(class_=pattern)
            if not main_content:
                # 模糊匹配（包含该词）
                main_content = soup.find(class_=re.compile(rf'\b{pattern}\b', re.I))
            if main_content:
                break
    
    # 最后尝试查找 body 标签
    if not main_content:
        main_content = soup.find('body')
    
    # 确定要处理的内容范围
    # 如果找到了主内容，就只处理主内容；否则处理整个文档
    target_soup = main_content if main_content else soup
    
    # 2. 移除明确的噪音标签（但保留 header 因为可能包含标题）
    noise_tags = ['nav', 'footer', 'aside', 'script', 'style', 'iframe', 'noscript']
    for tag in noise_tags:
        for element in target_soup.find_all(tag):
            element.decompose()

    # 3. 更精准的噪音 class/id 匹配（使用完整单词边界）
    noise_patterns = [
        # 导航相关（精确匹配）
        r'\bnav\b', r'\bnavigation\b', r'\bmenu\b', r'\bnavbar\b', r'\btopbar\b', r'\btoolbar\b',
        # 页脚相关
        r'\bfooter\b', r'\bbottom\b',
        # 侧边栏
        r'\bsidebar\b', r'\bside-bar\b',
        # 广告（精确匹配避免误删）
        r'\bad-\w+', r'\bads\b', r'\badvertisement\b', r'\bbanner\b', r'\bpromo\b',
        # 推荐和相关（但不删除包含 content 的）
        r'\brecommend-\w+', r'\brelated-\w+', r'\bpopular-\w+',
        # 社交分享
        r'\bshare-\w+', r'\bsocial-\w+',
        # 评论
        r'\bcomment-\w+', r'\bdiscuss\b',
        # 其他
        r'\bbreadcrumb\b', r'\bpagination\b',
    ]
    
    # 保护列表：核心标签即使命中了噪音模式也不应该被删除
    protected_tags = ['html', 'body', 'main', 'article']
    
    for pattern in noise_patterns:
        # 只删除明确匹配的元素
        for element in target_soup.find_all(class_=re.compile(pattern, re.I)):
            if element.name not in protected_tags:
                element.decompose()
        for element in target_soup.find_all(id=re.compile(pattern, re.I)):
            if element.name not in protected_tags:
                element.decompose()
    
    return str(target_soup)


def html_to_markdown(html_content: str) -> str:
    """将 HTML 转换为 Markdown 格式。"""
    h = html2text.HTML2Text()
    # 配置转换选项
    h.ignore_links = False  # 保留链接
    h.ignore_images = False  # 保留图片
    h.ignore_emphasis = False  # 保留强调
    h.body_width = 0  # 不限制行宽
    h.unicode_snob = True  # 使用 Unicode
    h.skip_internal_links = True  # 跳过内部锚点链接
    h.ignore_mailto_links = True  # 忽略 mailto 链接
    markdown = h.handle(html_content)
    # 后处理：清理多余空行
    markdown = re.sub(r'\n{3,}', '\n\n', markdown)
    markdown = markdown.strip()
    
    return markdown