import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils/currency";
import { useCheckoutStore } from "../../../store/useCheckoutStore";
import { payment } from "../../../services/productServices";
import usePaymentStore from "../../../store/usePaymentStore";

export default function OrderSummary() {
  const { setPaymentData } = usePaymentStore();
  const navigate = useNavigate();
  const { orderData, loading } = useCheckoutStore();

  const subtotal = orderData?.details
    ? orderData.details.reduce((sum, item) => sum + item.Subtotal, 0)
    : 0;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!orderData) {
    return <div>Loading order data...</div>;
  }

  const handleOrder = async (id) => {
    try {
      const response = await payment(id);
      console.log("Response dari API payment:", response);

      setPaymentData({
        invoice_id: response.invoiceData.invoice_id,
        invoice_url: response.invoiceData.invoice_url,
        jumlah: response.invoiceData.jumlah,
      });

      navigate("/payment");
    } catch (error) {
      console.error("Error saat memproses pembayaran:", error);
      alert(error); // Tampilkan pesan error ke pengguna
    }
  };
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
        onClick={() => handleOrder(orderData.ID)}
      >
        Buat Pesanan
      </button>
    </>
  );
}
