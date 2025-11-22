import json
import logging
import shutil
from pathlib import Path
from typing import Annotated, Literal

from langchain_core.tools import tool

logger = logging.getLogger(__name__)


def _get_project_dir(project_num: str) -> Path:
    """根据项目编号获取项目目录。"""
    repo_root = Path(__file__).resolve().parents[2]
    return repo_root / "source" / f"project_{project_num}"


def _resolve_inside_project(project_num: str, relative_path: str) -> Path:
    """将相对路径解析为项目内的绝对路径，并防止越权。"""
    project_root = _get_project_dir(project_num).resolve()
    path = Path(relative_path)
    if not path.is_absolute():
        path = (project_root / relative_path).resolve()
    if not str(path).startswith(str(project_root)):
        raise ValueError("非法路径，禁止访问项目根目录之外的文件")
    return path


# 在遍历目录结构时需要忽略的目录名称，避免扫描无关或体积巨大的目录
IGNORE_DIR_NAMES = {
    "node_modules",
    ".git",
    ".idea",
    ".vscode",
    "dist",
    "build",
    ".turbo",
    ".next",
    ".output",
    ".nuxt",
    ".cache",
}

@tool("read_directory_tool")
def read_directory_tool(
        project_num: Annotated[str, "项目的编号，如 '01', '02'"],
) -> str:
    """目录读取工具：提供项目的编号，列出该静态 Web 项目中完整的目录结构。"""
    try:
        repo_root = Path(__file__).resolve().parents[2]
        project_dir = repo_root / "source" / f"project_{project_num}"
        
        if not project_dir.exists():
            return f"错误: 项目 project_{project_num} 不存在于 source 目录中"
        
        def build_tree(path: Path, prefix: str = "", is_last: bool = True) -> list[str]:
            """递归构建目录树。"""
            lines = []
            
            if path.name in IGNORE_DIR_NAMES:
                return lines
            
            connector = "└── " if is_last else "├── "
            if path == project_dir:
                lines.append(f"{path.name}/")
            else:
                lines.append(f"{prefix}{connector}{path.name}{'/' if path.is_dir() else ''}")
            
            if path.is_dir():
                try:
                    children = sorted(path.iterdir(), key=lambda p: (not p.is_dir(), p.name))
                    children = [c for c in children if c.name not in IGNORE_DIR_NAMES]
                    
                    for i, child in enumerate(children):
                        is_last_child = (i == len(children) - 1)
                        extension = "    " if is_last else "│   "
                        new_prefix = prefix + extension if path != project_dir else ""
                        lines.extend(build_tree(child, new_prefix, is_last_child))
                except PermissionError:
                    pass
            
            return lines
        
        tree_lines = build_tree(project_dir)
        tree_output = "\n".join(tree_lines)
        
        return json.dumps({"project": f"project_{project_num}", "tree": tree_output}, ensure_ascii=False)
        
    except Exception as e:
        logger.exception("读取目录结构失败: %s", project_num)
        return f"错误: 无法读取项目 project_{project_num} 的目录结构\n原因: {str(e)}"


@tool("read_file_tool")
def read_file_tool(
    project_num: Annotated[str, "项目的编号，如 '01', '02'"],
    relative_file_path: Annotated[str, "文件相对路径"],
) -> str:
    """文件读取工具：读取项目内指定文件的全文内容。"""
    try:
        path = _resolve_inside_project(project_num, relative_file_path)
        if not path.exists() or not path.is_file():
            return f"错误: 文件不存在: {relative_file_path}"

        content = path.read_text(encoding="utf-8")
        return json.dumps({"file_path": relative_file_path, "content": content}, ensure_ascii=False)
    except Exception as e:
        logger.exception("读取文件失败: %s", relative_file_path)
        return f"错误: 无法读取文件 {relative_file_path}\n原因: {str(e)}"


@tool("write_file_tool")
def write_file_tool(
    project_num: Annotated[str, "项目的编号，如 '01', '02'"],
    file_name: Annotated[str, "要写入的文件名"],
    content: Annotated[str, "文件内容"],
) -> str:
    """文件写入工具：创建新文件或完全重写已有文件。"""
    try:
        path = _resolve_inside_project(project_num, file_name)
        parent = path.parent
        if parent:
            parent.mkdir(parents=True, exist_ok=True)

        # 自动去除可能存在的 Markdown 代码块包裹
        clean_content = content.strip()
        # 检查是否被 ``` 包裹
        if clean_content.startswith("```") and clean_content.endswith("```"):
            lines = clean_content.splitlines()
            # 至少要有两行（开始和结束标记）
            if len(lines) >= 2:
                # 去掉第一行 (```language)
                if lines[0].startswith("```"):
                    lines = lines[1:]
                # 去掉最后一行 (```)
                if lines and lines[-1].strip() == "```":
                    lines = lines[:-1]
                clean_content = "\n".join(lines)
        
        path.write_text(clean_content, encoding="utf-8")
        logger.info("成功写入文件: %s", str(path.resolve()))
        return json.dumps({"status": "success", "file_path": file_name}, ensure_ascii=False)
    except Exception as e:
        logger.exception("文件写入失败: %s", file_name)
        return f"错误: 无法写入文件 {file_name}\n原因: {str(e)}"


@tool("modify_file_tool")
def modify_file_tool(
    project_num: Annotated[str, "项目的编号，如 '01', '02'"],
    relative_file_path: Annotated[str, "文件相对路径"],
    old_content: Annotated[str, "需要被替换的原始内容片段"],
    new_content: Annotated[str, "替换后的内容片段"],
    replace_all: Annotated[bool, "是否替换所有匹配项"] = False,
) -> str:
    """文件修改工具：在指定文件中用新片段替换旧片段。"""
    try:
        path = _resolve_inside_project(project_num, relative_file_path)
        if not path.exists() or not path.is_file():
            return f"错误: 文件不存在: {relative_file_path}"
        if not old_content:
            return "错误: old_content 不能为空"

        text = path.read_text(encoding="utf-8")
        count = text.count(old_content)
        
        if count > 0:
            if replace_all:
                new_text = text.replace(old_content, new_content)
                replaced = count
            else:
                new_text = text.replace(old_content, new_content, 1)
                replaced = 1
        else:
            old_lines = old_content.splitlines()
            if not old_lines:
                return "错误: old_content 不能为空"

            lines = text.splitlines(keepends=True)
            n = len(old_lines)
            start_idx = -1
            char_pos = 0
            
            for i in range(0, len(lines) - n + 1):
                segment = lines[i : i + n]
                if all(segment[j].strip() == old_lines[j].strip() for j in range(n)):
                    full_segment = "".join(segment)
                    segment_core = full_segment.rstrip("\r\n")
                    newline_suffix = full_segment[len(segment_core):]
                    start_idx = char_pos
                    end_idx_full = char_pos + len(full_segment)
                    new_text = text[:start_idx] + new_content + newline_suffix + text[end_idx_full:]
                    replaced = 1
                    break
                char_pos += len(lines[i])

            if start_idx == -1:
                return "错误: 在目标文件中未找到指定的 old_content 片段"

        path.write_text(new_text, encoding="utf-8")
        logger.info("修改文件成功: %s, 替换次数: %d", relative_file_path, replaced)
        return json.dumps({"status": "success", "file_path": relative_file_path, "replaced": replaced}, ensure_ascii=False)
    except Exception as e:
        logger.exception("修改文件失败: %s", relative_file_path)
        return f"错误: 无法修改文件 {relative_file_path}\n原因: {str(e)}"


@tool("delete_file_tool")
def delete_file_tool(
    project_num: Annotated[str, "项目的编号，如 '01', '02'"],
    relative_file_path: Annotated[str, "文件或目录相对路径"],
    target_type: Annotated[Literal["auto", "file", "directory"], "删除类型"] = "auto",
) -> str:
    """文件删除工具：删除项目中的指定文件或目录。"""
    try:
        path = _resolve_inside_project(project_num, relative_file_path)
        if not path.exists():
            return f"错误: 目标不存在: {relative_file_path}"

        is_dir = path.is_dir()
        if target_type == "file" and is_dir:
            return "错误: 目标是目录，但 target_type 指定为 file"
        if target_type == "directory" and not is_dir:
            return "错误: 目标是文件，但 target_type 指定为 directory"

        if is_dir:
            shutil.rmtree(path)
            deleted_type = "目录"
        else:
            path.unlink()
            deleted_type = "文件"

        logger.info("删除成功: %s (%s)", relative_file_path, deleted_type)
        return json.dumps({"status": "success", "file_path": relative_file_path, "deleted_type": deleted_type}, ensure_ascii=False)
    except Exception as e:
        logger.exception("删除文件/目录失败: %s", relative_file_path)
        return f"错误: 无法删除 {relative_file_path}\n原因: {str(e)}"


Tools = [
    read_directory_tool,
    read_file_tool,
    write_file_tool,
    modify_file_tool,
    delete_file_tool,
]

__all__ = [
    "read_directory_tool",
    "read_file_tool",
    "write_file_tool",
    "modify_file_tool",
    "delete_file_tool",
    "Tools",
]

