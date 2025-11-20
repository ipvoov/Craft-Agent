import logging
import re
from typing import Any, Dict, List, Set

logger = logging.getLogger(__name__)


class SearchResultPostProcessor:
    base64_pattern = r"data:image/[^;]+;base64,[a-zA-Z0-9+/=]+"

    def __init__(self, min_score_threshold: float = 0.0, max_content_length_per_page: int = 4000) -> None:
        self.min_score_threshold = min_score_threshold
        self.max_content_length_per_page = max_content_length_per_page

    def process_results(self, results: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        if not results:
            return []

        cleaned_results: List[Dict[str, Any]] = []
        seen_urls: Set[str] = set()

        for result in results:
            cleaned_result = self._remove_duplicates(result, seen_urls)
            if not cleaned_result:
                continue

            if (
                cleaned_result.get("type") == "page"
                and self.min_score_threshold
                and self.min_score_threshold > 0
                and cleaned_result.get("score", 0) < self.min_score_threshold
            ):
                continue

            cleaned_result = self._remove_base64_images(cleaned_result)
            if not cleaned_result:
                continue

            if self.max_content_length_per_page and self.max_content_length_per_page > 0:
                cleaned_result = self._truncate_long_content(cleaned_result)

            if cleaned_result:
                cleaned_results.append(cleaned_result)

        sorted_results = sorted(
            cleaned_results, key=lambda x: x.get("score", 0), reverse=True
        )

        logger.info(
            "Search result post-processing: %d -> %d",
            len(results),
            len(sorted_results),
        )

        return sorted_results

    def _remove_base64_images(self, result: Dict[str, Any]) -> Dict[str, Any]:
        result_type = result.get("type")
        if result_type == "page":
            return self._process_page(result)
        if result_type == "image":
            return self._process_image(result)
        return result.copy()

    def _process_page(self, result: Dict[str, Any]) -> Dict[str, Any]:
        cleaned_result = result.copy()

        if "content" in cleaned_result and isinstance(cleaned_result["content"], str):
            original_content = cleaned_result["content"]
            cleaned_content = re.sub(self.base64_pattern, " ", original_content)
            cleaned_result["content"] = cleaned_content
            if len(cleaned_content) < len(original_content) * 0.8:
                logger.debug(
                    "Removed base64 images from search content: %s",
                    cleaned_result.get("url", "unknown"),
                )

        if "raw_content" in cleaned_result and isinstance(cleaned_result["raw_content"], str):
            original_raw_content = cleaned_result["raw_content"]
            cleaned_raw_content = re.sub(self.base64_pattern, " ", original_raw_content)
            cleaned_result["raw_content"] = cleaned_raw_content
            if len(cleaned_raw_content) < len(original_raw_content) * 0.8:
                logger.debug(
                    "Removed base64 images from search raw content: %s",
                    cleaned_result.get("url", "unknown"),
                )

        return cleaned_result

    def _process_image(self, result: Dict[str, Any]) -> Dict[str, Any]:
        cleaned_result = result.copy()

        if "image_url" in cleaned_result:
            image_url_val = cleaned_result["image_url"]
            if isinstance(image_url_val, str) and "data:image" in image_url_val:
                cleaned_image_url = re.sub(self.base64_pattern, " ", image_url_val)
                if not cleaned_image_url or not cleaned_image_url.startswith("http"):
                    logger.debug(
                        "Removed base64 data from image_url and the cleaned_image_url is empty or not start with http, origin image_url: %s",
                        image_url_val,
                    )
                    return {}
                cleaned_result["image_url"] = cleaned_image_url
                logger.debug(
                    "Removed base64 data from image_url: %s",
                    image_url_val,
                )

        if "image_description" in cleaned_result and isinstance(
            cleaned_result["image_description"], str
        ):
            if (
                self.max_content_length_per_page
                and len(cleaned_result["image_description"]) > self.max_content_length_per_page
            ):
                cleaned_result["image_description"] = (
                    cleaned_result["image_description"][: self.max_content_length_per_page]
                    + "..."
                )
                logger.info(
                    "Truncated long image description from search result: %s",
                    cleaned_result.get("image_url", "unknown"),
                )

        return cleaned_result

    def _truncate_long_content(self, result: Dict[str, Any]) -> Dict[str, Any]:
        truncated_result = result.copy()

        if "content" in truncated_result and isinstance(truncated_result["content"], str):
            content = truncated_result["content"]
            if len(content) > self.max_content_length_per_page:
                truncated_result["content"] = (
                    content[: self.max_content_length_per_page] + "..."
                )
                logger.info(
                    "Truncated long content from search result: %s",
                    truncated_result.get("url", "unknown"),
                )

        if "raw_content" in truncated_result and isinstance(
            truncated_result["raw_content"], str
        ):
            raw_content = truncated_result["raw_content"]
            if len(raw_content) > self.max_content_length_per_page * 2:
                truncated_result["raw_content"] = (
                    raw_content[: self.max_content_length_per_page * 2] + "..."
                )
                logger.info(
                    "Truncated long raw content from search result: %s",
                    truncated_result.get("url", "unknown"),
                )

        return truncated_result

    def _remove_duplicates(
        self, result: Dict[str, Any], seen_urls: Set[str]
    ) -> Dict[str, Any]:
        url = result.get("url")
        if not url:
            image_url_val = result.get("image_url", "")
            if isinstance(image_url_val, dict):
                url = image_url_val.get("url", "")
            else:
                url = image_url_val

        if url and url not in seen_urls:
            seen_urls.add(url)
            return result.copy()

        if not url:
            return result.copy()

        return {}
