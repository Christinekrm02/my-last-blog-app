import React from "react";
import articleContent from "./ArticleContent";

export default function ArticlePage({ match }) {
  const slug = match.params.slug;
  //grab article by name from articleContent
  const article = articleContent.find(article => article.name === slug);
  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </div>
  );
}
