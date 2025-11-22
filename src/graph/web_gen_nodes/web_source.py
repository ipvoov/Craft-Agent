import json
import logging
import uuid
from langchain_core.messages import SystemMessage, HumanMessage, ToolMessage, AIMessageChunk
from langchain_core.runnables import RunnableConfig

from src.graph.State import WebGenState
from src.config import AGENT_LLM_MAP
from src.llms.llm import get_llm_by_type
from src.prompts.template import apply_prompt_template_not_with_messages
from src.tools.image import batch_download_images_tool
from src.utils.json_utils import sanitize_tool_response

logger = logging.getLogger(__name__)


async def web_source_node(
        state: WebGenState,
        config: RunnableConfig
) -> WebGenState:
    """资源规划节点：LLM 输出结构化图片列表 + Python 侧批量下载。
    
    简化流程：
    - 不依赖计划和步骤
    - 直接基于 outline.md 生成图片规划
    - 批量下载图片并搜索链接
    """
    logger.info("web_source 节点：开始执行资源规划")

    node_name = "web_source"
    locale = state.get("locale", "zh-CN")
    messages = state.get("messages", []) or []
    project_number = state.get("number") or ""
    
    # 获取系统提示词
    system_prompt = apply_prompt_template_not_with_messages(
        node_name, state, locale=locale
    )
    
    # 获取 LLM 模型
    llm = get_llm_by_type(AGENT_LLM_MAP[node_name])
    
    # 构造简洁的任务消息
    task_message = HumanMessage(
        content=(
            "请根据系统提示词和历史消息中的项目大纲，"
            "生成完整的资源规划文档，并输出 JSON 格式的图片下载列表。"
        )
    )
    
    # 组合消息：系统提示词 + 历史消息 + 当前任务
    llm_messages = [SystemMessage(content=system_prompt)] + list(messages) + [task_message]
    
    try:
        # 调用 LLM 生成资源规划文档
        logger.info("web_source 节点：调用 LLM 生成资源规划")
        result = await llm.ainvoke(llm_messages, config=config)
        raw_content = result.content if hasattr(result, "content") else str(result)
        
        try:
            resource_text = sanitize_tool_response(str(raw_content))
        except Exception:
            resource_text = str(raw_content)
        
        # 尝试从输出中提取 JSON 格式的图片列表
        images_to_download = []
        try:
            # 尝试从文本中提取 JSON
            import re
            json_match = re.search(r'```json\s*([\s\S]*?)```', resource_text)
            if json_match:
                json_str = json_match.group(1)
                parsed_data = json.loads(json_str)
                images_to_download = parsed_data.get("images", [])
                logger.info(f"提取到 {len(images_to_download)} 张图片信息")
        except Exception as e:
            logger.warning(f"无法从输出中提取图片列表: {e}")
        
        # 提取 link_keyword
        link_keyword = ""
        try:
            if json_match:
                json_str = json_match.group(1)
                parsed_data = json.loads(json_str)
                link_keyword = parsed_data.get("link_keyword", "")
                logger.info(f"提取到 link_keyword: {link_keyword}")
        except Exception as e:
            logger.warning(f"无法从输出中提取 link_keyword: {e}")
        
        # 如果有图片需要下载，调用批量下载工具
        if images_to_download and project_number:
            logger.info(f"web_source 节点：开始批量下载 {len(images_to_download)} 张图片")
            download_result_str = batch_download_images_tool.invoke({
                "project_num": project_number,
                "images": images_to_download,
                "link_keyword": link_keyword or "product images",
            })
            
            # 解析工具返回的 JSON 字符串
            try:
                download_results = json.loads(download_result_str)
            except Exception:
                download_results = {"error": download_result_str}
            
            # 将下载结果封装为 ToolMessage
            tool_call_id = f"call_{uuid.uuid4().hex[:8]}"
            
            fake_ai_message = AIMessageChunk(
                content="",
                tool_calls=[{
                    "name": "batch_download_images_tool",
                    "args": {
                        "project_num": project_number,
                        "images": f"<<已提取的图片列表（见上一条消息），共 {len(images_to_download)} 张>>",
                        "link_keyword": link_keyword or "product images",
                    },
                    "id": tool_call_id
                }]
            )
            
            tool_message = ToolMessage(
                content=json.dumps(download_results, ensure_ascii=False, indent=2),
                tool_call_id=tool_call_id,
                name="batch_download_images_tool",
                status="success" if download_results.get("failed", []) == [] else "partial_success",
                artifact={
                    "success_count": len(download_results.get("success", [])),
                    "failed_count": len(download_results.get("failed", [])),
                    "total": download_results.get("total", 0),
                    "image_links_count": len(download_results.get("image_links", [])),
                    "project_num": project_number,
                },
            )
            updated_messages = list(messages) + [result, fake_ai_message, tool_message]
        else:
            logger.info("web_source 节点：未提取到图片信息，跳过下载")
            updated_messages = list(messages) + [result]
        
    except Exception as error:  # pragma: no cover
        logger.exception("web_source 节点执行出错: %s", error)
        error_message = f"[错误] web_source 节点在生成资源规划时发生异常: {error}"
        
        error_tool_message = ToolMessage(
            content=error_message,
            tool_call_id=f"call_{uuid.uuid4().hex[:8]}",
            name="batch_download_images_tool",
            status="error",
        )
        
        return {
            "messages": messages + [error_tool_message],
        }
    
    return {
        "messages": updated_messages,
    }