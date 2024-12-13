import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchOrder,
  fetchOrderDetail,
} from "../../../services/productServices";
import { formatCurrency } from "../../../utils/currency";
import useOrderDetailStore from "../../../store/useOrderDetailStore";

export default function OrderCard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setOrderDetail } = useOrderDetailStore();
  const [loadingOrderId, setLoadingOrderId] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrder();
        setOrders(data.payments);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-6">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <p>Error loading orders: {error}</p>;
  }

  const handleOrderDetail = async (id) => {
    setLoadingOrderId(id);
    try {
      const response = await fetchOrderDetail(id);
      setOrderDetail(response.response);
      console.log(response.response);
      navigate("/order-detail");
    } catch (error) {
      console.error("Error fetching order detail:", error);
    } finally {
      setLoadingOrderId(null);
    }
  };

  return (
    <div className="space-y-6 mb-5">
      {orders
        .slice()
        .reverse()
        .map((order) => (
          <div
            key={order.ID}
            className="mx-4 sm:mx-16 px-6 sm:px-8 py-6 border-[1px] border-solid border-neutral-3 rounded-2xl"
          >
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
              <h1 className="text-base font-semibold">Belanja</h1>
              <p className="text-sm sm:text-base">{order.order.CreatedAt}</p>
              <div
                className={`badge bg-primary-1 text-neutral-5 py-2 sm:py-3 text-xs sm:text-sm px-2 sm:px-3`}
              >
                {order.StatusBarang || "Di Proses"}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-5">
              <div className="flex gap-4 sm:gap-5">
                <img
                  className="rounded-lg w-16 h-16 sm:w-20 sm:h-20"
                  src={order.order.details[0].product.Gambar}
                  alt={order.order.details[0].product.Nama}
                />
                <div>
                  <h1 className="text-neutral-1 font-semibold text-lg sm:text-xl">
                    {order.order.details[0].product.Nama}
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-2">
                    {order.order.details.length > 0
                      ? `${order.order.details[0].Kuantitas} Kg x Rp ${order.order.details[0].product.Harga.toLocaleString()}`
                      : "Detail tidak tersedia"}
                  </p>
                  <p className="text-xs mt-3 text-neutral-2">
                    {order.order.details.length > 1
                      ? `+ ${order.order.details.length - 1} produk lainnya`
                      : ""}{" "}
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 flex flex-col items-end sm:items-center">
                <p className="text-xs sm:text-sm text-neutral-2">
                  Total belanja
                </p>
                <h1 className="text-lg sm:text-xl font-bold text-neutral-1 mt-1">
                  {formatCurrency(order.order.Total)}
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3 sm:gap-8 mt-4 sm:mt-2">
              <button
                type="button"
                className="text-xs sm:text-sm py-2 px-3 bg-neutral-4 text-neutral-7 rounded-md 
                     border-2 border-transparent hover:border-neutral-1 
                     hover:text-neutral-6 active:bg-neutral-6 active:text-neutral-8 
                     transition duration-200 font-semibold"
                onClick={() => handleOrderDetail(order.InvoiceID)}
                disabled={loadingOrderId === order.InvoiceID}
              >
                {loadingOrderId === order.InvoiceID ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Lihat Detail Pesanan"
                )}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
