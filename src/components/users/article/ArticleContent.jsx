import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";
import Navbar from "../../common/Navbar";
import useArticleStore from "../../../store/useArticleStore";
import SkeletonArticleContent from "./SkeletonArticleContent";

export default function ArticleContent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchArticleById, selectedArticle, isLoading, error } = useArticleStore();
  
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    fetchArticleById(id);
    window.scrollTo(0, 0);

    const randomTime = Math.floor(Math.random() * 20) + 1;
    setReadingTime(randomTime);
  }, [id, fetchArticleById]);

  if (isLoading) {
    return <SkeletonArticleContent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedArticle) {
    return <div>Artikel tidak ditemukan</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 md:px-80 bg-neutral-5">
        <div className="py-8">
          {/* Breadcrumb */}
          <div className="breadcrumbs text-sm text-neutral-2">
            <ul>
              <li><a onClick={() => navigate("/home")}>Beranda</a></li>
              <li><a onClick={() => navigate("/article")}>Artikel dan Berita</a></li>
              <li>
                <a onClick={() => navigate(`/article-topic/${selectedArticle.Kategori.toLowerCase().replace(/\s+/g, "-")}`)}>
                  {selectedArticle.Kategori}
                </a>
              </li>
              <li><span className="font-semibold text-primary-5">{selectedArticle.Judul}</span></li>
            </ul>
          </div>

          {/* Judul dan Metadata */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-1 mt-8">
              {selectedArticle.Judul}
            </h1>
            <div className="text-base text-neutral-2 mt-2">
              <span>{formatDate(selectedArticle.CreatedAt)}</span> &bull;{" "}
              <span>Dibaca {readingTime} menit</span>
            </div>
          </header>

          {/* Gambar Artikel */}
          <figure className="mb-8">
            <img
              src={selectedArticle.Gambar}
              alt={selectedArticle.Judul}
              className="w-full h-auto rounded-lg"
            />
          </figure>

          {/* Konten Artikel */}
          <article className="prose max-w-none text-base text-neutral-1 text-justify mb-16">
            {selectedArticle.Deskripsi.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
