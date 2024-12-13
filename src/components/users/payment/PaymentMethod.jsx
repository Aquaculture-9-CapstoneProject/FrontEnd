export default function PaymentMethod({ link }) {
  return (
    <div className="rounded-2xl border-[1px] border-solid border-neutral-3 w-full mt-4 py-4 sm:py-[26px] px-4 sm:px-[29px] flex flex-col gap-3 sm:gap-5">
      <h1 className="font-semibold text-lg sm:text-xl text-neutral-1 text-center">
        Metode Pembayaran: Pembayaran Virtual
      </h1>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center items-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-secondary-2 text-center sm:text-left underline"
        >
          Klik di sini untuk membayar
        </a>
      </div>
    </div>
  );
}
