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
from src.prompts.planner_model import WebPlan, WebStep, WebStepType
from src.graph.web_gen_nodes.document import document_node


async def test_document_design_node() -> bool:
    """测试 document_node 是否能基于设计风格步骤生成 design.md 风格的文档。"""
    print("\n" + "=" * 60)
    print("🧪 测试 document_node - 设计风格文档步骤 (design.md)")
    print("=" * 60)

    try:
        # 1. 构造包含设计风格步骤的 WebPlan
        print("\n📋 步骤 1: 构造 WebPlan（仅包含设计风格文档步骤）")

        step1_description = (
            "为整个网站梳理视觉设计规范，包括设计理念、色彩系统、字体系统、"
            "动效与视觉效果、布局与响应式、组件样式与品牌元素。输出为design.md。"
        )

        plan = WebPlan(
            thought="测试设计风格文档步骤",
            title="极客博客站点 Web 设计风格测试计划",
            steps=[
                WebStep(
                    title="创建设计风格文档(design.md)",
                    description=(
                        "步骤 1: 创建设计风格文档(design.md)\n"
                        "类型: document\n"
                        f"描述: {step1_description}"
                    ),
                    step_type=WebStepType.Document,
                    execution_res=None,
                )
            ],
        )
        print("✅ WebPlan 已构造，包含 1 个 document 步骤，并在描述中显式包含 design.md 关键词")

        # 2. 准备 WebGenState
        print("\n📋 步骤 2: 构造 WebGenState")
        state = WebGenState(
            messages=[
                HumanMessage(
                    content=(
                        "极客博客布局网站：请根据当前 Web 生成计划的第一个文档步骤，"
                        "生成一份完整的设计风格文档。"
                    )
                )
            ],
            name="极客博客布局",
            number="01",  # 对应 source/project_01，用于 write_file_tool 写入文件
            tree=None,
            current_plan=plan,
            goto=None,
        )
        print("✅ WebGenState 已创建 (name=极客博客布局, number=01)")

        # 3. 调用 document_node（异步）
        print("\n📋 步骤 3: 调用 document_node 执行当前设计风格文档步骤")
        config = {"configurable": {}}
        result = await document_node(state, config)  # type: ignore[arg-type]

        # 4. 检查执行结果
        print("\n📋 步骤 4: 检查执行结果")
        assert hasattr(result, "update"), "返回结果缺少 update 字段"
        assert hasattr(result, "goto"), "返回结果缺少 goto 字段"
        print(f"✅ Command 结构正确，goto = {result.goto}")

        updated_plan = result.update.get("current_plan")
        assert updated_plan is not None, "返回结果中缺少 current_plan"
        assert isinstance(updated_plan, WebPlan), "current_plan 类型错误"
        print("✅ current_plan 类型正确 (WebPlan)")

        # 取出第一个步骤的执行结果
        step = updated_plan.steps[0]
        exec_res = step.execution_res or ""
        print("\n📄 设计风格文档预览 (前 400 字):\n")
        preview = exec_res[:400]
        print(preview)

        if not exec_res:
            print("\n⚠️ 当前步骤 execution_res 为空，可能是模型调用失败或提示词未生效")
        else:
            print("\n✅ 当前步骤已生成设计风格文档内容 (execution_res 非空)")

        print(
            "\n📂 请手动检查以下文件是否已生成预期风格的 Markdown 文档：\n"
            "   - source/project_01/design.md (如使用了 write_file_tool)\n"
            "   - 或你在会话中另行指定的相对路径\n"
        )

        print("\n🎉 document_node 设计风格文档步骤测试完成")
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
    """命令行入口：运行设计风格文档节点测试。"""
    print("🦌 DeerFlow - document_node 设计风格文档测试")
    print(f"项目根目录: {project_root}")

    success = asyncio.run(test_document_design_node())

    if success:
        print("\n✨ 测试结束：document_node 设计风格文档步骤执行成功")
        sys.exit(0)
    else:
        print("\n💥 测试结束：document_node 测试失败")
        sys.exit(1)


if __name__ == "__main__":
    main()
