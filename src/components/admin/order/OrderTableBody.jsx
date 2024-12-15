import React, { useState } from "react";
import OrderDetail from "./OrderDetail";

export default function OrderTableBody({ orders }) {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {orders.length === 0 ? (
        <tr>
          <td colSpan="6" className="text-center text-neutral-3 text-base py-4">
            Belum ada riwayat pesanan
          </td>
        </tr>
      ) : (
      orders.map((order) => (
        <tr key={order.id}>
          <td
            className="text-secondary-5 text-xs border-b border-neutral-4 cursor-pointer hover:underline"
            onClick={() => handleOpenModal(order)}
          >
            {order.order_id}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.namapengguna}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.produk} <br />
            <span className="text-neutral-3">+2 lainnya</span>
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.tanggaldanwaktu}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.alamat}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.nominal}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4 sm:max-w-[100px] md:max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
            <span
              className={`badge px-2 ${
                order.status === "DIKIRIM"
                  ? "bg-neutral-5 border border-secondary-5 text-secondary-5 text-[10px]"
                  : "text-neutral-1 text-[10px]"
              }`}
            >
              {order.status}
            </span>
          </td>
        </tr>
      )))}

      {/* Render Modal OrderDetail */}
      <OrderDetail
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        order={selectedOrder}
      />
    </>
  );
}
