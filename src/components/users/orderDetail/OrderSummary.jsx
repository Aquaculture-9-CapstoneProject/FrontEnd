import { useState } from "react";
import RatingModal from "./RatingModal";
import useOrderDetailStore from "../../../store/useOrderDetailStore";

export default function OrderSummary() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { orderDetail } = useOrderDetailStore();
  const { payment } = orderDetail || {};
  const orders = payment?.order?.details || [];

  return (
    <div className="mt-3 p-[18px]">
      <h1 className="text-xl font-semibold text-neutral-1">
        Ringkasan Pesanan
      </h1>

      {orders.map((detail) => (
        <div
          key={detail.ID}
          className="flex items-center justify-between flex-wrap sm:flex-nowrap"
        >
          <div className="mt-5 flex gap-5 sm:w-auto w-full">
            <img
              className="rounded-lg w-16 h-16"
              src={detail.product.Gambar}
              alt={detail.product.Nama}
            />
            <div>
              <h1 className="text-neutral-1 font-semibold text-base">
                {detail.product.Nama}
              </h1>
              <p className="text-sm text-neutral-2">
                {detail.product.Kategori}
              </p>
              <p className="text-[10px] text-neutral-2">x {detail.Kuantitas}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end gap-2 sm:w-auto w-full mt-3 sm:mt-0">
            <h1 className="text-base font-semibold text-neutral-1 mt-1">
              Rp {detail.Subtotal.toLocaleString("id-ID")}
            </h1>
            <button
              className="text-xs text-secondary-5 underline"
              onClick={() => setSelectedOrder(detail)}
            >
              Beri rating & ulasan
            </button>
          </div>
        </div>
      ))}

      <RatingModal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        order={selectedOrder}
      />

      <div className="flex flex-col gap-3 mt-8">
        <div className="flex justify-between text-neutral-1">
          <p className="text-base">Subtotal</p>
          <p className="text-base">
            Rp{" "}
            {orders
              .reduce((sum, item) => sum + item.Subtotal, 0)
              .toLocaleString("id-ID")}
          </p>
        </div>

        <div className="flex justify-between text-neutral-1">
          <p className="text-base">Biaya Layanan</p>
          <p className="text-base">
            Rp {payment.order.biaya_layanan.toLocaleString("id-ID")}
          </p>
        </div>

        <div className="flex justify-between text-neutral-1">
          <p className="text-base">Ongkir</p>
          <p className="text-base">
            Rp {payment.order.biaya_ongkir.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <hr className="my-2 border-t border-neutral-3" />

      <div className="flex justify-between text-neutral-1">
        <p className="text-xl font-semibold">Total</p>
        <p className="text-xl font-semibold">
          Rp {payment.jumlah.toLocaleString("id-ID")}
        </p>
      </div>

      <div className="mt-4 pt-4">
        <p className="text-xl font-semibold text-neutral-1">Ringkasan</p>
        <hr className="my-1 border-t border-neutral-3" />
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex justify-between text-neutral-1 items-center">
            <p className="text-base">Nomor Pesanan</p>
            <p className="text-base text-ellipsis overflow-hidden">
              {payment.invoice_id}
            </p>
          </div>
          <div className="flex justify-between text-neutral-1 items-center">
            <p className="text-base">Waktu Pemesanan</p>
            <p className="text-base">{payment.Tanggal}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex justify-between gap-2 text-neutral-1 items-center">
            <p className="text-base">Metode Pembayaran</p>
            <p className="text-base">{payment.order.metode_pembayaran}</p>
          </div>
        </div>

        <div className="flex justify-between mt-8 items-center">
          <p className="text-xl font-semibold">Status Pesanan</p>
          <p className="text-xl font-semibold text-secondary-3">
            {payment.status_barang === "SELESAI" ? "Selesai" : "Dikirim"}
          </p>
        </div>
      </div>
    </div>
  );
}
