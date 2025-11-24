import logging

from .article import Article
from .jina_client import JinaClient
from .readability_extractor import ReadabilityExtractor

logger = logging.getLogger(__name__)


class Crawler:
    def crawl(self, url: str) -> Article:
        """Crawl a URL and return an Article with readable content.

        This follows the same design as the original reference implementation:
        - Use Jina API to fetch raw HTML
        - Use Readability to extract main article content
        - Convert to markdown when needed via Article.to_markdown()
        """
        try:
            jina_client = JinaClient()
            html = jina_client.crawl(url, return_format="html")
        except Exception as e:
            logger.error(f"Failed to fetch URL {url} from Jina: {repr(e)}")
            raise

        try:
            extractor = ReadabilityExtractor()
            article = extractor.extract_article(html)
        except Exception as e:
            logger.error(f"Failed to extract article from {url}: {repr(e)}")
            raise

        article.url = url
        return article
