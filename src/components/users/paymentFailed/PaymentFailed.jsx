import { useNavigate } from "react-router-dom";
import Navbar from "../../common/Navbar";
import Step from "../../common/Step";

export default function PaymentFailed() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Step currentStep={3} />

      <div className="flex flex-col items-center justify-center px-4 sm:px-8 text-neutral-1">
        <h1 className="font-semibold text-2xl sm:text-[28px] mb-5 text-center mt-4">
          Pembayaran Gagal
        </h1>
        <img
          src="./user/payment/failed.png"
          alt="failed"
          className="w-40 sm:w-80 py-2"
        />
        <p className="text-sm sm:text-base text-center w-full sm:w-8/12 lg:w-6/12">
          Yah, sayang sekali pembayaranmu tidak berhasil :(. Yuk, cek produk
          lain kami yang mungkin menarik untukmu!
        </p>
        <div className="flex flex-col gap-4 mt-4 w-full sm:w-8/12 lg:w-6/12 mb-8">
          <button
            type="button"
            className="w-full py-3 px-6 bg-primary-5 text-neutral-5 rounded-md font-semibold
              hover:bg-primary-6 hover:text-neutral-6 
              active:bg-primary-7 active:text-neutral-8 transition duration-200"
            onClick={() => navigate("/order")}
          >
            Lihat Daftar Pesanan
          </button>
          <button
            type="button"
            className="w-full py-3 px-6 bg-neutral-4 text-neutral-7 rounded-md
              border-2 border-transparent hover:border-neutral-1 
              hover:text-neutral-6 active:bg-neutral-6 active:text-neutral-8 
              transition duration-200 font-semibold"
            onClick={() => navigate("/home")}
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </>
  );
}
