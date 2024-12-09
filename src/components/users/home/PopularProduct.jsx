import usePopularProducts from "../../../hooks/usePopularProducts";
import ProductCard from "../../common/ProductCard";

const PopularProduct = () => {
  const { products, error } = usePopularProducts();

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className="px-4 sm:px-8 mt-4 sm:mt-6">
      <h1 className="font-semibold text-neutral-1 text-[24px] sm:text-[28px]">
        Produk Populer
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6 justify-center">
        {products.map((product, index) => (
          <div key={index} className="w-full max-w-[300px] mx-auto">
            <ProductCard
              key={index}
              name={product.Nama}
              price={`Rp${product.Harga.toLocaleString()}`}
              image={product.Gambar}
              rating={product.Rating}
              category={product.Jenis || "Tidak Ada Kategori"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
