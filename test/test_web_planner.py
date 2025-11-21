import sys
from pathlib import Path
from langchain_core.messages import HumanMessage

# 将项目根目录添加到 sys.path，以便导入 src 模块
current_dir = Path(__file__).resolve().parent
project_root = current_dir.parent
sys.path.append(str(project_root))

from src.graph.web_gen_nodes.web_planner import web_planner_node
from src.graph.State import WebGenState
from src.prompts.planner_model import WebPlan, WebStepType


def test_web_planner_node():
    """测试 web_planner_node 是否能正常生成网页规划"""
    print("\n" + "="*60)
    print("🧪 测试 web_planner_node - 网页生成规划器")
    print("="*60)
    
    try:
        # 1. 准备测试用的 state
        print("\n📋 步骤 1: 准备测试数据")
        test_state = WebGenState(
            messages=[
                HumanMessage(
                    content="帮我生成一个极客风格的个人博客网站，整体风格像代码编辑器布局，需要有首页文章流、文章详情页、标签归档页和关于页面，并且有明显的极客代码氛围。"
                )
            ],
            name="极客博客布局",
            number="TEST-001",
            tree=None,
            current_plan=None,
            goto=None
        )
        print(f"✅ 测试 State 已创建")
        print(f"   用户需求: {test_state['messages'][0].content}")
        
        # 2. 准备 config
        print("\n📋 步骤 2: 准备配置")
        config = {
            "configurable": {}
        }
        print(f"✅ 配置已准备")
        
        # 3. 调用 web_planner_node
        print("\n📋 步骤 3: 调用 web_planner_node")
        print("⏳ 正在调用 reasoning 模型生成计划...")
        result = web_planner_node(test_state, config)
        
        # 4. 验证结果
        print("\n📋 步骤 4: 验证生成结果")
        
        # 检查返回的 Command 对象
        assert hasattr(result, 'update'), "❌ 返回结果缺少 update 字段"
        assert hasattr(result, 'goto'), "❌ 返回结果缺少 goto 字段"
        print("✅ Command 对象结构正确")
        
        # 检查 goto 目标
        print(f"   路由目标: {result.goto}")
        if result.goto == "__end__":
            print("⚠️  生成失败，流程已结束")
            if "messages" in result.update:
                error_msg = result.update["messages"][-1].content
                print(f"   错误信息: {error_msg[:200]}...")
            return False
        
        assert result.goto == "code_team", f"❌ 路由目标错误: {result.goto}"
        print("✅ 路由目标正确 (code_team)")
        
        # 检查 current_plan
        assert "current_plan" in result.update, "❌ 返回结果缺少 current_plan"
        current_plan = result.update["current_plan"]
        assert isinstance(current_plan, WebPlan), "❌ current_plan 类型错误"
        print("✅ 生成的计划类型正确 (WebPlan)")
        
        # 5. 详细检查计划内容
        print("\n📋 步骤 5: 检查计划内容")
        print(f"\n{'='*60}")
        print("📝 生成的网页规划详情:")
        print(f"{'='*60}")
        
        print(f"\n💭 思考过程:")
        print(f"   {current_plan.thought[:200]}..." if len(current_plan.thought) > 200 else f"   {current_plan.thought}")
        
        print(f"\n📌 计划标题: {current_plan.title}")
        
        print(f"\n📋 步骤数量: {len(current_plan.steps)} 个")
        
        # 统计步骤类型
        step_types = {}
        for step in current_plan.steps:
            step_type = step.step_type.value if hasattr(step.step_type, 'value') else step.step_type
            step_types[step_type] = step_types.get(step_type, 0) + 1
        
        print(f"\n📊 步骤类型统计:")
        for step_type, count in step_types.items():
            print(f"   - {step_type}: {count} 个")
        
        # 检查是否包含必要的步骤类型
        assert len(current_plan.steps) > 0, "❌ 计划步骤为空"
        print("\n✅ 计划包含步骤")
        
        # 打印每个步骤的详情
        print(f"\n📑 详细步骤列表:")
        print("-" * 60)
        for i, step in enumerate(current_plan.steps, 1):
            step_type_str = step.step_type.value if hasattr(step.step_type, 'value') else step.step_type
            print(f"\n步骤 {i}: {step.title}")
            print(f"   类型: {step_type_str}")
            print(f"   描述: {step.description[:150]}..." if len(step.description) > 150 else f"   描述: {step.description}")
            
            # 验证步骤类型是否合法
            valid_types = [t.value for t in WebStepType]
            assert step_type_str in valid_types, f"❌ 步骤类型 {step_type_str} 不合法"
        
        print("\n" + "-" * 60)
        print("\n✅ 所有步骤类型合法")
        
        # 6. 检查是否包含三种类型的步骤
        print(f"\n📋 步骤 6: 检查步骤类型覆盖")
        has_source = any(step.step_type == WebStepType.Source for step in current_plan.steps)
        has_document = any(step.step_type == WebStepType.Document for step in current_plan.steps)
        has_codegen = any(step.step_type == WebStepType.Codegen for step in current_plan.steps)
        
        print(f"   包含 source 步骤: {'✅' if has_source else '⚠️ '}")
        print(f"   包含 document 步骤: {'✅' if has_document else '⚠️ '}")
        print(f"   包含 codegen 步骤: {'✅' if has_codegen else '⚠️ '}")
        
        if has_source and has_document and has_codegen:
            print("\n🎉 计划包含所有三种类型的步骤，覆盖完整！")
        else:
            print("\n⚠️  计划未包含全部三种类型的步骤（这可能是正常的，取决于需求）")
        
        # 最终结论
        print("\n" + "="*60)
        print("🎉 测试通过！web_planner_node 工作正常")
        print("="*60)
        print(f"✅ 成功生成了包含 {len(current_plan.steps)} 个步骤的网页生成计划")
        print("✅ 所有步骤类型验证通过")
        print("✅ 计划结构完整，可以正常驱动后续流程")
        
        return True
        
    except AssertionError as e:
        print(f"\n❌ 断言失败: {e}")
        import traceback
        traceback.print_exc()
        return False
        
    except Exception as e:
        print(f"\n❌ 测试失败: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    """主测试函数"""
    print("🦌 DeerFlow - Web Planner 节点测试")
    print(f"配置文件: {project_root / 'config.yaml'}")
    
    success = test_web_planner_node()
    
    if success:
        print("\n✨ 所有测试通过！")
        sys.exit(0)
    else:
        print("\n💥 测试失败！")
        sys.exit(1)


if __name__ == "__main__":
    main()
