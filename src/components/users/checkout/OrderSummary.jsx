import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const navigate = useNavigate();

  const subtotal = 100000;
  const biayaLayanan = 5000;
  const ongkir = 20000;
  const total = subtotal + biayaLayanan + ongkir;

  return (
    <>
      <div className="p-3 sm:p-4 rounded-lg border-[1px] border-neutral-3 border-solid select-none">
        <h1 className="font-semibold text-base sm:text-lg mb-3">
          Ringkasan Pesanan
        </h1>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm sm:text-base">
            <p>Subtotal</p>
            <p className="font-semibold">Rp {subtotal.toLocaleString()}</p>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <p>Biaya Layanan</p>
            <p className="font-semibold">Rp {biayaLayanan.toLocaleString()}</p>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <p>Ongkir</p>
            <p className="font-semibold">Rp {ongkir.toLocaleString()}</p>
          </div>

          <hr className="border-neutral-3 my-2" />

          <div className="flex justify-between text-base sm:text-lg">
            <p>Total</p>
            <p className="font-semibold">Rp {total.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn bg-primary-5 text-neutral-5 w-full sm:w-auto"
        onClick={() => navigate("/payment")}
      >
        Buat Pesanan
      </button>
    </>
  );
}
