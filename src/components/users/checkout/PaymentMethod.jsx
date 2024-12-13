export default function PaymentMethod() {
  return (
    <div className="p-4 rounded-lg border-[1px] border-neutral-3 border-solid select-none">
      <h1 className="font-semibold text-lg mb-3">Metode Pembayaran</h1>
      <label className="flex gap-3 items-center cursor-pointer">
        <img
          src="./user/checkout/payment.svg"
          alt="payment"
          className="w-8 h-8"
        />
        <p className="text-base">Pembayaran Virtual</p>
        <input type="radio" defaultChecked className="checkbox ml-auto" />
      </label>
    </div>
  );
}
