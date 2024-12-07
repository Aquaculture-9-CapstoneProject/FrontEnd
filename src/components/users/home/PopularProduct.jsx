import usePopularProducts from "../../../hooks/usePopularProducts";
import ProductCard from "../../common/ProductCard";

const PopularProduct = () => {
  const { products, error } = usePopularProducts();

  if (error) {
    return console.log(error);
  }

  return (
    <div className="px-4 sm:px-8 mt-4 sm:mt-6">
      <h1 className="font-semibold text-neutral-1 text-[28px]">
        Produk Populer
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.Nama}
            price={`Rp${product.Harga.toLocaleString()}`}
            image={product.Gambar}
            rating={product.Rating}
            category={product.Jenis || "Tidak Ada Kategori"}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
