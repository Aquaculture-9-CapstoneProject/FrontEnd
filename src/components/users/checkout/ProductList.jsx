import { useCheckoutStore } from "../../../store/useCheckoutStore";
import { formatCurrency } from "../../../utils/currency";

export default function ProductTable() {
  const { orderData } = useCheckoutStore();
  if (!orderData) {
    return <div>Loading order data...</div>;
  }
  const { details } = orderData;
  return (
    <div className="overflow-x-auto border-[1px] border-neutral-3 rounded-lg w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-sm sm:text-xl font-semibold text-neutral-1 py-3 sm:py-4">
              List Produk
            </th>
          </tr>
        </thead>
        <tbody>
          {details.map((product) => (
            <ProductRow key={product.ID} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductRow({ product }) {
  return (
    <tr>
      <td className="py-4">
        <div className="flex items-center gap-4">
          {/* Gambar */}
          <div className="w-16 h-16">
            <img
              src={product.product.Gambar}
              alt={product.product.Nama}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          {/* Informasi Produk */}
          <div className="flex flex-col gap-1 text-neutral-1">
            <span className="text-base font-semibold">
              {product.product.Nama}
            </span>
            <span className="text-sm">{product.product.Kategori}</span>{" "}
            <span className="text-xs">x {product.Kuantitas}</span>
          </div>
        </div>
      </td>
      <td className="py-4 text-center text-base font-semibold">
        {formatCurrency(product.Subtotal)}
      </td>
    </tr>
  );
}
