import { useState, useEffect } from "react";
import { fetchOrders } from "../../../services/productServices";

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      try {
        const data = await fetchOrders();
        const lastData = data.orders.length - 1;
        setProducts(data.orders[lastData]?.details || []);
      } catch (error) {
        console.error("Error fetching checkout data:", error);
      }
    };

    fetchCheckoutData();
  }, []);

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
          {products.map((product) => (
            <ProductRow key={product.ID} product={product} />
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
        {formatPrice(product.Subtotal)}
      </td>
    </tr>
  );
}
