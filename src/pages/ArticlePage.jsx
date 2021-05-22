import React from "react";

export default function ArticlePage({ match }) {
  const slug = match.params.slug;
  return (
    <>
      <h1>Article 1: {slug}</h1>
    </>
  );
}
