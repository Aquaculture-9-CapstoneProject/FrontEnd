import { fetchCart } from "../../../services/productServices";
import useCartStore from "../../../store/useCartStore";
import { useEffect } from "react";

export default function ProductTable() {
  const { setProducts, products, removeProduct, setTotal } = useCartStore();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await fetchCart();
        setProducts(data.Keranjang);
        setTotal(data.Total);
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    };

    loadCart();
  }, [setProducts, setTotal]);

  return (
    <div className="overflow-x-auto border-[1px] border-neutral-3 rounded-lg w-full md:w-8/12">
      <table className="table">
        <thead>
          <tr>
            <th className="text-sm md:text-xl font-bold text-neutral-1 py-2 md:py-4">
              Produk
            </th>
            <th className="text-center font-bold text-neutral-1 text-sm md:text-xl py-2 md:py-4">
              Jumlah
            </th>
            <th className="text-center font-bold text-neutral-1 text-sm md:text-xl py-2 md:py-4">
              Harga
            </th>
            <th className="text-center font-bold text-neutral-1 text-sm md:text-xl py-2 md:py-4">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.ID}
              product={product}
              onDelete={removeProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductRow({ product, onDelete }) {
  const setQuantity = useCartStore((state) => state.setQuantity);
  const quantity = product.Kuantitas;
  const itemProduct = product.product;

  const increment = () => setQuantity(itemProduct.ID, quantity + 1);
  const decrement = () =>
    setQuantity(itemProduct.ID, Math.max(1, quantity - 1));

  const formatPrice = (price) => `Rp. ${price.toLocaleString("id-ID")}`;

  return (
    <tr>
      <td className="w-1/3 py-4">
        <div className="flex items-center gap-3 select-none">
          <input type="checkbox" className="checkbox" />
          <div className="avatar">
            <div className="rounded-lg h-16 w-16">
              <img src={itemProduct.Gambar} alt={itemProduct.Nama} />
            </div>
          </div>
          <div>
            <div className="font-bold">{itemProduct.Nama}</div>
            <div className="text-sm opacity-50">{itemProduct.Kategori}</div>
          </div>
        </div>
      </td>
      <td className="text-center py-4">
        <div className="inline-flex items-center border-[1px] border-primary-5 rounded-full gap-2 py-1 px-2">
          <img
            src="./user/detail/minus.svg"
            alt="minus"
            className="w-3 cursor-pointer"
            onClick={decrement}
          />
          <p className="text-sm w-6 text-center select-none">{quantity}</p>
          <img
            src="./user/detail/plus.svg"
            alt="plus"
            className="w-3 cursor-pointer"
            onClick={increment}
          />
        </div>
      </td>
      <td className="text-center py-4">{formatPrice(product.Subtotal)}</td>
      <td className="text-center py-4">
        <button onClick={() => onDelete(product.ID)}>
          <img src="./user/cart/delete.svg" alt="delete" className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
}
