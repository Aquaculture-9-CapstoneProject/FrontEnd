import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarHome from "../home/NavbarHome";
import ArticleCard from "./ArticleCard";

export default function FilteredArticles() {
  const { topic } = useParams(); // Ambil topik dari parameter URL

  // Data artikel berdasarkan topik
  const articlesData = {
    "panduan-dan-tips": [
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
    ],
    "resep-dan-kuliner": [
      {
        id: 4,
        image: "user/home/bg-article.png",
        title: "Resep Ayam Panggang Madu",
        date: "27 Februari 2024",
        badgeText: "Resep dan Kuliner",
      },
      {
        id: 5,
        image: "user/home/bg-article.png",
        title: "Tips Membuat Kue Coklat",
        date: "27 Februari 2024",
        badgeText: "Resep dan Kuliner",
      },
      {
        id: 6,
        image: "user/home/bg-article.png",
        title: "Kreasi Sarapan Sehat untuk Anak",
        date: "27 Februari 2024",
        badgeText: "Resep dan Kuliner",
      },
    ],
    kesehatan: [
      {
        id: 7,
        image: "user/home/bg-article.png",
        title: "Pola Hidup Sehat di Masa Pandemi",
        date: "27 Februari 2024",
        badgeText: "Kesehatan",
      },
      {
        id: 8,
        image: "user/home/bg-article.png",
        title: "Manfaat Air Putih untuk Kesehatan",
        date: "27 Februari 2024",
        badgeText: "Kesehatan",
      },
      {
        id: 9,
        image: "user/home/bg-article.png",
        title: "Tips Menjaga Berat Badan Ideal",
        date: "27 Februari 2024",
        badgeText: "Kesehatan",
      },
    ],
  };

  const articles = articlesData[topic] || []; // Ambil artikel berdasarkan topik

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

  // Ubah teks topik menjadi lebih rapi (capitalize)
  const formatTopicText = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div>
      <NavbarHome />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 bg-neutral-5">
        <section className="py-10 px-4 md:px-8 min-h-screen flex flex-col justify-between">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-neutral-1">
              {formatTopicText(topic)}
            </h2>
          </div>

          {/* Grid Artikel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
            {currentArticles.length > 0 ? (
              currentArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  image={article.image}
                  title={article.title}
                  date={article.date}
                  badgeText={article.badgeText}
                />
              ))
            ) : (
              <p className="text-center text-neutral-1">
                Tidak ada artikel untuk topik ini.
              </p>
            )}
          </div>

          {/* Pagination */}
          {currentArticles.length > 0 && (
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
          )}
        </section>
      </div>
    </div>
  );
}
