import React from "react";
import ArticlesList from "../components/ArticlesList.jsx";
import articleContent from "./ArticleContent";
//add error404 page here as well, 
// in case user searches for page using
///get-each-article route
import Error404 from "./Error404.jsx";

export default function ArticlePage({ match }) {
  const slug = match.params.slug;
  //grab article by name from articleContent
  const article = articleContent.find(article => article.name === slug);
  //Add 404 error page
  if (!article) return <Error404 />;

  //access the other articles
  const otherTutorials = articleContent.filter(
    article => article.name !== slug
  );
  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <ArticlesList articles={otherTutorials} />
    </div>
  );
}
