import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchOrders } from "../../../services/productServices";
import { formatCurrency } from "../../../utils/currency";

export default function OrderSummary() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      try {
        const data = await fetchOrders();
        const lastData = data.orders[data.orders.length - 1];
        setOrderData(lastData);
      } catch (error) {
        console.error("Error fetching checkout data:", error);
      }
    };

    fetchCheckoutData();
  }, []);

  const subtotal = orderData?.details
    ? orderData.details.reduce((sum, item) => sum + item.Subtotal, 0)
    : 0;

  return (
    <>
      <div className="p-3 sm:p-4 rounded-lg border-[1px] border-neutral-3 border-solid select-none">
        <h1 className="font-semibold text-base sm:text-lg mb-3">
          Ringkasan Pesanan
        </h1>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm sm:text-base">
            <p>Subtotal</p>
            <p className="font-semibold">{formatCurrency(subtotal)}</p>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <p>Biaya Layanan</p>
            <p className="font-semibold">
              {formatCurrency(orderData.BiayaLayanan)}
            </p>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <p>Ongkir</p>
            <p className="font-semibold">
              {formatCurrency(orderData.BiayaOngkir)}
            </p>
          </div>

          <hr className="border-neutral-3 my-2" />

          <div className="flex justify-between text-base sm:text-lg">
            <p>Total</p>
            <p className="font-semibold">{formatCurrency(orderData.Total)}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn bg-primary-5 text-neutral-5 w-full sm:w-auto"
        onClick={() => navigate("/payment")}
      >
        Buat Pesanan
      </button>
    </>
  );
}
