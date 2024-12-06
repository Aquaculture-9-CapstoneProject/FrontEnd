import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const navigate = useNavigate();

  const subtotal = 100000;
  const biayaLayanan = 5000;
  const ongkir = 20000;
  const total = subtotal + biayaLayanan + ongkir;

  return (
    <>
      <div className="p-4 rounded-lg border-[1px] border-neutral-3 border-solid select-none">
        <h1 className="font-semibold text-lg mb-3">Ringkasan Pesanan</h1>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-base">Subtotal</p>
            <p className="text-base font-semibold ">
              Rp {subtotal.toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-base">Biaya Layanan</p>
            <p className="text-base font-semibold ">
              Rp {biayaLayanan.toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-base">Ongkir</p>
            <p className="text-base font-semibold ">
              Rp {ongkir.toLocaleString()}
            </p>
          </div>

          <hr className="border-neutral-3 my-1" />

          <div className="flex justify-between text-lg">
            <p>Total</p>
            <p className="font-semibold">Rp {total.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn bg-primary-5 text-neutral-5"
        onClick={() => navigate("/payment")}
      >
        Buat Pesanan
      </button>
    </>
  );
}
