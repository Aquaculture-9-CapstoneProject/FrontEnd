import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Navbar from "../../common/Navbar";

export default function Article() {
  const articles = [
    {
      id: 1,
      image: "user/home/bg-article.png",
      title: "Sajian Udang Asam Manis Untuk Keluarga",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 2,
      image: "user/home/bg-article.png",
      title: "Cara Memasak Mie Goreng Lezat",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 3,
      image: "user/home/bg-article.png",
      title: "Tips Hidup Sehat dengan Oatmeal",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 4,
      image: "user/home/bg-article.png",
      title: "Sajian Udang Asam Manis Untuk Keluarga",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 5,
      image: "user/home/bg-article.png",
      title: "Cara Memasak Mie Goreng Lezat",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 6,
      image: "user/home/bg-article.png",
      title: "Tips Hidup Sehat dengan Oatmeal",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 7,
      image: "user/home/bg-article.png",
      title: "Sajian Udang Asam Manis Untuk Keluarga",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 8,
      image: "user/home/bg-article.png",
      title: "Cara Memasak Mie Goreng Lezat",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 9,
      image: "user/home/bg-article.png",
      title: "Tips Hidup Sehat dengan Oatmeal",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 10,
      image: "user/home/bg-article.png",
      title: "Sajian Udang Asam Manis Untuk Keluarga",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 11,
      image: "user/home/bg-article.png",
      title: "Cara Memasak Mie Goreng Lezat",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
    {
      id: 12,
      image: "user/home/bg-article.png",
      title: "Tips Hidup Sehat dengan Oatmeal",
      date: "27 Februari 2024",
      badgeText: "Panduan dan Tips",
    },
  ];

  const articlesPerPage = 9; // Jumlah artikel per halaman
  const [currentPage, setCurrentPage] = useState(1); // State untuk halaman aktif

  // Hitung jumlah total halaman
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Hitung artikel yang ditampilkan berdasarkan halaman aktif
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  // Fungsi untuk navigasi ke halaman sebelumnya
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Fungsi untuk navigasi ke halaman berikutnya
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 bg-neutral-5">
        <section className="py-10 px-4 md:px-8 min-h-screen flex flex-col justify-between">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-neutral-1">
              Artikel Terbaru
            </h2>
          </div>

          {/* Grid Artikel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
            {currentArticles.map((article) => (
              <ArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                date={article.date}
                badgeText={article.badgeText}
              />
            ))}
          </div>

          {/* Pagination */}
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
                {Array.from({ length: totalPages }, (_, index) => (
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
                      currentPage === totalPages
                        ? "bg-neutral-3 text-neutral-2 cursor-not-allowed"
                        : "border-neutral-5 bg-neutral-4 text-neutral-1 hover:text-neutral-5 hover:bg-secondary-5"
                    }`}
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    aria-label="Next Page"
                  >
                    &gt;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
}

