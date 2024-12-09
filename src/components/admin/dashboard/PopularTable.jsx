const popularProducts = [
  { id: 1, name: "Ikan Lele", rating: 4.9 },
  { id: 2, name: "Nugget Ikan", rating: 4.9 },
  { id: 3, name: "Ikan Gurame", rating: 4.9 },
  { id: 4, name: "Ikan Salmon", rating: 4.9 },
  { id: 5, name: "Ikan Teri", rating: 4.9 },
];

export default function PopularTable() {
  return (
    <div className="flex overflow-hidden flex-col px-6 py-4 rounded-xl bg-neutral-5 max-w-[517px] max-md:px-5">
      <p className="text-sm font-semibold leading-loose text-neutral-1 max-md:max-w-full">
        Produk Populer{" "}
      </p>
      {/* Tabel Data Produk Populer */}
      <table className="table-auto w-full mt-4 leading-loose">
        <thead>
          <tr className="font-semibold text-neutral-3 border-b border-solid border-b-neutral-3 text-[10px]">
            <th className="px-4 py-2 text-center w-10">No.</th>
            <th className="px-4 py-2 text-left w-[200px]">Produk</th>
            <th className="px-4 py-2 text-center">Rating</th>
          </tr>
        </thead>
        <tbody>
          {popularProducts.map((item, index) => (
            <tr
              key={item.id}
              className="border-b border-solid border-b-neutral-200 text-xs"
            >
              <td className="px-4 py-2 text-center">{index + 1}.</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2 text-center">{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
