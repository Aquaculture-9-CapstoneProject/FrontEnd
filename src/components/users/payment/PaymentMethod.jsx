export default function PaymentMethod({ link }) {
  return (
    <div>
      <div className="flex flex-col gap-2 sm:gap-5 justify-center items-center">
        <img
          src="./user/payment/pending.png"
          className="object-contain w-full aspect-square max-w-[308px]"
          alt="pending"
        />
        <p className="text-sm leading-6 text-center text-black max-w-[426px]">
          Kami sedang mengarahkan kamu ke halaman pembayaran. Jika belum pindah,
          klik di{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-2 underline"
          >
            sini
          </a>{" "}
          untuk melanjutkan.
        </p>
      </div>
    </div>
  );
}
