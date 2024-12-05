import React from "react";
import ArticleCard from "./ArticleCard";

const LatestArticles = () => {
  const latestArticles = [
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
  ];

  return (
    <section className="py-10 px-4 md:px-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-neutral-1">Artikel Terbaru</h2>
        <div className="flex items-center gap-2 text-base font-semibold text-primary-5 hover:underline">
          Lihat Semua
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00002 9.87501L4.88002 5.99501L1.00002 2.11501C0.61002 1.72501 0.61002 1.09501 1.00002 0.705006C1.39002 0.315006 2.02002 0.315006 2.41002 0.705006L7.00002 5.29501C7.39002 5.68501 7.39002 6.31501 7.00002 6.70501L2.41002 11.295C2.02002 11.685 1.39002 11.685 1.00002 11.295C0.62002 10.905 0.61002 10.265 1.00002 9.87501Z"
              fill="#0D5B82"
            />
          </svg>
        </div>
      </div>

      {/* Grid Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestArticles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.image}
            title={article.title}
            date={article.date}
            badgeText={article.badgeText}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
