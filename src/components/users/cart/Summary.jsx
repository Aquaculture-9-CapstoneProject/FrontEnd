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

  // Fungsi untuk format harga dengan Rp.
  const formatPrice = (price) => {
    return `Rp. ${price.toLocaleString("id-ID")}`; // Format ke format Indonesia
  };

  return (
    <div>
      <div className="rounded-lg w-96 border-2 border-neutral-3 p-4">
        <h2 className="card-title">Ringkasan Belanja</h2>
        <div className="flex mt-4 justify-between">
          <p>Total Harga</p>
          <p>{formatPrice(totalPrice)}</p> {/* Format harga total */}
        </div>
        <div className="justify-between flex flex-row gap-8 mt-8">
          <button
            className="bg-primary-5 text-neutral-5 hover:bg-primary-6 w-full text-center px-6 py-[14px] rounded-md font-semibold transition duration-200 ease-in-out transform hover:scale-105"
            onClick={() => navigate("/checkout")}
          >
            Beli
          </button>
        </div>
      </div>
    </div>
  );
}
