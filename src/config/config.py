from pathlib import Path
import yaml

# 使用相对于项目根目录的路径
base_dir = Path(__file__).resolve().parent.parent.parent  # 获取项目根目录
yaml_path = base_dir / "config.yaml"

# 读取配置文件
try:
    yaml_str = yaml_path.read_text(encoding="utf-8")
    Config = yaml.safe_load(yaml_str)  # 返回 dict / list / scalar

except FileNotFoundError:
    print(f"配置文件未找到: {yaml_path}")
    Config = {}
except Exception as e:
    print(f"配置文件加载失败: {e}")
    Config = {}