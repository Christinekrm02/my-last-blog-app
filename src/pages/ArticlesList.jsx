import React from "react";
import { Link } from "react-router-dom";
import articleContent from "./ArticleContent";

export default function ArticleList() {
  return (
    <>
      <h1>All articles </h1>
      {articleContent.map((article, key) => (
        <Link key={key} to={`/get-each-article/${article.name}`}>
          <h3>{article.title}</h3>
        </Link>
      ))}
    </>
  );
}
