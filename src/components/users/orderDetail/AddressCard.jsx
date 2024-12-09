export default function AddressCard() {
  return (
    <div className="p-3 rounded-lg border-[1px] border-solid border-neutral-3 w-full">
      <div className="flex flex-wrap">
        <h1 className="font-semibold text-base md:text-lg sm:text-sm text-neutral-1">
          Amelia Putri -
        </h1>
        <p className="text-base md:text-lg sm:text-sm text-neutral-1">
          (0851-1234-5678)
        </p>
      </div>
      <p className="text-base md:text-lg sm:text-sm text-neutral-1">
        Jalan Sejahtera No. 123, Perumahan Harmoni Indah, Blok C5, Kota Bandung
      </p>
    </div>
  );
}
