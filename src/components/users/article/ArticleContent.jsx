import Navbar from "../../common/Navbar";

export default function ArticleContent() {
  // Data dummy artikel (nanti bisa diganti dengan data dari backend)
  const articleData = {
    title: "Sajian Udang Asam Manis Untuk Keluarga",
    date: "27 Februari 2024",
    time: "08.03 WIB",
    readTime: "5 menit",
    image: "user/home/bg-article.png",
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

  const RightArrowSVG = () => (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.35354 6.35378L1.35354 11.3538C1.30708 11.4002 1.25193 11.4371 1.19124 11.4622C1.13054 11.4874 1.06549 11.5003 0.99979 11.5003C0.934092 11.5003 0.869038 11.4874 0.808342 11.4622C0.747645 11.4371 0.692495 11.4002 0.646039 11.3538C0.599584 11.3073 0.562734 11.2522 0.537593 11.1915C0.512452 11.1308 0.499512 11.0657 0.499512 11C0.499512 10.9343 0.512452 10.8693 0.537593 10.8086C0.562734 10.7479 0.599584 10.6927 0.646039 10.6463L5.29291 6.00003L0.646039 1.35378C0.552219 1.25996 0.499512 1.13272 0.499512 1.00003C0.499512 0.867352 0.552219 0.740104 0.646039 0.646284C0.73986 0.552464 0.867108 0.499756 0.99979 0.499756C1.13247 0.499756 1.25972 0.552464 1.35354 0.646284L6.35354 5.64628C6.40003 5.69272 6.43691 5.74786 6.46207 5.80856C6.48723 5.86926 6.50018 5.93433 6.50018 6.00003C6.50018 6.06574 6.48723 6.13081 6.46207 6.1915C6.43691 6.2522 6.40003 6.30735 6.35354 6.35378Z"
        fill="#A3A3A3"
      />
    </svg>
  );

  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 md:px-80 bg-neutral-5">
        <div className="py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-neutral-2 mb-6">
            <ol className="list-none p-0 inline-flex">
              <li className="hover:underline">Beranda</li>
              <li className="mx-2 mt-1">
                <RightArrowSVG />
              </li>
              <li className="hover:underline">Artikel dan Berita</li>
              <li className="mx-2 mt-1">
                <RightArrowSVG />
              </li>
              <li className="hover:underline">Resep dan Kuliner</li>
              <li className="mx-2 mt-1">
                <RightArrowSVG />
              </li>
              <li>
                <span className="font-semibold text-primary-5">
                  {articleData.title}
                </span>
              </li>
            </ol>
          </nav>

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
