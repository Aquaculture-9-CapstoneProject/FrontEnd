import { useNavigate } from "react-router-dom";
import Navbar from "../../common/Navbar";
import Step from "../../common/Step";

export default function PaymentSucces() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Step currentStep={3} />

      <div className="flex flex-col items-center justify-center text-neutral-1">
        <h1 className="font-semibold text-[28px] mb-5">Pembayaran Berhasil</h1>
        <img
          src="./user/payment/succes.png"
          alt="succes"
          className="w-80 py-2"
        />
        <p className="text-sm text-center">
          Yea, pembayaranmu udah kami terima! Cek detailnya di bawah ini ya!
        </p>
        <div className="p-4 rounded-[10px] border-2 border-solid border-neutral-3 mt-5 w-5/12">
          <h1 className="text-left text-base font-semibold">
            Detail Transaksi
          </h1>
          <hr className="my-2 border-t border-neutral-3" />
          <div className="flex flex-col gap-2 text-xs">
            <div className="flex justify-between">
              <span>Nomor Pesanan</span>
              <span>P0000001234</span>
            </div>
            <div className="flex justify-between">
              <span>Waktu Pemesanan</span>
              <span>27 November 2024, 11.26 WIB</span>
            </div>
            <div className="flex justify-between">
              <span>Nomor Transaksi</span>
              <span>TR0012193890</span>
            </div>
            <div className="flex justify-between">
              <span>Metode Pembayaran</span>
              <span>Transfer Bank</span>
            </div>
            <div className="flex justify-between">
              <span>Waktu Pembayaran</span>
              <span>27 November 2024, 11.26 WIB</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rp 160.000</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Layanan</span>
              <span>Rp 2.000</span>
            </div>
            <div className="flex justify-between">
              <span>Ongkir</span>
              <span>Rp 10.000</span>
            </div>
            <hr className="my-2 border-t border-neutral-3" />
            <div className="flex justify-between text-xl font-semibold">
              <span>Total Harga</span>
              <span>Rp 100.000</span>
            </div>
          </div>
        </div>
        <div className="flex-col flex gap-4 mt-3 w-5/12 mb-8">
          <button
            type="button"
            className="w-full py-3 px-6 bg-primary-5 text-neutral-5 rounded-md font-semibold
               hover:bg-primary-6 hover:text-neutral-6 
               active:bg-primary-7 active:text-neutral-8 transition duration-200"
            onClick={() => navigate("/order")}
          >
            Lihat Dafar Pesanan
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
