import useDashboardStore from "../../../store/useDashboardStore";

export default function PopularTable() {
  const { data } = useDashboardStore();
  const products = data.popularProducts;

  return (
    <div className="flex flex-col overflow-hidden px-6 py-4 rounded-xl bg-neutral-5 max-w-[517px] max-md:px-5">
      <p className="text-sm font-semibold leading-loose text-neutral-1 max-md:max-w-full">
        Produk Populer
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
          {products.map((item, index) => (
            <tr
              key={item.ID}
              className="border-b border-solid border-b-neutral-200 text-xs"
            >
              <td className="px-4 py-2 text-center">{index + 1}.</td>
              <td className="px-4 py-2 flex items-center">{item.Nama}</td>
              <td className="px-4 py-2 text-center">{item.Rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
