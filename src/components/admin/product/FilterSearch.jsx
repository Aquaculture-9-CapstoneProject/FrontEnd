import useAdminProductStore from "../../../store/useAdminProductStore";

import { useState } from "react";

export default function FilterSearch({ onAddProductClick }) {
  const { filterProductsByCategory, fetchProducts } = useAdminProductStore();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = async (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category) {
      await filterProductsByCategory(category);
    } else {
      // Jika kategori kosong, ambil semua produk
      await fetchProducts();
    }
  };

  return (
    <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
      {/* Heading */}
      <h2 className="text-sm sm:text-base font-semibold text-neutral-1 mb-2 sm:mb-0">
        Data Produk
      </h2>

      {/* Filter, Search, and Buttons */}
      <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
        {/* Input Pencarian */}
        <div className="flex items-center border border-neutral-3 bg-neutral-5 rounded-md w-full sm:w-[200px]">
          <input
            type="text"
            placeholder="Cari"
            className="input input-sm bg-neutral-5 text-[10.35px] sm:text-sm border-0 focus:outline-none w-full py-2 px-3"
          />
          <button className="px-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG Path */}
            </svg>
          </button>
        </div>

        {/* Dropdown Filter */}
        <select
          className="select select-sm bg-neutral-5 border-neutral-4 text-neutral-1 text-xs sm:text-sm font-semibold rounded-md"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Semua</option>
          <option value="Ikan">Ikan</option>
          <option value="Udang">Udang</option>
          <option value="kerang">Kerang</option>
          <option value="Ikan Hias">Ikan Hias</option>
          <option value="Produk Olahan">Produk Olahan</option>
          <option value="Benih">Benih</option>
          <option value="Lainnya">Lainnya</option>
        </select>

        {/* Tombol Tambah Produk */}
        <button
          className="btn btn-sm bg-primary-5 text-neutral-5 text-xs sm:text-sm font-semibold flex items-center gap-2"
          onClick={onAddProductClick}
        >
          + Tambah Produk
        </button>
      </div>
    </div>
  );
}
