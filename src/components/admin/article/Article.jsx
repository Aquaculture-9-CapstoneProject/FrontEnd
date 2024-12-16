import { useState, useEffect } from "react";
import ArticleHeader from "./ArticleHeader";
import FilterSearch from "./FilterSearch";
import Pagination from "./Pagination";
import ArticleTable from "./ArticleTable";
import AddArticle from "./AddArticle";
import useAdminArticleStore from "../../../store/useAdminArticleStore";

export default function Article() {
  const {
    articles,
    currentPage,
    totalPages,
    fetchArticles,
    setCurrentPage,
    isLoading,
    error,
  } = useAdminArticleStore();

  const [isAddArticleModalOpen, setIsAddArticleModalOpen] = useState(false);

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage, fetchArticles]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      fetchArticles(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      fetchArticles(newPage);
    }
  };

  return (
    <div className="bg-[#E4EDF1] h-full">
      <div className="mb-28">
        <ArticleHeader />
      </div>
      <div className="m-5 sm:m-3 lg:m-7 bg-neutral-5 p-6 rounded-lg shadow-md">
        <FilterSearch
          onAddArticleClick={() => setIsAddArticleModalOpen(true)}
        />
        <AddArticle
          isOpen={isAddArticleModalOpen}
          onClose={() => setIsAddArticleModalOpen(false)}
        />
        {isLoading ? (
          <div className="flex justify-center items-center mt-4">
            <span className="loading loading-spinner loading-lg text-primary-4"></span>
          </div>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ArticleTable articles={articles} />
        )}
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
