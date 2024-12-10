import React from "react";
import ArticleTableHeader from "./ArticleTableHeader";
import ArticleTableBody from "./ArticleTableBody";

export default function ArticleTable({ articles }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <ArticleTableHeader />
        </thead>
        <tbody>
          <ArticleTableBody articles={articles} />
        </tbody>
      </table>
    </div>
  );
}
