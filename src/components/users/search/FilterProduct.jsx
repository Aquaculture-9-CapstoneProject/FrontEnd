import { useProductStore } from "../../../store/useProductStore";
import { products } from "../../../dataDummy/product";
import ProductCard from "../../common/ProductCard";

export default function FilterProduct() {
  const { selectedCategories } = useProductStore();

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category),
      )
    : products;

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

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full max-w-[300px] mx-auto">
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                rating={product.rating}
                category={product.category}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4 text-center md:text-left">
          Tidak ada produk ditemukan.
        </p>
      )}
    </div>
  );
}
