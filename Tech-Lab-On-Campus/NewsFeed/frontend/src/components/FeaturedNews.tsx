import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function FeaturedNewsCard({ article }: NewsCardProps) {
    // PART 1: Display a Featured News article

    // Using the info about the article passed in as a prop, show:
    // 1. The featured article's title
    // 2. The featured article's image
    // 3. A portion of the selected article's body, truncated so that it fits nicely in the section

    // Once completing this part, you should be able to see the Featured News Article at the top of the page.

    // Hint: Some classes included in globals.css may help with styling.

    // Utility function to truncate the article body text.
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    return (
        <div className="featured-news-card rounded-xl shadow-lg bg-white overflow-hidden">
             <div className="featured-news-img-div">
                 <img
                     src={article.image_url}
                     alt={article.title}
                     className="featured-news-img rounded-xl"
                 />
             </div>
 
             <div className="featured-news-info">
                 <h2 className="featured-story-title">{article.title}</h2>
 
                 <p className="featured-story-summary">
                     {truncateText(article.body, 250)}
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


export default FeaturedNewsCard;
