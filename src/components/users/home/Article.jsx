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
      <h1 className="font-semibold text-neutral-1 text-[28px]">
        Artikel dan Berita
      </h1>
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
