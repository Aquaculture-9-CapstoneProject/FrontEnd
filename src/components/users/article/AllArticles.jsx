import NavbarHome from "../home/NavbarHome";
import ArticleCard from "./ArticleCard";

export default function Article() {
   const articles = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        image: "user/home/bg-article.png",
        title: "Lorem ipsum dolor sit amet consectetur. Sed etiam eu nam placerat.",
        date: "27 Februari 2024",
        badgeText: "Panduan dan Tips",
    }));
    
  return (
    <div>
        <NavbarHome />
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 bg-neutral-5">
      <section className="py-10 px-4 md:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-neutral-1">Artikel Terbaru</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.image}
            title={article.title}
            date={article.date}
            badgeText={article.badgeText}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <nav aria-label="Pagination">
          <ul className="flex gap-1">
            <li>
              <button
                className="w-[29px] h-[34px] flex justify-center items-center rounded-md border border-neutral-5 bg-neutral-4 text-neutral-1 hover:text-neutral-5 hover:bg-secondary-5"
                aria-label="Previous Page"
              >
                &lt;
              </button>
            </li>
            {Array.from({ length: 4 }, (_, index) => (
              <li key={index}>
                <button
                  className={`w-[29px] h-[34px] flex justify-center items-center rounded-md border ${
                    index === 0
                      ? "border-neutral-5 bg-secondary-5 text-neutral-5"
                      : "border-neutral-5 text-neutral-1 border-neutral-5 bg-neutral-4"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                className="w-[29px] h-[34px] flex justify-center items-center rounded-md border border-neutral-5 bg-neutral-4 text-neutral-1 hover:text-neutral-5 hover:bg-secondary-5"
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