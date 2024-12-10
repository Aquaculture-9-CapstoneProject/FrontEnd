import { useNavigate } from "react-router-dom";
import useCartStore from "../../../store/useCartStore";

export default function Summary() {
  const navigate = useNavigate();
  const products = useCartStore((state) => state.products);

  const totalPrice = products.reduce((sum, product) => {
    const price = Number(product.price) || 0;
    const quantity = Number(product.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  const formatPrice = (price) => {
    return `Rp. ${price.toLocaleString("id-ID")}`;
  };

  return (
    <div className="w-full md:w-96 border-2 border-neutral-3 p-4 rounded-lg mt-4 md:mt-0 h-min">
      <h2 className="text-lg md:text-xl font-bold">Ringkasan Belanja</h2>
      <div className="flex mt-4 justify-between">
        <p>Total Harga</p>
        <p>{formatPrice(totalPrice)}</p>
      </div>
      <div className="flex justify-between gap-4 mt-8">
        <button
          className="bg-primary-5 text-neutral-5 hover:bg-primary-6 w-full text-center px-4 py-2 rounded-md font-semibold transition-transform duration-200 transform hover:scale-105"
          onClick={() => navigate("/checkout")}
        >
          Beli
        </button>
      </div>
    </div>
  );
}
