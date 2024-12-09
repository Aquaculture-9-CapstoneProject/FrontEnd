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
      {orders.map((order, index) => (
        <tr key={index}>
          <td
            className="text-secondary-5 text-xs border-b border-neutral-4 cursor-pointer hover:underline"
            onClick={() => handleOpenModal(order)}
          >
            {order.id}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.userName}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.productName} <br />
            <span className="text-neutral-3">+2 lainnya</span>
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.date}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.address}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {order.nominal}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4 sm:max-w-[100px] md:max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
            <span
              className={`badge px-2 ${
                order.status === "Perlu Dikirim"
                  ? "bg-neutral-5 border border-neutral-1 text-neutral-1 text-[10px]"
                  : order.status === "Sedang Dikirim"
                  ? "bg-neutral-5 border border-secondary-5 text-secondary-5 text-[10px]"
                  : "text-neutral-1 text-[10px]"
              }`}
            >
              {order.status}
            </span>
          </td>
        </tr>
      ))}

      {/* Render Modal OrderDetail */}
      <OrderDetail
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        order={selectedOrder}
      />
    </>
  );
}
