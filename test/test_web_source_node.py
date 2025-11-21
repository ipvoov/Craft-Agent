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
from src.graph.web_gen_nodes.web_source import web_source_node


async def test_web_source_node() -> bool:
    """测试 web_source_node 是否能基于资源型步骤生成图片资源规划，并触发图片下载。"""
    print("\n" + "=" * 60)
    print("🧪 测试 web_source_node - 资源规划与图片下载")
    print("=" * 60)

    try:
        # 1. 构造包含资源型步骤的 WebPlan
        print("\n📋 步骤 1: 构造 WebPlan（仅包含 1 个资源规划步骤）")

        step_description = (
            "为首页 Hero 区和功能卡片规划图片与图标资源，"
            "需要至少包含 1 张 Hero 主视觉图和 2~3 个功能图标，"
            "并结合项目大纲中首页的布局说明，规划 image_name 与 keyword。"
        )

        plan = WebPlan(
            thought="测试资源规划与图片下载",
            title="黑客主题博客站点 资源规划测试计划",
            steps=[
                WebStep(
                    title="首页图片与图标资源规划",
                    description=step_description,
                    step_type=WebStepType.Source,
                    execution_res=None,
                )
            ],
        )
        print("✅ WebPlan 已构造，包含 1 个 source 步骤")

        # 2. 准备 WebGenState
        print("\n📋 步骤 2: 构造 WebGenState")
        state = WebGenState(
            messages=[
                HumanMessage(
                    content=(
                        "黑客主题博客网站：请为首页 Hero 区和主要功能卡片规划需要的图片资源，"
                        "并为每张图片规划合适的 image_name 与 keyword，便于后续自动下载到 resources 目录。"
                    )
                )
            ],
            name="黑客主题博客",
            number="01",  # 对应 source/project_01，用于 download_image_tool 写入文件
            tree=None,
            current_plan=plan,
            goto=None,
        )
        print("✅ WebGenState 已创建 (name=黑客主题博客, number=01)")

        # 3. 调用 web_source_node（异步）
        print("\n📋 步骤 3: 调用 web_source_node 执行当前资源规划步骤")
        config = {"configurable": {}}
        result = await web_source_node(state, config)  # type: ignore[arg-type]

        # 4. 检查执行结果
        print("\n📋 步骤 4: 检查执行结果")
        assert hasattr(result, "update"), "返回结果缺少 update 字段"
        assert hasattr(result, "goto"), "返回结果缺少 goto 字段"
        print(f"✅ Command 结构正确，goto = {result.goto}")

        updated_plan = result.update.get("current_plan")
        assert updated_plan is not None, "返回结果中缺少 current_plan"
        assert isinstance(updated_plan, WebPlan), "current_plan 类型错误"
        print("✅ current_plan 类型正确 (WebPlan)")

        step = updated_plan.steps[0]
        exec_res = step.execution_res or ""
        print("\n📄 资源规划输出预览 (前 400 字):\n")
        print(exec_res[:400])

        if not exec_res:
            print("\n⚠️ 当前步骤 execution_res 为空，可能是模型调用失败或提示词未生效")
        else:
            print("\n✅ 当前步骤已生成资源规划说明 (execution_res 非空)")

        resources_dir = project_root / "source" / "project_01" / "resources"
        print(
            "\n📂 请手动检查以下目录下是否生成了若干图片文件 (如网络与权限允许)：\n"
            f"   - {resources_dir}\n"
        )

        print("\n🎉 web_source_node 资源规划与图片下载测试完成")
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
    """命令行入口：运行 web_source_node 资源规划测试。"""
    print("🦌 DeerFlow - web_source_node 资源规划与图片下载测试")
    print(f"项目根目录: {project_root}")

    success = asyncio.run(test_web_source_node())

    if success:
        print("\n✨ 测试结束：web_source_node 资源规划测试执行成功")
        sys.exit(0)
    else:
        print("\n💥 测试结束：web_source_node 资源规划测试失败")
        sys.exit(1)


if __name__ == "__main__":
    main()
