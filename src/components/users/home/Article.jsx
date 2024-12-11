import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function Article() {
  const navigate = useNavigate();
  const articles = [
    {
      title: "Sajian Udang Asam Manis Untuk Keluarga",
      category: "Resep dan Kuliner",
      image: "/user/home/bg-article.png",
    },
    {
      title: "Cara Memasak Mie Goreng Lezat",
      category: "Resep dan Kuliner",
      image: "/user/home/bg-article2.png",
    },
    {
      title: "Tips Hidup Sehat dengan Oatmeal",
      category: "Kesehatan",
      image: "/user/home/bg-article3.png",
    },
    {
      title: "Sajian Udang Asam Manis Untuk Keluarga",
      category: "Resep dan Kuliner",
      image: "/user/home/bg-article.png",
    },
    {
      title: "Cara Memasak Mie Goreng Lezat",
      category: "Resep dan Kuliner",
      image: "/user/home/bg-article2.png",
    },
    {
      title: "Tips Hidup Sehat dengan Oatmeal",
      category: "Kesehatan",
      image: "/user/home/bg-article3.png",
    },
    {
      title: "Sajian Udang Asam Manis Untuk Keluarga",
      category: "Resep dan Kuliner",
      image: "/user/home/bg-article.png",
    },
    {
      title: "Cara Memasak Mie Goreng Lezat",
      category: "Resep dan Kuliner",
      image: "/user/home/bg-article2.png",
    },
    {
      title: "Tips Hidup Sehat dengan Oatmeal",
      category: "Kesehatan",
      image: "/user/home/bg-article3.png",
    },
  ];

  return (
    <div className="px-4 sm:px-8 mt-4 sm:mt-6 mb-3">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-neutral-1 text-[28px]">
          Artikel dan Berita
        </h1>

        <div>
          <div
            className="flex gap-2.5 justify-center items-center"
            role="button"
            tabIndex={0}
            onClick={() => navigate("/article")}
          >
            <p className="text-base font-semibold text-primary-5 self-stretch my-auto">
              Lihat Semua
            </p>

            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00002 9.875L4.88002 5.995L1.00002 2.115C0.61002 1.725 0.61002 1.095 1.00002 0.704998C1.39002 0.314998 2.02002 0.314998 2.41002 0.704998L7.00002 5.295C7.39002 5.685 7.39002 6.315 7.00002 6.705L2.41002 11.295C2.02002 11.685 1.39002 11.685 1.00002 11.295C0.62002 10.905 0.61002 10.265 1.00002 9.875Z"
                fill="#0D5B82"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="relative z-10 flex gap-6 sm:px-8 py-6 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-4 scrollbar-track-neutral-200 whitespace-nowrap no-scrollbar"
        onClick={() => navigate("/article")}
      >
        {articles.map((article, idx) => (
          <ArticleCard
            key={idx}
            title={article.title}
            category={article.category}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
}
