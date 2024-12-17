import React, { useEffect } from "react";
import OrderHeader from "./OrderHeader";
import FilterSearch from "./FilterSearch";
import Pagination from "./Pagination"
import OrderTable from "./OrderTable";
import useOrderStore from "../../../store/useOrderStore";

export default function Order() {
  const {
    orders,
    isLoading,
    error,
    fetchOrders,
    currentPage,
    totalPages,
  } = useOrderStore();

    useEffect(() => {
        fetchOrders(currentPage);
    }, [fetchOrders, currentPage]);

    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        fetchOrders(page); // Panggil data baru sesuai halaman
      }
    };

  return (
    <div className="bg-[#E4EDF1] h-full">
      <div className="mb-28">
        <OrderHeader />
      </div>
      <div className="m-5 sm:m-3 lg:m-7 bg-neutral-5 p-6 rounded-lg shadow-md">
        <FilterSearch />
        {isLoading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-primary-4"></span>
          </div>
        ) : error ? (
          <p className="text-center text-neutral-3 text-base py-4">Error: {error}</p>
        ) : (
          <OrderTable orders={orders} />
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
