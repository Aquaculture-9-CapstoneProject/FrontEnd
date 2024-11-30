import ProductCard from "../../common/ProductCard";

export default function CheapersProduct() {
  const products = [
    {
      name: "Ikan Salmon",
      price: "Rp40.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.5,
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
      name: "Ikan Salmon",
      price: "Rp40.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.5,
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
      name: "Ikan Salmon",
      price: "Rp40.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.5,
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
      name: "Ikan Salmon",
      price: "Rp40.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.5,
      category: "ikan",
    },
    {
      name: "Ikan Salmon",
      price: "Rp40.000/ kg",
      image: "/user/home/card-ikan.png",
      rating: 4.5,
      category: "ikan",
    },
  ];

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
        <div className="relative z-10 flex gap-6 px-4 sm:px-8 py-6 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-4 scrollbar-track-neutral-200">
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
    </div>
  );
}
