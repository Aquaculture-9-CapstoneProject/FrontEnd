export default function PaymentMethod({ accountNumber }) {
  return (
    <div className="rounded-2xl border-[1px] border-solid border-neutral-3 w-full mt-4 py-[26px] px-[29px] flex flex-col gap-5">
      <h1 className="font-semibold text-xl text-neutral-1 text-center">
        Metode Pembayaran: Transfer Bank
      </h1>
      <div className="flex gap-5 justify-center items-center">
        <p className="text-[28px] text-neutral-1">{accountNumber}</p>
        <img src="./user/payment/copy.svg" alt="copy" />
      </div>
    </div>
  );
}
