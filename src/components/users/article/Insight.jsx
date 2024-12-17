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
            image="https://farizdotid.com/wp-content/uploads/2023/10/tema-aquascape-jungle.jpeg"
            title="Cara Mengelola Aquascape yang Baik dan Benar"
            badgeText="Panduan dan Tips"
            cardSize="large"
          />
        </div>
        <div className="col-span-8 lg:col-span-3 flex flex-col gap-5">
          <ArticleThumbnail
            image="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1005/2024/03/26/cakalang-suwir-pedas-2727462777.jpg"
            title="Resep dan Cara membuat Cakalang Suwir Pedas"
            badgeText="Resep dan Kuliner"
          />
          <ArticleThumbnail
            image="https://mediatani.co/wp-content/uploads/2021/04/Masakan-udang-dan-kepiting.jpg"
            title="Batasan Makan Udang dan Kepiting yang Sehat"
            badgeText="Panduan dan Tips"
          />
        </div>
      </div>
    </section>
  );
};

export default Insight;