export default function PaymentMethod({ accountNumber }) {
  return (
    <div className="rounded-2xl border-[1px] border-solid border-neutral-3 w-full mt-4 py-4 sm:py-[26px] px-4 sm:px-[29px] flex flex-col gap-3 sm:gap-5">
      <h1 className="font-semibold text-lg sm:text-xl text-neutral-1 text-center">
        Metode Pembayaran: Transfer Bank
      </h1>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center items-center">
        <p className="text-lg sm:text-[28px] text-neutral-1 text-center sm:text-left">
          {accountNumber}
        </p>
        <img src="./user/payment/copy.svg" alt="copy" className="w-4 sm:w-5" />
      </div>
    </div>
  );
}
