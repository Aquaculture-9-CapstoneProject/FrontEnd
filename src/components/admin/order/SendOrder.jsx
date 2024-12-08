import React from "react";

const SendOrder = ({ onClose, order }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-1 bg-opacity-50 px-4">
      <div className="bg-neutral-5 max-w-[487px] w-full sm:w-[360px] py-6 px-8 sm:px-6 rounded-lg shadow-lg">
        {/* Icon Pengiriman */}
        <div className="flex justify-center mb-5">
          <svg
            width="47"
            height="34"
            viewBox="0 0 47 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.1249 8.66671H33.9166V4.50004C33.9166 2.20837 32.0416 0.333374 29.7499 0.333374H4.74992C2.45825 0.333374 0.583252 2.20837 0.583252 4.50004V23.25C0.583252 25.5417 2.45825 27.4167 4.74992 27.4167C4.74992 30.875 7.54159 33.6667 10.9999 33.6667C14.4583 33.6667 17.2499 30.875 17.2499 27.4167H29.7499C29.7499 30.875 32.5416 33.6667 35.9999 33.6667C39.4583 33.6667 42.2499 30.875 42.2499 27.4167H44.3333C45.4791 27.4167 46.4166 26.4792 46.4166 25.3334V18.3959C46.4166 17.5 46.1249 16.625 45.5833 15.8959L40.7916 9.50004C40.3958 8.97921 39.7708 8.66671 39.1249 8.66671ZM10.9999 29.5C9.85409 29.5 8.91659 28.5625 8.91659 27.4167C8.91659 26.2709 9.85409 25.3334 10.9999 25.3334C12.1458 25.3334 13.0833 26.2709 13.0833 27.4167C13.0833 28.5625 12.1458 29.5 10.9999 29.5ZM39.1249 11.7917L43.2083 17H33.9166V11.7917H39.1249ZM35.9999 29.5C34.8541 29.5 33.9166 28.5625 33.9166 27.4167C33.9166 26.2709 34.8541 25.3334 35.9999 25.3334C37.1458 25.3334 38.0833 26.2709 38.0833 27.4167C38.0833 28.5625 37.1458 29.5 35.9999 29.5Z"
              fill="#1F92C5"
            />
          </svg>
        </div>

        <h2 className="text-neutral-1 text-center text-base sm:text-xl font-semibold mb-2">
          Kirim Pesanan
        </h2>
        <p className="text-neutral-1 text-xs sm:text-sm text-center mb-4 leading-5">
          Apakah Anda yakin ingin mengirim Pesanan ini? Tindakan ini tidak dapat dibatalkan.
        </p>

        {/* Tombol */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="btn bg-neutral-5 w-[103px] sm:w-[96px] h-[34px] sm:h-[30px] border border-2 border-neutral-4 text-neutral-1 font-semibold text-xs sm:text-sm"
          >
            Batal
          </button>
          <button className="btn bg-primary-5 text-neutral-5 font-semibold text-xs sm:text-sm">
            Kirim Pesanan
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendOrder;
