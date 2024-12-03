import { useEffect } from "react";
import Navbar from "../../common/Navbar";
import Breadcrumb from "./Breadcrumb";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import ProductRecomendation from "./ProductRecomendation";

export default function ProductDetail() {
  const breadcrumbItems = ["Beranda", "Produk", "Ikan", "Ikan Salmon"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-16 space-x-5">
        <ProductImage />
        <ProductDescription />
        <ProductRating />
      </div>
      <ProductRecomendation />
    </>
  );
}
