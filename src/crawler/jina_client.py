import logging

import requests

from src.config.config import Config

logger = logging.getLogger(__name__)


class JinaClient:
    def crawl(self, url: str, return_format: str = "html") -> str:
        headers = {
            "Content-Type": "application/json",
            "X-Return-Format": return_format,
        }

        api_key = Config.get("JINA_API_KEY")
        if api_key:
            headers["Authorization"] = f"Bearer {api_key}"
        else:
            logger.warning(
                "Jina API key is not set. Provide your own key to access a higher rate limit. See https://jina.ai/reader for more information."
            )

        data = {"url": url}
        response = requests.post("https://r.jina.ai/", headers=headers, json=data)

        if response.status_code != 200:
            raise ValueError(
                f"Jina API returned status {response.status_code}: {response.text}"
            )

        if not response.text or not response.text.strip():
            raise ValueError("Jina API returned empty response")

        return response.text
