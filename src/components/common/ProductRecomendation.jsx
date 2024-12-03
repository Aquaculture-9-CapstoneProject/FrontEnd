import { products } from "../../dataDummy/product";
import ProductCard from "./ProductCard";

export default function ProductRecomendation({ title }) {
  return (
    <div className="mx-16 mb-8">
      <h1 className="text-xl font-semibold text-neutral-1">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}
