import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../common/Navbar";

export default function ArticleContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  // Data dummy artikel (nanti bisa diganti dengan data dari backend)
  const articleData = {
    title: "Sajian Udang Asam Manis Untuk Keluarga",
    date: "27 Februari 2024",
    time: "08.03 WIB",
    readTime: "5 menit",
    image: "user/home/bg-article.png",
    topic: "Resep dan Kuliner",
    content: `
      Lorem ipsum dolor sit amet consectetur. Eu fringilla ullamcorper massa at malesuada in nibh risus tempor. Congue nunc dictumst pharetra at risus pharetra varius massa risus. Phasellus enim fames quis orci feugiat ut pharetra nam. Pharetra feugiat id odio sagittis.

      Lorem ipsum dolor sit amet consectetur. Phasellus sit cursus viverra ullamcorper tempor id enim metus. Nulla molestie cursus mauris facilisi rutrum id eleifend. Vulputate amet metus sit elementum. Augue et viverra hendrerit accumsan morbi tincidunt. In ut erat orci massa tincidunt est. Amet lorem magna mattis sollicitudin venenatis. Vestibulum turpis id eget eu. Quam posuere enim metus volutpat. Era libero tristique in acenean sed eu.

      Lorem ipsum dolor sit amet consectetur. 
      1. Lorem ipsum dolor sit acenean fermentum nibh. Sed amet ac diam nibh sed. Et sagittis aliquam consectetur volutpat. 
      2. Sed magna orci semper bibendum fames malesuada habitasse tellus. 
      3. Et pretium bibendum nunc dapibus risus tempor.
      4. Ut eget integer sit sit interdum sapien eu aliquam aliquet.
      5. Ac purus sagittis interdum pellentesque.

      Lorem ipsum dolor sit amet consectetur. At neque feugiat elit ante blandit non a egestas. In massa sit risus nullam orci augue scelerisque. 
    `,
  };

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
              <li><a onClick={() => navigate("/article-topic")}>{articleData.topic}</a></li>
              <li><span className="font-semibold text-primary-5">{articleData.title}</span></li>
            </ul>
          </div>

          {/* Judul dan Metadata */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-1 mt-8">
              {articleData.title}
            </h1>
            <div className="text-base text-neutral-2 mt-2">
              <span>{articleData.date}</span> &bull;{" "}
              <span>{articleData.time}</span> &bull;{" "}
              <span>Dibaca {articleData.readTime}</span>
            </div>
          </header>

          {/* Gambar Artikel */}
          <figure className="mb-8">
            <img
              src={articleData.image}
              alt={articleData.title}
              className="w-full h-auto rounded-lg"
            />
          </figure>

          {/* Konten Artikel */}
          <article className="prose max-w-none text-base text-neutral-1 text-justify mb-16">
            {articleData.content.split("\n").map((paragraph, index) => (
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
