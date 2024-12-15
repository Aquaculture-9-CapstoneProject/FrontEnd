import React, { useState } from "react";
import ArticleHeader from "./ArticleHeader";
import FilterSearch from "./FilterSearch";
import Pagination from "./Pagination"
import ArticleTable from "./ArticleTable";
import AddArticle from "./AddArticle";

export default function Article() {
  const articles = Array.from({ length: 30 }, (_, index) => ({
    id: `P${(index + 1).toString().padStart(6, "0")}`,
    image: "./admin/article/ikan-segar.png",
    title: "Peluang dan Tantangan Akuakultur di Era Modern",
    category: "Panduan dan Tips",
    date: "24 November 2024, 19:00",
  }));

  const articlesPerPage = 14;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const [isAddArticleModalOpen, setIsAddArticleModalOpen] = useState(false);

  return (
    <div className="bg-[#E4EDF1] h-full">
      <div className="mb-28">
        <ArticleHeader />
      </div>      
      <div className="m-5 sm:m-3 lg:m-7 bg-neutral-5 p-6 rounded-lg shadow-md">
      <FilterSearch onAddArticleClick={() => setIsAddArticleModalOpen(true)} />
      <AddArticle
        isOpen={isAddArticleModalOpen}
        onClose={() => setIsAddArticleModalOpen(false)}
      />
        <ArticleTable articles={currentArticles} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        setPage={setCurrentPage}
      />
    </div>
  );
}
