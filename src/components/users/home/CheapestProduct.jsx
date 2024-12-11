import ProductCard from "../../common/ProductCard";
import useCheapestProducts from "../../../hooks/useCheapersProduct";
import SkeletonCard from "../../common/SkeletonCard";

export default function CheapestProduct() {
  const { products, loading, error } = useCheapestProducts();

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
      <h1 className="font-semibold text-neutral-1 text-[28px]">
        Paling Murah!
      </h1>

      <div className="relative bg-primary-1 rounded-2xl overflow-hidden mt-4">
        <div
          className="absolute bottom-0 left-0 w-full h-[95px] sm:h-[120px] bg-no-repeat bg-contain sm:bg-cover z-0"
          style={{ backgroundImage: "url('/user/home/bg-cheap.png')" }}
        ></div>
        <div className="relative z-10 flex gap-6 px-4 sm:px-8 py-6 overflow-x-auto no-scrollbar">
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
                price={product.Harga}
                image={product.Gambar}
                rating={product.Rating}
                category={product.Kategori || "Tidak Ada Kategori"}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
