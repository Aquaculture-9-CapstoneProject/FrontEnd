import { useProductStore } from "../../../store/useProductStore";
import ProductCard from "../../common/ProductCard";

export default function FilterProduct() {
  const { productResult } = useProductStore();
  const { selectedCategories } = useProductStore();

  return (
    <div className="w-full md:w-9/12">
      <h1 className="text-lg text-center md:text-left">
        {selectedCategories.length > 0 ? (
          <>
            Menampilkan hasil pencarian untuk{" "}
            <span className="font-bold">{selectedCategories.join(", ")}</span>
          </>
        ) : (
          <>
            <span className="font-bold">Semua Produk</span>
          </>
        )}
      </h1>

      {productResult.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-6">
          {productResult.map((product) => (
            <div
              key={product.ID} // Gunakan ID dari data
              className="w-full max-w-full md:max-w-[300px] mx-auto"
            >
              <ProductCard
                key={product.ID}
                name={product.Nama}
                price={product.Harga}
                image={product.Gambar}
                rating={product.Rating}
                category={product.Kategori}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-1  mt-4 text-center md:text-left">
          Tidak ada produk ditemukan.
        </p>
      )}
    </div>
  );
}
