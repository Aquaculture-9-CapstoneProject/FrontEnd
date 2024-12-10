import { useEffect } from "react";
import Navbar from "../../common/Navbar";
import Breadcrumb from "./Breadcrumb";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import ProductRecomendation from "../../common/ProductRecomendation";

export default function ProductDetail() {
  const breadcrumbItems = ["Beranda", "Produk", "Ikan", "Ikan Salmon"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-16">
        <ProductImage />
        <ProductDescription />
        <ProductRating />
      </div>
      <div className="hidden lg:flex">
        <ProductRecomendation title="Rekomendasi Produk" />
      </div>
    </>
  );
}
