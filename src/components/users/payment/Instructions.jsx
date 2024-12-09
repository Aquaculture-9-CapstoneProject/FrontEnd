import { useNavigate } from "react-router-dom";

export default function Instructions() {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-4 rounded-lg border-[1px] border-neutral-3 mt-5">
        <h1 className="font-semibold text-xl sm:text-2xl mb-5">
          Bagaimana cara membayar melalui Transfer Bank?
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Mobile Banking */}
          <div>
            <div className="flex gap-2 items-center">
              <img
                src="./user/payment/phone.svg"
                alt="Mobile Banking"
                className="w-5 h-5"
              />
              <p className="text-sm sm:text-base">
                Pembayaran melalui Mobile Banking
              </p>
            </div>
            <ol className="list-decimal pl-4 space-y-2 mt-3 text-xs">
              <li>
                Login ke Aplikasi Mobile Banking Anda dengan cara memasukkan
                username dan password.
              </li>
              <li>Pilih menu Pembayaran.</li>
              <li>Pilih menu Multipayment.</li>
              <li>Pilih penyedia layanan “PT BlueBay Indonesia”.</li>
              <li>Setelah tagihan muncul, pilih Konfirmasi.</li>
              <li>
                Masukkan nomor Virtual Akun dan jumlah yang harus dibayar, lalu
                pilih Lanjutkan.
              </li>
              <li>Masukkan PIN.</li>
              <li>Transaksi selesai, simpan bukti pembayaran Anda.</li>
            </ol>
          </div>

          {/* ATM */}
          <div>
            <div className="flex gap-2 items-center">
              <img
                src="./user/payment/credit.svg"
                alt="ATM"
                className="w-5 h-5"
              />
              <p className="text-sm sm:text-base">Pembayaran melalui ATM</p>
            </div>
            <ol className="list-decimal pl-4 space-y-2 mt-3 text-xs">
              <li>Masukkan kartu ATM Anda dan masukkan PIN.</li>
              <li>Pilih menu Bayar/Beli.</li>
              <li>
                Pilih menu Lainnya sampai Anda menemukan menu Multipayment.
              </li>
              <li>Masukkan kode tagihan BlueBay 446678, lalu pilih OK.</li>
              <li>Masukkan nomor Virtual Akun, lalu pilih Benar.</li>
              <li>Masukkan angka 1 untuk memilih tagihan, lalu pilih Ya.</li>
              <li>Konfirmasi pembayaran akan muncul, lalu pilih Ya.</li>
              <li>Simpan struk sebagai bukti pembayaran.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-5 py-5 gap-4 sm:gap-8 mb-5 w-full">
        <button
          type="button"
          className="w-full sm:w-1/2 py-3 px-6 bg-neutral-4 text-neutral-7 rounded-md 
               border-2 border-transparent hover:border-neutral-1 
               hover:text-neutral-6 active:bg-neutral-6 active:text-neutral-8 
               transition duration-200 font-semibold"
          onClick={() => navigate("/payment-failed")}
        >
          Batalkan Pesanan
        </button>
        <button
          type="button"
          className="w-full sm:w-1/2 py-3 px-6 bg-primary-5 text-neutral-5 rounded-md font-semibold
               hover:bg-primary-6 hover:text-neutral-6 
               active:bg-primary-7 active:text-neutral-8 transition duration-200"
          onClick={() => navigate("/payment-succes")}
        >
          Cek Status Pembayaran
        </button>
      </div>
    </>
  );
}
