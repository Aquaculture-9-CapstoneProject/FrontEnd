import { recommendedProducts } from "../../../dataDummy/recomendedProduct";

export default function ProductTable() {
  return (
    <div className="overflow-x-auto border-[1px] border-neutral-3 rounded-lg w-full">
      <table className="table">
        <thead>
          <tr>
            <th className="text-xl font-semibold text-neutral-1 py-4">
              List Produk
            </th>
          </tr>
        </thead>
        <tbody>
          {recommendedProducts.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductRow({ product }) {
  const formatPrice = (price) => `Rp. ${price.toLocaleString("id-ID")}`;

  return (
    <tr>
      <td className="py-4">
        <div className="flex items-center gap-4">
          {/* Gambar */}
          <div className="w-16 h-16">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          {/* Informasi Produk */}
          <div className="flex flex-col gap-1 text-neutral-1">
            <span className="text-base font-semibold">{product.name}</span>
            <span className="text-sm">{product.category}</span>
            <span className="text-xs">x {product.quantity}</span>
          </div>
        </div>
      </td>
      <td className="py-4 text-center text-base font-semibold">
        {formatPrice(product.price)}
      </td>
    </tr>
  );
}
