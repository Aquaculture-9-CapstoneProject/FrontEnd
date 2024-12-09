import React from "react";

export default function FilterSearch({ onAddProductClick }) {
  return (
    <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
      {/* Heading */}
      <h2 className="text-sm sm:text-base font-semibold text-neutral-1 mb-2 sm:mb-0">
        Pesanan Bulan Ini
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
              <path
                d="M10.191 9.03627H9.60672L9.39964 8.83658C10.2871 7.80117 10.7457 6.38856 10.4942 4.88721C10.1466 2.83117 8.43079 1.18929 6.35995 0.937832C3.23151 0.553249 0.598598 3.18617 0.983182 6.3146C1.23464 8.38544 2.87652 10.1013 4.93256 10.4489C6.43391 10.7003 7.84651 10.2418 8.88193 9.35429L9.08162 9.56137V10.1456L12.2248 13.2889C12.5281 13.5921 13.0236 13.5921 13.3268 13.2889C13.6301 12.9856 13.6301 12.4901 13.3268 12.1869L10.191 9.03627ZM5.75349 9.03627C3.91193 9.03627 2.42537 7.54971 2.42537 5.70815C2.42537 3.86658 3.91193 2.38002 5.75349 2.38002C7.59506 2.38002 9.08162 3.86658 9.08162 5.70815C9.08162 7.54971 7.59506 9.03627 5.75349 9.03627Z"
                fill="#A3A3A3"
              />
            </svg>
          </button>
        </div>

        {/* Tombol Export */}
        <button className="btn btn-sm bg-neutral-5 border-neutral-4 text-neutral-1 text-xs sm:text-sm font-semibold flex items-center gap-2">
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
        <details className="dropdown dropdown-end">
          <summary className="btn btn-sm bg-neutral-5 border-neutral-4 text-neutral-1 text-xs sm:text-sm font-semibold flex items-center gap-2">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66667 8H7.33333V6.66667H4.66667V8ZM0 0V1.33333H12V0H0ZM2 4.66667H10V3.33333H2V4.66667Z"
                fill="#262626"
              />
            </svg>
            Filter
          </summary>
          <ul className="menu dropdown-content bg-neutral-5 text-xs sm:text-sm rounded-box z-[1] w-40 p-2 shadow">
            <li>
              <a>Ikan</a>
            </li>
            <li>
              <a>Udang</a>
            </li>
          </ul>
        </details>

        {/* Tombol Tambah Produk */}
        <button className="btn btn-sm bg-primary-5 text-neutral-5 text-xs sm:text-sm font-semibold flex items-center gap-2"
        onClick={onAddProductClick}
        >
          + Tambah Produk
        </button>
      </div>
    </div>
  );
}
