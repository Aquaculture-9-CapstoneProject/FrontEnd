import { useProductStore } from "../../../store/useProductStore";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const { setSelectedCategories } = useProductStore();
  const navigate = useNavigate();

  const categories = [
    { imgSrc: "./user/home/ikan.png", label: "Ikan" },
    { imgSrc: "./user/home/udang.png", label: "Udang" },
    { imgSrc: "./user/home/kerang.png", label: "Kerang" },
    { imgSrc: "./user/home/ikan-hias.png", label: "Ikan hias" },
    { imgSrc: "./user/home/produk-olahan.png", label: "Produk olahan" },
    { imgSrc: "./user/home/benih.png", label: "Benih" },
    { imgSrc: "./user/home/lainnya.png", label: "Lainnya" },
  ];

  const handleClick = (label) => {
    setSelectedCategories([label]);
    navigate("/search");
  };

  return (
    <div className="mx-0 sm:mx-8 mt-4 sm:mt-6 p-6 rounded-2xl border border-neutral-4">
      <h1 className="text-[28px] font-semibold text-neutral-1">Kategori</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 mt-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center flex-col justify-center p-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:bg-neutral-4"
            onClick={() => handleClick(category.label.toLowerCase())}
          >
            <img src={category.imgSrc} alt={category.label} />
            <p className="text-xl font-normal text-center">{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
