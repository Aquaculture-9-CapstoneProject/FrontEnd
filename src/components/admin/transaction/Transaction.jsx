import React, { useEffect } from "react";
import TransactionHeader from "./TransactionHeader";
import FilterSearch from "./FilterSearch";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import useTransactionStore from "../../../store/useTransactionStore";

export default function Transaction() {
  const {
    transactions,
    isLoading,
    error,
    fetchTransactions,
    currentPage,
    totalPages,
  } = useTransactionStore();

    useEffect(() => {
        fetchTransactions(currentPage);
    }, [fetchTransactions, currentPage]);

    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        fetchTransactions(page); // Panggil data baru sesuai halaman
      }
    };

  return (
    <div className="bg-[#E4EDF1] h-full">
      <div className="mb-28">
        <TransactionHeader />
      </div>      
      <div className="m-5 sm:m-3 lg:m-7 bg-neutral-5 p-6 rounded-lg shadow-md items-center">
        <FilterSearch />
        {isLoading ? (
                <div className="flex justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-primary-4"></span>
                </div>
            ) : error ? (
                <p className="text-center text-neutral-3 text-base py-4">Error: {error}</p>
            ) : (
                <TransactionTable transactions={transactions} />
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
