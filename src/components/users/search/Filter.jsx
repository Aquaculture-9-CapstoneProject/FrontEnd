import { useProductStore } from "../../../store/useProductStore";

export default function Filter() {
  const categories = [
    "ikan",
    "udang",
    "kerang",
    "ikan hias",
    "produk olahan",
    "benih",
  ];
  const { selectedCategories, toggleCategory } = useProductStore();

  return (
    <div className="p-4 rounded-lg border-neutral-3 border-solid h-min border-2 w-full md:w-1/5 text-neutral-1">
      <h1 className="text-xl font-semibold text-center md:text-left">
        Kategori
      </h1>
      <div className="flex flex-col gap-2 mt-4">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center gap-3">
            <input
              type="checkbox"
              id={`filter-${index}`}
              className="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            <label
              htmlFor={`filter-${index}`}
              className="label text-sm capitalize"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
