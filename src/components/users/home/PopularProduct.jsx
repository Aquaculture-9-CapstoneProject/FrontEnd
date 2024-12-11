import usePopularProducts from "../../../hooks/usePopularProducts";
import ProductCard from "../../common/ProductCard";
import SkeletonCard from "../../common/SkeletonCard";

const PopularProduct = () => {
  const { products, error, loading } = usePopularProducts();

  if (error) {
    console.error(error);
    return (
      <div className="px-4 sm:px-8 mt-4 sm:mt-6">
        <p className="text-error-5">Terjadi kesalahan saat memuat data.</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 mt-4 sm:mt-6">
      <h1 className="font-semibold text-neutral-1 text-[24px] sm:text-[28px]">
        Produk Populer
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6 justify-center">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : products.length === 0 ? (
          <p className="text-neutral-1">Tidak ada produk yang ditemukan.</p>
        ) : (
          products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.Nama}
              price={`Rp${product.Harga.toLocaleString()}`}
              image={product.Gambar}
              rating={product.Rating}
              category={product.Jenis || "Tidak Ada Kategori"}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PopularProduct;
