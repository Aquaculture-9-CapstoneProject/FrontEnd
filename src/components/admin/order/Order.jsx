import React, { useState } from "react";
import OrderHeader from "./OrderHeader";
import FilterSearch from "./FilterSearch";
import Pagination from "./Pagination"
import OrderTable from "./OrderTable";

export default function Order() {
  const orders = Array.from({ length: 30 }, (_, index) => ({
    id: `P${(index + 1).toString().padStart(6, "0")}`,
    userName: "JJ Maybank",
    productName: "Ikan Tongkol",
    date: "24 November 2024, 19:00",
    address: "Jl. Pahlawan",
    nominal: "Rp. 56.000",
    status: index % 3 === 0 ? "Perlu Dikirim" : index % 3 === 1 ? "Sedang Dikirim" : "Selesai",
  }));

  const ordersPerPage = 14;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-[#E4EDF1] h-full">
      <OrderHeader />
      <div className="m-5 sm:m-3 lg:m-7 bg-neutral-5 p-6 rounded-lg shadow-md">
        <FilterSearch />
        <OrderTable orders={currentOrders} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        setPage={setCurrentPage}
      />
    </div>
  );
}
