"""Module for retrieving newsfeed information."""

from dataclasses import dataclass
from datetime import datetime
from app.utils.redis import REDIS_CLIENT

@dataclass
class Article:
    """Dataclass for an article."""

    author: str
    title: str
    body: str
    publish_date: datetime
    image_url: str
    url: str

def format_article(data: dict) -> Article:
    """Format raw article data from JSON into an Article object."""
    return Article(
        author=data.get("author", "Unknown"),
        title=data.get("title", ""),
        body=data.get("text", ""),
        publish_date=datetime.fromisoformat(data.get("published").replace("Z", "+00:00")),
        image_url=data.get("thread", {}).get("main_image", ""),
        url=data.get("url", "")
    )

def get_all_news() -> list[Article]:
    """Get all news articles from the datastore."""
    # 1. Use Redis client to fetch all articles
    # 2. Format the data into articles
    # 3. Return a list of the articles formatted 
    news = REDIS_CLIENT.get_entry("all_articles")
    return [format_article(article) for article in news]


def get_featured_news() -> Article | None:
    """Get the featured news article from the datastore."""
    # 1. Get all the articles
    # 2. Return as a list of articles sorted by most recent date
    all_articles = get_all_news()
    featured = sorted(all_articles, key=lambda article: article.publish_date, reverse=True)    
    return featured[0]
