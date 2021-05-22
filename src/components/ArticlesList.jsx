import React from "react";
import { Link } from "react-router-dom";

//we use the articles prop (from articleContent)
//allows us to use the same component to display different lists of articles
//no need to import articleContent
export default function ArticlesList({ articles }) {
  return (
    <div>
      {articles.map((article, key) => (
        <Link to={`/get-each-article/${article.name}`}>
          <h3 key={key}>{article.title}</h3>
          <p>{article.content[0].substring(0, 10)}...</p>
        </Link>
      ))}
    </div>
  );
}
