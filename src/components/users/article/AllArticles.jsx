import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useArticleStore from "../../../store/useArticleStore";
import ArticleCard from "./ArticleCard";
import SkeletonArticleCard from "./SkeletonArticleCard";
import Navbar from "../../common/Navbar";

export default function AllArticles() {
  const { latestArticles, pagination, fetchAllArticles, isLoading } = useArticleStore();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllArticles(currentPage);
  }, [currentPage, fetchAllArticles]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 bg-neutral-5">
        <section className="py-10 px-4 md:px-8 min-h-screen flex flex-col justify-between">
          {/* Breadcrumb */}
          <div className="breadcrumbs text-sm text-neutral-2 mb-8">
            <ul>
              <li><a onClick={() => navigate("/home")}>Beranda</a></li>
              <li><a onClick={() => navigate("/article")}>Artikel dan Berita</a></li>
              <li><span className="font-semibold text-primary-5">Artikel Terbaru</span></li>
            </ul>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-neutral-1">
              Artikel Terbaru
            </h2>
          </div>

          {/* Grid Artikel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
            {isLoading
              ? // Tampilkan skeleton sesuai jumlah artikel per halaman
                Array.from({ length: pagination?.PageSize || 6 }).map((_, index) => (
                  <SkeletonArticleCard key={index} />
                ))
              : latestArticles.map((article) => (
                  <ArticleCard
                    key={article.ID}
                    id={article.ID}
                    image={article.Gambar}
                    title={article.Judul}
                    date={new Date(article.CreatedAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    badgeText={article.Kategori}
                  />
                ))}
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
                      onClick={() => handlePageChange(currentPage - 1)}
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
                        onClick={() => handlePageChange(index + 1)}
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
                      onClick={() => handlePageChange(currentPage + 1)}
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
