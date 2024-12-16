import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useArticleStore from "../../../store/useArticleStore";
import ArticleThumbnail from "./ArticleThumbnail";
import SkeletonTop3 from "./SkeletonTop3";

const Top3 = () => {
  const navigate = useNavigate();
  const { topArticles, fetchTopArticles, isLoading, error } = useArticleStore();

  useEffect(() => {
    fetchTopArticles();
  }, [fetchTopArticles]);

  if (isLoading) {
    return <SkeletonTop3 />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-10 px-4 md:px-8">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom Kiri */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-neutral-1 mb-5">
            Berita dan Artikel
          </h2>
            <ArticleThumbnail
              image="user/article/artikel-dan-berita.jpg"
              title="Tips Memelihara Ikan Cupang"
              badgeText="Panduan dan Tips"
              cardSize="large"
            />
        </div>

        {/* Kolom Kanan */}
        <div>
          <h3 className="font-semibold text-lg md:text-xl text-neutral-1 mb-5 mt-1">
            Top 3 Artikel
          </h3>
          <div className="space-y-4">
            {topArticles.map((article) => (
              <div
                key={article.ID}
                className="flex items-start gap-4 cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                onClick={() => navigate(`/article-content/${article.ID}`)}
              >
                {/* Gambar Artikel */}
                <img
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                  src={article.Gambar}
                  alt={article.Judul}
                />
                {/* Konten Artikel */}
                <div>
                  <div className="text-primary-5 text-xs">
                    <h3>{article.Kategori}</h3>
                  </div>
                  <h4 className="text-sm md:text-base text-neutral-1 font-semibold">
                    {article.Judul}
                  </h4>
                  {/* Ikon Kalender dan Tanggal */}
                  <div className="flex items-center text-xs text-neutral-2 mt-2">
                    <svg width="12" height="12" fill="none" className="mr-1">
                      <path
                        d="M10 1.5H9.5V1C9.5 0.725 9.275 0.5 9 0.5C8.725 0.5 8.5 0.725 8.5 1V1.5H3.5V1C3.5 0.725 3.275 0.5 3 0.5C2.725 0.5 2.5 0.725 2.5 1V1.5H2C1.45 1.5 1 1.95 1 2.5V10.5C1 11.05 1.45 11.5 2 11.5H10C10.55 11.5 11 11.05 11 10.5V2.5C11 1.95 10.55 1.5 10 1.5ZM9.5 10.5H2.5C2.225 10.5 2 10.275 2 10V4H10V10C10 10.275 9.775 10.5 9.5 10.5Z"
                        fill="#525252"
                      />
                    </svg>
                    {new Date(article.CreatedAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top3;
