import React from "react";
import ArticleThumbnail from "./ArticleThumbnail";

const Insight = () => {
  return (
    <section className="py-10 px-4 md:px-8">
      <h2 className="text-2xl font-semibold text-neutral-1 mb-5">
        Wawasan Terkait Produk BlueBay
      </h2>
      <div className="grid grid-cols-8 gap-6">
        <div className="col-span-8 lg:col-span-5">
          <ArticleThumbnail
            image="user/home/bg-article.png"
            title="Sajian Udang Asam Manis Untuk Keluarga"
            badgeText="Resep dan Kuliner"
            cardSize="large"
          />
        </div>
        <div className="col-span-8 lg:col-span-3 flex flex-col gap-5">
          {[...Array(2)].map((_, index) => (
            <ArticleThumbnail
              key={index}
              image="user/home/bg-article.png"
              title="Sajian Udang Asam Manis Untuk Keluarga"
              badgeText="Resep dan Kuliner"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insight;