import ProductCard from "../../common/ProductCard";

export default function PopularProduct() {
  const products = [
    {
      name: "Ikan Salmon",
      price: "Rp40.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.5,
      category: "ikan",
    },
    {
      name: "Ikan Tuna",
      price: "Rp35.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.2,
      category: "ikan",
    },
    {
      name: "Ikan Lele",
      price: "Rp25.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.1,
      category: "ikan",
    },
    {
      name: "Ikan Gurami",
      price: "Rp45.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.6,
      category: "ikan",
    },
    {
      name: "Ikan Patin",
      price: "Rp30.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.3,
      category: "ikan",
    },
    {
      name: "Ikan Bawal",
      price: "Rp50.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.4,
      category: "ikan",
    },
    {
      name: "Ikan Salmon",
      price: "Rp40.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.5,
      category: "ikan",
    },
    {
      name: "Ikan Tuna",
      price: "Rp35.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.2,
      category: "ikan",
    },
  ];

  return (
    <div className="px-4 sm:px-8 mt-4 sm:mt-6">
      <h1 className="font-semibold text-neutral-1 text-[28px]">
        Produk Populer
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
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
