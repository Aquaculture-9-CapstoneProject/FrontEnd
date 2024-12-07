import { useState } from "react";
import RatingModal from "./RatingModal";

export default function OrderSummary() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const orders = [
    {
      id: 1,
      name: "Ikan Salmon",
      description: "Sisik putih",
      quantity: 4,
      price: 42000,
      image: "/user/search/ikan-hias.png",
    },
    {
      id: 2,
      name: "Ikan Salmon",
      description: "Sisik putih",
      quantity: 4,
      price: 42000,
      image: "/user/search/ikan-hias.png",
    },
    {
      id: 3,
      name: "Ikan Salmon",
      description: "Sisik putih",
      quantity: 4,
      price: 42000,
      image: "/user/search/ikan-hias.png",
    },
    {
      id: 4,
      name: "Ikan Salmon",
      description: "Sisik putih",
      quantity: 4,
      price: 42000,
      image: "/user/search/ikan-hias.png",
    },
  ];

  return (
    <div className="mt-3 p-[18px]">
      <h1 className="text-xl font-semibold text-neutral-1">
        Ringkasan Pesanan
      </h1>

      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between">
          <div className="mt-5 flex gap-5">
            <img
              className="rounded-lg w-16 h-16"
              src={order.image}
              alt={order.name}
            />
            <div>
              <h1 className="text-neutral-1 font-semibold text-base">
                {order.name}
              </h1>
              <p className="text-sm text-neutral-2">{order.description}</p>
              <p className="text-[10px] text-neutral-2">x {order.quantity}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end gap-2">
            <h1 className="text-base font-semibold text-neutral-1 mt-1">
              Rp {order.price.toLocaleString("id-ID")}
            </h1>
            <button
              className="text-xs text-secondary-5 underline"
              onClick={() => setSelectedOrder(order)}
            >
              Beri rating & ulasan
            </button>{" "}
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
          <p className="text-base">Rp 160.000</p>
        </div>

        <div className="flex justify-between text-neutral-1">
          <p className="text-base">Biaya Layanan</p>
          <p className="text-base">Rp 2.000</p>
        </div>

        <div className="flex justify-between text-neutral-1">
          <p className="text-base">Ongkir</p>
          <p className="text-base">Rp 10.000</p>
        </div>
      </div>
      <hr className="my-2 border-t border-neutral-3" />
      <div className="flex justify-between text-neutral-1">
        <p className="text-xl font-semibold">Total</p>
        <p className="text-xl font-semibold">Rp 170.000</p>
      </div>
      <div className="mt-4 pt-4">
        <p className="text-xl font-semibold text-neutral-1">Ringkasan</p>
        <hr className="my-1 border-t border-neutral-3" />
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex justify-between text-neutral-1">
            <p className="text-base">Nomor Pesanan</p>
            <p className="text-base">P0000001234</p>
          </div>
          <div className="flex justify-between text-neutral-1">
            <p className="text-base">Waktu Pemesanan</p>
            <p className="text-base">27 November 2024, 11.26 WIB</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex justify-between gap-2 text-neutral-1">
            <p className="text-base">Nomor Transaksi</p>
            <p className="text-base">TR0012193890</p>
          </div>
          <div className="flex justify-between gap-2 text-neutral-1">
            <p className="text-base">Metode Pembayaran</p>
            <p className="text-base">Transfer Bank</p>
          </div>
          <div className="flex justify-between gap-2 text-neutral-1">
            <p className="text-base">Waktu Pembayaran</p>
            <p className="text-base">27 November 2024, 11.26 WIB</p>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <p className="text-xl font-semibold">Status Pesanan</p>
          <p className="text-xl font-semibold text-secondary-3">Berhasil</p>
        </div>
      </div>
    </div>
  );
}
