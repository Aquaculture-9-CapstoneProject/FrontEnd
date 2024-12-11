import { useState } from "react";
import useProductDetailStore from "../../../store/useProductDetailStore";
import { formatCurrency } from "../../../utils/currency";

export default function ProductDescription() {
  const { productDetail } = useProductDetailStore();
  const [quantity, setQuantity] = useState(1);
  const keunggulan = productDetail.Keunggulan?.split("\n") || [];

  const handleIncrement = () => {
    if (quantity < productDetail.Stok) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="">
      <div className="py-5">
        <div className="flex flex-col gap-3">
          <p className="text-neutral-5 text-sm px-3 py-1 bg-primary-5 rounded-full text-center w-32">
            {productDetail.Kategori}
          </p>
          <h1 className="font-bold text-2xl md:text-4xl">
            {productDetail.Nama}
          </h1>
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <p className="text-xl text-neutral-1 font-semibold">
                {productDetail.Rating}
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7125 1.30008L7.78319 7.247L1.22918 8.20372C0.053853 8.3744 -0.417174 9.8252 0.435161 10.6561L5.17683 15.2825L4.05534 21.8179C3.85347 22.9992 5.09609 23.884 6.13683 23.3315L12 20.2458L17.8632 23.3315C18.9039 23.8795 20.1465 22.9992 19.9447 21.8179L18.8232 15.2825L23.5648 10.6561C24.4172 9.8252 23.9461 8.3744 22.7708 8.20372L16.2168 7.247L13.2875 1.30008C12.7626 0.240055 11.2419 0.22658 10.7125 1.30008Z"
                  fill="#1F92C5"
                />
              </svg>
            </div>
            <div>
              <p className="text-base md:text-xl text-primary-5 font-semibold">
                {productDetail.TotalReview} Ulasan
              </p>
            </div>
            <div>
              <p className="text-base md:text-xl text-primary-5 font-semibold">
                {productDetail.Terjual} Terjual
              </p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <svg
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="8" height="8" rx="4" fill="#106E9E" />
            </svg>
            <p>{productDetail.Status}</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-10">
          <div className="flex-col flex gap-3">
            <h1 className="text-2xl md:text-4xl font-bold text-neutral-1">
              {formatCurrency(productDetail.Harga)}
            </h1>
            <p className="text-sm text-neutral-1">*Harga per kg</p>
          </div>
          <div className="flex-col flex gap-3">
            <p className="text-base text-neutral-2 font-semibold">Variasi</p>
            <p className="btn font-semibold text-xs text-neutral-1 w-fit bg-neutral-5 border-neutral-4">
              {productDetail.Variasi}
            </p>
          </div>
          <div className="flex-col flex gap-3">
            <p className="text-base text-neutral-2 font-semibold">Kuantitas</p>
            <div className="flex items-center gap-8">
              <div className="border-[1px] border-primary-5 rounded-full flex py-2 px-5">
                <img
                  src="./user/detail/minus.svg"
                  alt="minus"
                  onClick={handleDecrement}
                />
                <p className="text-xl w-14 text-center select-none">
                  {quantity}
                </p>
                <img
                  src="./user/detail/plus.svg"
                  alt="minus"
                  onClick={handleIncrement}
                />
              </div>
              <p className="text-base">
                Stok:{" "}
                <span className="text-primary-5 font-bold text-base">
                  {productDetail.Stok}kg
                </span>
              </p>
            </div>
          </div>{" "}
          <div className="flex-col flex gap-3">
            <p className="text-base text-neutral-1 font-semibold">Pengiriman</p>
            <div className="flex gap-2">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 2.16125C8.3 2.16125 4.5 5.38125 4.5 10.3613C4.5 13.5413 6.95 17.2813 11.84 21.5913C12.22 21.9213 12.79 21.9213 13.17 21.5913C18.05 17.2813 20.5 13.5413 20.5 10.3613C20.5 5.38125 16.7 2.16125 12.5 2.16125ZM12.5 12.1613C11.4 12.1613 10.5 11.2613 10.5 10.1613C10.5 9.06125 11.4 8.16125 12.5 8.16125C13.6 8.16125 14.5 9.06125 14.5 10.1613C14.5 11.2613 13.6 12.1613 12.5 12.1613Z"
                  fill="#1F92C5"
                />
              </svg>

              <p className="text-neutral-1">
                Dikirim dari{" "}
                <span className="font-semibold">{productDetail.KotaAsal}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 8H17.5V6C17.5 4.9 16.6 4 15.5 4H3.5C2.4 4 1.5 4.9 1.5 6V15C1.5 16.1 2.4 17 3.5 17C3.5 18.66 4.84 20 6.5 20C8.16 20 9.5 18.66 9.5 17H15.5C15.5 18.66 16.84 20 18.5 20C20.16 20 21.5 18.66 21.5 17H22.5C23.05 17 23.5 16.55 23.5 16V12.67C23.5 12.24 23.36 11.82 23.1 11.47L20.8 8.4C20.61 8.15 20.31 8 20 8ZM6.5 18C5.95 18 5.5 17.55 5.5 17C5.5 16.45 5.95 16 6.5 16C7.05 16 7.5 16.45 7.5 17C7.5 17.55 7.05 18 6.5 18ZM20 9.5L21.96 12H17.5V9.5H20ZM18.5 18C17.95 18 17.5 17.55 17.5 17C17.5 16.45 17.95 16 18.5 16C19.05 16 19.5 16.45 19.5 17C19.5 17.55 19.05 18 18.5 18Z"
                  fill="#1F92C5"
                />
              </svg>
              <p className="text-neutral-1">Estimasi tiba 29 Nov - 1 Des</p>
            </div>
          </div>
          <div className="flex-col flex gap-3">
            <p className="text-base text-neutral-1 font-semibold">
              Deskripsi Produk
            </p>
            <p className="text-sm">{productDetail.Deskripsi}</p>
          </div>
          <div className="flex-col flex gap-3">
            <p className="text-base text-neutral-1 font-semibold">
              Keunggulan Produk
            </p>
            <ul className="list-disc pl-4 text-sm">
              {keunggulan.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
