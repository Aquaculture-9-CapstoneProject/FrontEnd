import React from "react";

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
        <a href="#" className="flex items-center gap-2 text-base font-semibold text-primary-5 hover:underline">
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
        </a>
      </div>

      {/* Grid Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestArticles.map((article) => (
          <div key={article.id}>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[200px] sm:h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 text-base font-semibold text-neutral-1">{article.title}</h3>
            <div className="flex items-center text-xs text-neutral-2 mt-2">
              <svg
                width="12"
                height="12"
                fill="none"
                className="mr-1"
              >
                <path
                  d="M10 1.5H9.5V1C9.5 0.725 9.275 0.5 9 0.5C8.725 0.5 8.5 0.725 8.5 1V1.5H3.5V1C3.5 0.725 3.275 0.5 3 0.5C2.725 0.5 2.5 0.725 2.5 1V1.5H2C1.45 1.5 1 1.95 1 2.5V10.5C1 11.05 1.45 11.5 2 11.5H10C10.55 11.5 11 11.05 11 10.5V2.5C11 1.95 10.55 1.5 10 1.5ZM9.5 10.5H2.5C2.225 10.5 2 10.275 2 10V4H10V10C10 10.275 9.775 10.5 9.5 10.5Z"
                  fill="#525252"
                />
              </svg>
              {article.date}
              <span className="mx-2">•</span>
              <span>{article.badgeText}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
