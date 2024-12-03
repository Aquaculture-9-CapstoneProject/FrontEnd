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
    <div className="w-9/12">
      <h1 className="text-lg ">
        Menampilkan pencarian untuk{" "}
        <span className="font-bold">
          {selectedCategories.length > 0
            ? selectedCategories.join(", ")
            : "semua kategori"}
        </span>
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-10 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              rating={product.rating}
              category={product.category}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Tidak ada produk ditemukan.</p>
      )}
    </div>
  );
}
