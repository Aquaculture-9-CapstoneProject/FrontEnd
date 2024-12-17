import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useArticleStore from "../../../store/useArticleStore";
import ArticleCard from "./ArticleCard";
import SkeletonArticleCard from "./SkeletonArticleCard";
import Navbar from "../../common/Navbar";

export default function FilteredArticles() {
  const { topic } = useParams(); // Dapatkan parameter topik dari URL
  const { fetchFilteredArticles, articles, pagination, isLoading } = useArticleStore();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const category = mapTopicToCategory(topic);
    fetchFilteredArticles(category, currentPage); // Kirim kategori yang sudah dimapping
  }, [topic, currentPage, fetchFilteredArticles]);

  const mapTopicToCategory = (topic) => {
    const topicMap = {
      "panduan-dan-tips": "panduan+dan+tips",
      "resep-dan-kuliner": "resep+dan+kuliner",
      "kesehatan": "kesehatan",
    };
    return topicMap[topic] || topic;
  };

  const formatTopicText = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pagination.TotalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 bg-neutral-5">
        <section className="py-10 px-4 md:px-8 min-h-screen flex flex-col justify-between">
          <div className="breadcrumbs text-sm text-neutral-2 mb-8">
            <ul>
              <li>
                <a onClick={() => navigate("/home")}>Beranda</a>
              </li>
              <li>
                <a onClick={() => navigate("/article")}>Artikel dan Berita</a>
              </li>
              <li>
                <span className="font-semibold text-primary-5">
                  {formatTopicText(topic)}
                </span>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-neutral-1">
              {formatTopicText(topic)}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
            {isLoading
              ?
                Array.from({ length: pagination?.PageSize || 6 }).map((_, index) => (
                  <SkeletonArticleCard key={index} />
                ))
              : articles.length > 0 ? (
                articles.map((article) => (
                  <ArticleCard
                    key={article.ID}
                    id={article.ID}
                    image={article.Gambar}
                    title={article.Judul}
                    date={new Date(article.CreatedAt).toLocaleDateString()}
                    badgeText={article.Kategori}
                  />
                ))
              ) : (
                <p className="text-center text-neutral-1">
                  Tidak ada artikel untuk topik ini.
                </p>
              )}
          </div>
          {/* Pagination */}
          {pagination && (
            <div className="flex justify-center items-center mt-10">
              <nav aria-label="Pagination">
                <ul className="flex gap-1">
                  {/* Tombol Previous */}
                  <li>
                    <button
                      className={`w-[29px] h-[34px] flex justify-center items-center rounded-md border ${
                        currentPage === 1
                          ? "bg-neutral-3 text-neutral-2 cursor-not-allowed"
                          : "border-neutral-5 bg-neutral-4 text-neutral-1 hover:text-neutral-5 hover:bg-secondary-5"
                      }`}
                      onClick={handlePrevious}
                      disabled={currentPage === 1}
                      aria-label="Previous Page"
                    >
                      &lt;
                    </button>
                  </li>

                  {/* Angka Pagination */}
                  {Array.from({ length: pagination.TotalPages }, (_, index) => (
                    <li key={index}>
                      <button
                        className={`w-[29px] h-[34px] flex justify-center items-center rounded-md border ${
                          currentPage === index + 1
                            ? "border-neutral-5 bg-secondary-5 text-neutral-5"
                            : "border-neutral-5 bg-neutral-4 text-neutral-1 hover:text-neutral-5 hover:bg-secondary-5"
                        }`}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}

                  {/* Tombol Next */}
                  <li>
                    <button
                      className={`w-[29px] h-[34px] flex justify-center items-center rounded-md border ${
                        currentPage === pagination.TotalPages
                          ? "bg-neutral-3 text-neutral-2 cursor-not-allowed"
                          : "border-neutral-5 bg-neutral-4 text-neutral-1 hover:text-neutral-5 hover:bg-secondary-5"
                      }`}
                      onClick={handleNext}
                      disabled={currentPage === pagination.TotalPages}
                      aria-label="Next Page"
                    >
                      &gt;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
