import Navbar from "../../common/Navbar";
import Breadcrumb from "./Breadcrumb";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import useProductDetailStore from "../../../store/useProductDetailStore";
import ProductRecomendation from "../../common/ProductRecomendation";

export default function ProductDetail() {
  const breadcrumbItems = ["Beranda", "Produk", "Ikan", "Ikan Salmon"];
  const breadcrumbLinks = ["/home", "/products", "/products", "/detail"];
  const { productDetail, isLoading } = useProductDetailStore();

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-6">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }

  if (!productDetail) {
    return (
      <>
        <Navbar />
        <p className="text-lg font-semibold">Product Tidak ditemukan</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} links={breadcrumbLinks} />
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
