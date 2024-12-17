import { exportProducts } from "../../../services/adminServices";
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

  const handleExport = async () => {
    try {
      const data = await exportProducts();
      const blob = new Blob([data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "products.csv";
      document.body.appendChild(a);

      a.click(); // Trigger download
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Gagal mengekspor file:", error);
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

        {/* Tombol Export */}
        <button
          className="btn btn-sm bg-neutral-5 border-neutral-4 text-neutral-1 text-xs sm:text-sm font-semibold flex items-center gap-2"
          onClick={handleExport}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 8V10H2.00008V8H0.666748V10C0.666748 10.7333 1.26675 11.3333 2.00008 11.3333H10.0001C10.7334 11.3333 11.3334 10.7333 11.3334 10V8H10.0001ZM2.66675 4L3.60675 4.94L5.33341 3.22V8.66666H6.66675V3.22L8.39341 4.94L9.33341 4L6.00008 0.666664L2.66675 4Z"
              fill="#262626"
            />
          </svg>
          Export
        </button>

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
