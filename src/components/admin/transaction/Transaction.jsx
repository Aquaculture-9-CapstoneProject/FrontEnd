import React, { useState, useEffect } from "react";
import TransactionHeader from "./TransactionHeader";
import FilterSearch from "./FilterSearch";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import useTransactionStore from "../../../store/useTransactionStore";

export default function Transaction() {
  const { transactions, isLoading, error, fetchTransactions } = useTransactionStore();

    useEffect(() => {
        fetchTransactions();
    }, [fetchTransactions]);

  const transactionsPerPage = 14;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const startIndex = (currentPage - 1) * transactionsPerPage;
  const currentTransactions = transactions.slice(startIndex, startIndex + transactionsPerPage);

  return (
    <div className="bg-[#E4EDF1] h-full">
      <div className="mb-28">
        <TransactionHeader />
      </div>      
      <div className="m-5 sm:m-3 lg:m-7 bg-neutral-5 p-6 rounded-lg shadow-md">
        <FilterSearch />
        {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <TransactionTable transactions={transactions} />
            )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
