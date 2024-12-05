import ProductCard from "../../common/ProductCard";
import useCheapestProducts from "../../../hooks/useCheapersProduct";

export default function CheapestProduct() {
  const { products, error } = useCheapestProducts();

  if (error) {
    console.log(error);
  }

  return (
    <div className="px-4 sm:px-8 mt-4 sm:mt-6">
      <h1 className="font-semibold text-neutral-1 text-[28px]">
        Paling Murah!
      </h1>

      <div className="relative bg-primary-1 rounded-2xl overflow-hidden mt-4">
        {/* Background Image */}
        <div
          className="absolute bottom-0 left-0 w-full h-[95px] sm:h-[120px] bg-no-repeat bg-contain sm:bg-cover z-0"
          style={{ backgroundImage: "url('/user/home/bg-cheap.png')" }}
        ></div>

        {/* Product List */}
        <div className="relative z-10 flex gap-6 px-4 sm:px-8 py-6 overflow-x-auto no-scrollbar">
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
    </div>
  );
}
