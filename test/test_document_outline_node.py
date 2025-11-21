import sys
import asyncio
from pathlib import Path

from langchain_core.messages import HumanMessage

# 将项目根目录加入 sys.path，方便在测试中导入 src 模块
current_dir = Path(__file__).resolve().parent
project_root = current_dir.parent
if str(project_root) not in sys.path:
    sys.path.append(str(project_root))

from src.graph.State import WebGenState
from src.graph.web_gen_nodes.outline import outline_node


async def test_outline_node() -> bool:
    """测试 outline_node 是否能基于用户需求生成 outline.md 风格的项目大纲文档。"""
    print("\n" + "=" * 60)
    print("🧪 测试 outline_node - 项目大纲预生成节点 (outline.md)")
    print("=" * 60)

    try:
        # 1. 准备 WebGenState
        print("\n📋 步骤 1: 构造 WebGenState")
        state = WebGenState(
            messages=[
                HumanMessage(
                    content=(
                        "极客博客布局网站：请根据当前用户需求，先生成一份完整的项目大纲文档（outline.md），"
                        "后续网页生成计划会严格参考这份大纲。"
                    )
                )
            ],
            name="极客博客布局",
            number="01",  # 对应 source/project_01，用于 write_file_tool 写入文件
            tree=None,
            current_plan=None,
            goto=None,
        )
        print("✅ WebGenState 已创建 (name=极客博客布局, number=01)")

        # 2. 调用 outline_node（异步）
        print("\n📋 步骤 2: 调用 outline_node 生成项目大纲文档")
        config = {"configurable": {}}
        result = await outline_node(state, config)  # type: ignore[arg-type]

        # 3. 检查执行结果
        print("\n📋 步骤 3: 检查执行结果")
        assert hasattr(result, "update"), "返回结果缺少 update 字段"
        assert hasattr(result, "goto"), "返回结果缺少 goto 字段"
        print(f"✅ Command 结构正确，goto = {result.goto}")

        outline_text = result.update.get("tree")
        assert isinstance(outline_text, str), "返回结果中的 tree 字段类型错误，应为 str"
        assert outline_text.strip(), "返回结果中的 tree 为空字符串，可能是模型调用失败或提示词未生效"
        print("✅ tree 字段已写入项目大纲文档正文")

        print("\n📄 项目大纲文档预览 (前 400 字):\n")
        preview = outline_text[:400]
        print(preview)

        print(
            "\n📂 请手动检查以下文件是否已生成预期风格的 Markdown 文档：\n"
            "   - source/project_01/outline.md (如使用了 write_file_tool)\n"
            "   - 或你在会话中另行指定的相对路径\n"
        )

        print("\n🎉 outline_node 项目大纲预生成节点测试完成")
        return True

    except AssertionError as e:
        print(f"\n❌ 断言失败: {e}")
        import traceback
        traceback.print_exc()
        return False

    except Exception as e:
        print(f"\n❌ 测试过程中发生异常: {e}")
        import traceback
        traceback.print_exc()
        return False


def main() -> None:
    """命令行入口：运行项目大纲预生成节点测试。"""
    print("🦌 DeerFlow - outline_node 项目大纲预生成节点测试")
    print(f"项目根目录: {project_root}")

    success = asyncio.run(test_outline_node())

    if success:
        print("\n✨ 测试结束：outline_node 项目大纲预生成节点执行成功")
        sys.exit(0)
    else:
        print("\n💥 测试结束：outline_node 项目大纲预生成节点测试失败")
        sys.exit(1)


if __name__ == "__main__":
    main()
