export default function AddressSection() {
  return (
    <div className="p-3 sm:p-4 rounded-lg border-[1px] border-solid border-neutral-3 w-full">
      <h1 className="text-lg sm:text-xl font-semibold text-neutral-1">
        Alamat
      </h1>
      <div className="p-3 sm:p-4 rounded-lg border-[1px] border-solid border-neutral-3 w-full mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <h1 className="font-semibold text-base text-neutral-1">Rumah - </h1>
          <p className="text-base text-neutral-1">
            Amelia Putri (0851-1234-5678)
          </p>
        </div>
        <p className="text-sm sm:text-base text-neutral-1 mt-2">
          Jalan Sejahtera No. 123, Perumahan Harmoni Indah, Blok C5, Kota
          Bandung
        </p>
      </div>
    </div>
  );
}
