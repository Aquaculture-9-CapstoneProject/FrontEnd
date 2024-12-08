import React, { useState } from "react";
import OrderDetail from "./OrderDetail";
import SendOrder from "./SendOrder";

export default function OrderTableBody({ orders }) {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSendOrderModalOpen, setIsSendOrderModalOpen] = useState(false);
  const [selectedOrderToSend, setSelectedOrderToSend] = useState(null);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  const handleOpenSendOrderModal = (order) => {
    setSelectedOrderToSend(order);
    setIsSendOrderModalOpen(true);
  };

  const handleCloseSendOrderModal = () => {
    setSelectedOrderToSend(null);
    setIsSendOrderModalOpen(false);
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
          <td>
            {order.status === "Perlu Dikirim" && (
              <button onClick={() => handleOpenSendOrderModal(order)}>
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3333 3.66671H14.25V2.00004C14.25 1.08337 13.5 0.333374 12.5833 0.333374H2.58329C1.66663 0.333374 0.916626 1.08337 0.916626 2.00004V9.50004C0.916626 10.4167 1.66663 11.1667 2.58329 11.1667C2.58329 12.55 3.69996 13.6667 5.08329 13.6667C6.46663 13.6667 7.58329 12.55 7.58329 11.1667H12.5833C12.5833 12.55 13.7 13.6667 15.0833 13.6667C16.4666 13.6667 17.5833 12.55 17.5833 11.1667H18.4166C18.875 11.1667 19.25 10.7917 19.25 10.3334V7.55837C19.25 7.20004 19.1333 6.85004 18.9166 6.55837L17 4.00004C16.8416 3.79171 16.5916 3.66671 16.3333 3.66671ZM5.08329 12C4.62496 12 4.24996 11.625 4.24996 11.1667C4.24996 10.7084 4.62496 10.3334 5.08329 10.3334C5.54163 10.3334 5.91663 10.7084 5.91663 11.1667C5.91663 11.625 5.54163 12 5.08329 12ZM16.3333 4.91671L17.9666 7.00004H14.25V4.91671H16.3333ZM15.0833 12C14.625 12 14.25 11.625 14.25 11.1667C14.25 10.7084 14.625 10.3334 15.0833 10.3334C15.5416 10.3334 15.9166 10.7084 15.9166 11.1667C15.9166 11.625 15.5416 12 15.0833 12Z"
                    fill="#1F92C5"
                  />
                </svg>
              </button>
            )}
          </td>
        </tr>
      ))}

      {/* Render Modal OrderDetail */}
      <OrderDetail
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        order={selectedOrder}
      />

      {/* Render Modal SendOrder */}
      {isSendOrderModalOpen && (
        <SendOrder
          onClose={handleCloseSendOrderModal}
          order={selectedOrderToSend}
        />
      )}
    </>
  );
}
