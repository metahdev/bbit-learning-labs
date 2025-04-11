import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function NewsCard({ article }: NewsCardProps) {
    // PART 2: Create a reusable news card to use with general stories

    // Similar to Part 1, create a component that displays:
    // 1. The article's image
    // 2. The article's title,
    // 3. A truncated version of the article's body

    // This component should be reusable to populate all stories on the news page.

    // Once completing this part, you should be able to see a few test articles on
    // the right side of the screen.

    // Hint: Some classes in `globals.css` could help with styling

    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
      };
    
      return (
        <div className="news-card rounded-xl shadow-lg bg-white overflow-hidden">
          <div className="news-img-div ">
            <img 
              src={article.image_url} 
              alt={article.title} 
              className="news-img rounded-xl" 
            />
          </div>
          <div className="news-info">
            <h3 className="story-title">{truncateText(article.title, 20)}</h3>
            <p className="story-summary">
              {truncateText(article.body, 40)}
            </p>

            <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="origin-link mt-4 text-blue-600 font-medium hover:underline"
                >
                    Read more →
                </Link>
                
          </div>
        </div>
      );
}

export default NewsCard;
