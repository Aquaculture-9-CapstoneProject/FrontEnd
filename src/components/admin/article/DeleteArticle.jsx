import React from "react";

const DeleteArticle = ({ article, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-1 bg-opacity-50 px-4">
      <div className="bg-neutral-5 max-w-[487px] w-full sm:w-[360px] py-6 px-8 sm:px-6 rounded-lg shadow-lg">
        {/* Icon Peringatan */}
        <div className="flex justify-center mb-5">
          <svg
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 10.5834C22.6458 10.5834 23.5833 11.5209 23.5833 12.6667V21C23.5833 22.1459 22.6458 23.0834 21.5 23.0834C20.3541 23.0834 19.4166 22.1459 19.4166 21V12.6667C19.4166 11.5209 20.3541 10.5834 21.5 10.5834ZM21.4791 0.166687C9.97913 0.166687 0.666626 9.50002 0.666626 21C0.666626 32.5 9.97913 41.8334 21.4791 41.8334C33 41.8334 42.3333 32.5 42.3333 21C42.3333 9.50002 33 0.166687 21.4791 0.166687ZM21.5 37.6667C12.2916 37.6667 4.83329 30.2084 4.83329 21C4.83329 11.7917 12.2916 4.33335 21.5 4.33335C30.7083 4.33335 38.1666 11.7917 38.1666 21C38.1666 30.2084 30.7083 37.6667 21.5 37.6667ZM23.5833 31.4167H19.4166V27.25H23.5833V31.4167Z"
              fill="#BE123C"
            />
          </svg>
        </div>

        <h2 className="text-neutral-1 text-center text-base sm:text-xl font-semibold mb-2">
          Hapus Artikel
        </h2>
        <p className="text-neutral-1 text-xs sm:text-sm text-center mb-4 leading-5">
          Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak dapat dibatalkan.
        </p>

        {/* Tombol */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="btn bg-neutral-5 w-[103px] sm:w-[96px] h-[34px] sm:h-[30px] border border-2 border-neutral-4 text-neutral-1 font-semibold text-xs sm:text-sm"
          >
            Batal
          </button>
          <button className="btn bg-primary-5 w-[103px] sm:w-[96px] h-[34px] sm:h-[30px] text-neutral-5 font-semibold text-xs sm:text-sm">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteArticle;
