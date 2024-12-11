import { useNavigate } from "react-router-dom";

export default function PosterCard() {
  const navigate = useNavigate();
  const cards = [
    {
      bgColor: "#D1ECFA",
      image: "./user/home/banner-ikan.png",
      title: "Nikmati rasa segar yang tiada duanya",
    },
    {
      bgColor: "#FFDFCC",
      image: "./user/home/banner-benih.png",
      title: "Benih berkualitas tinggi untuk pertumbuhan optimal",
    },
    {
      bgColor: "#FFF8CC",
      image: "./user/home/banner-sea-food.png",
      title: "Produk laut premium diolah dengan sempurna",
    },
    {
      bgColor: "#FDCFCE",
      image: "./user/home/banner-ikan-hias.png",
      title: "Bawa warna dan kehidupan ke akuarium anda",
    },
  ];

  return (
    <div className="px-4 sm:px-8 mt-4 sm:mt-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full sm:w-4/12 rounded-lg overflow-hidden h-[220px]"
            style={{ backgroundColor: card.bgColor }}
          >
            <div className="px-4 py-6 z-10 relative w-full sm:w-7/12">
              <h1 className="font-semibold text-[16px] leading-tight sm:h-20">
                {card.title}
              </h1>
              <button
                type="button"
                className="btn bg-primary-4 text-neutral-5 text-xs mt-4 sm:mt-8"
                onClick={() => navigate("/products")}
              >
                Beli Sekarang
              </button>
            </div>

            <img
              src={card.image}
              alt={`image-${index}`}
              className="absolute bottom-0 right-0 w-28 sm:w-36 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
