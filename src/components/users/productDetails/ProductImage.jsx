export default function ProductImage() {
  return (
    <div className=" mt-5 flex flex-col gap-6">
      {/* Image Section */}
      <div>
        <div className="mb-4">
          <img
            src="./user/detail/ikan-salmon.png"
            alt="image product"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                src="./user/detail/ikan-salmon.png"
                alt={`image product ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-primary-7 rounded-2xl px-5 py-4 text-neutral-5 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33309 27H12.6664C12.6664 28.4667 11.4664 29.6667 9.99976 29.6667C8.53309 29.6667 7.33309 28.4667 7.33309 27ZM4.66642 24.3334C4.66642 25.0667 5.26642 25.6667 5.99976 25.6667H13.9998C14.7331 25.6667 15.3331 25.0667 15.3331 24.3334C15.3331 23.6 14.7331 23 13.9998 23H5.99976C5.26642 23 4.66642 23.6 4.66642 24.3334ZM19.9998 13C19.9998 18.0934 16.4531 20.8134 14.9731 21.6667H5.02642C3.54642 20.8134 -0.000244141 18.0934 -0.000244141 13C-0.000244141 7.48004 4.47976 3.00004 9.99976 3.00004C15.5198 3.00004 19.9998 7.48004 19.9998 13ZM26.4931 10.16L24.6664 11L26.4931 11.84L27.3331 13.6667L28.1731 11.84L29.9998 11L28.1731 10.16L27.3331 8.33337L26.4931 10.16ZM23.3331 8.33337L24.5864 5.58671L27.3331 4.33337L24.5864 3.08004L23.3331 0.333374L22.0798 3.08004L19.3331 4.33337L22.0798 5.58671L23.3331 8.33337Z"
              fill="#FDE047"
            />
          </svg>
          <h1 className="font-bold text-base">Tips Penyimpanan</h1>
        </div>
        <p className="text-sm">
          Simpan di suhu -18°C untuk menjaga kualitas hingga masa kedaluwarsa.
          Jika sudah dicairkan, segera olah untuk hasil terbaik.
        </p>
      </div>

      {/* Article Section */}
      <div className="flex justify-between items-center rounded-md border-neutral-4 btn">
        <h1>Cari artikel terkait produk</h1>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5001 13.2292L10.7334 9.99583L7.5001 6.7625C7.1751 6.4375 7.1751 5.9125 7.5001 5.5875C7.8251 5.2625 8.3501 5.2625 8.6751 5.5875L12.5001 9.4125C12.8251 9.7375 12.8251 10.2625 12.5001 10.5875L8.6751 14.4125C8.3501 14.7375 7.8251 14.7375 7.5001 14.4125C7.18343 14.0875 7.1751 13.5542 7.5001 13.2292Z"
            fill="#262626"
          />
        </svg>
      </div>
    </div>
  );
}
