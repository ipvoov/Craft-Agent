import os
import sys
import asyncio
import yaml
from pathlib import Path
from langchain_core.messages import HumanMessage

# 将项目根目录添加到 sys.path，以便导入 src 模块
current_dir = Path(__file__).resolve().parent
project_root = current_dir.parent
sys.path.append(str(project_root))

from src.llms.llm import get_llm_by_type
from src.config.config import Config

# 加载配置
config_path = project_root / "config.yaml"
if config_path.exists():
    with open(config_path, "r", encoding="utf-8") as f:
        config_data = yaml.safe_load(f)
        # 简单的配置注入，模拟 src.config.config.Config 的行为（如果它依赖文件加载）
        # 这里直接更新 Config 类的内部存储（假设 Config 是单例或类变量管理）
        # 注意：由于无法直接访问 Config 的私有加载逻辑，我们依赖 get_llm_by_type 内部会读取 Config
        # 如果 Config 需要显式加载，这里可能需要调整。
        # 为了保险，我们手动设置 Config._config (如果它是私有的) 或相应的存储
        pass
else:
    print(f"错误: 找不到配置文件 {config_path}")
    sys.exit(1)

async def test_basic_model():
    print("\n" + "="*50)
    print("🧪 测试 BASIC_MODEL (基础模型)")
    print("="*50)
    
    try:
        llm = get_llm_by_type("basic")
        print(f"配置模型: {llm.model_name}")
        print(f"API Base: {llm.openai_api_base}")
        
        msg = HumanMessage(content="你好，请回复'测试成功'四个字。")
        print(f"\n发送消息: {msg.content}")
        
        print("正在调用 (invoke)...")
        response = await llm.ainvoke([msg])
        print(f"✅ 调用成功!")
        print(f"响应内容: {response.content}")
        
        print("\n正在测试流式 (stream)...")
        print("响应流: ", end="", flush=True)
        async for chunk in llm.astream([msg]):
            print(chunk.content, end="", flush=True)
        print("\n✅ 流式测试结束")
        
    except Exception as e:
        print(f"\n❌ BASIC_MODEL 测试失败: {e}")
        import traceback
        traceback.print_exc()

async def test_reasoning_model():
    print("\n" + "="*50)
    print("🧪 测试 REASONING_MODEL (推理模型)")
    print("="*50)
    
    try:
        # 检查配置中是否存在 REASONING_MODEL
        # 由于 get_llm_by_type 会抛错或返回默认，我们先尝试获取
        llm = get_llm_by_type("reasoning")
        print(f"配置模型: {llm.model_name}")
        print(f"API Base: {llm.openai_api_base}")
        
        msg = HumanMessage(content="9.11和9.8哪个大？")
        print(f"\n发送消息: {msg.content}")
        
        print("正在调用 (invoke)...")
        response = await llm.ainvoke([msg])
        print(f"✅ 调用成功!")
        
        # 检查推理内容
        reasoning = response.additional_kwargs.get("reasoning_content")
        if reasoning:
            print(f"🧠 捕获到思考过程 (前100字符): {reasoning[:100]}...")
        else:
            print("⚠️ 未捕获到思考过程 (reasoning_content 为空)")
            
        print(f"响应内容: {response.content}")

        print("\n正在测试流式 (stream)...")
        print("响应流: ", end="", flush=True)
        async for chunk in llm.astream([msg]):
            content = chunk.content
            # 尝试打印 reasoning chunk 如果有的话 (DashScope 特有)
            r_content = chunk.additional_kwargs.get("reasoning_content", "")
            if r_content:
                # 为了不混淆输出，这里不打印思考过程的流，只标记
                pass
            print(content, end="", flush=True)
        print("\n✅ 流式测试结束")

    except Exception as e:
        print(f"\n❌ REASONING_MODEL 测试失败: {e}")
        import traceback
        traceback.print_exc()

async def main():
    print("🦌 DeerFlow 模型连接性测试")
    print(f"配置文件: {config_path}")
    
    await test_basic_model()
    await test_reasoning_model()

if __name__ == "__main__":
    asyncio.run(main())
