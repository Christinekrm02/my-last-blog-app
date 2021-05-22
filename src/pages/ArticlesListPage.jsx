import React from "react";
import ArticlesList from "../components/ArticlesList.jsx";
import articleContent from "./ArticleContent";

export default function ArticleListPage() {
  return (
    <>
      <h1>All articles</h1>
      <ArticlesList articles={articleContent} />
    </>
  );
}
