import React from "react";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableBody from "./OrderTableBody";

export default function OrderTable({ orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <OrderTableHeader />
        </thead>
        <tbody>
          <OrderTableBody orders={orders} />
        </tbody>
      </table>
    </div>
  );
}
