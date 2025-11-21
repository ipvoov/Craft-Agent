import json
import sys
from pathlib import Path

# 将项目根目录加入 sys.path，确保可以导入 src 模块
current_dir = Path(__file__).resolve().parent
project_root = current_dir.parent
if str(project_root) not in sys.path:
    sys.path.append(str(project_root))

from src.tools.crawl import crawl_tool  # noqa: E402


def run_crawl_tool_smoke_test() -> None:
    """对 crawl_tool 做一次最简单的冒烟测试。

    - 实际调用 Jina + Readability + Crawler 链路
    - 使用一个稳定的公共网页 URL
    - 断言返回结果是 JSON 字符串，且包含 url 和 crawled_content 字段
    """
    test_url = "https://baijiahao.baidu.com/s?id=1833164367864050283&wfr=spider&for=pc"
    print("\n" + "=" * 50)
    print("🧪 测试 crawl_tool")
    print("=" * 50)
    print(f"测试 URL: {test_url}")

    try:
        # 调用 LangChain 工具（同步）
        raw_result = crawl_tool.invoke(test_url)
        print("\n原始返回（前 400 字符）:\n")
        preview = raw_result[:400]
        print(preview + ("..." if len(raw_result) > 400 else ""))

        # 解析 JSON
        data = json.loads(raw_result)
        if not isinstance(data, dict):
            raise ValueError("crawl_tool 返回的 JSON 顶层不是对象")

        url = data.get("url")
        crawled_content = data.get("crawled_content")

        if url != test_url:
            raise ValueError(f"返回的 url 不匹配，期望 {test_url}，实际 {url}")

        if not isinstance(crawled_content, str) or not crawled_content.strip():
            raise ValueError("crawled_content 为空或不是字符串")

        print("\n✅ crawl_tool 冒烟测试通过！")
        print(f"crawled_content 长度: {len(crawled_content)} 字符")
    except Exception as e:  # pylint: disable=broad-except
        print(f"\n❌ crawl_tool 测试失败: {e}")
        import traceback

        traceback.print_exc()


if __name__ == "__main__":
    run_crawl_tool_smoke_test()
