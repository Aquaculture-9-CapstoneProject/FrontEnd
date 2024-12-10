import React, { useState } from "react";
import TransactionHeader from "./TransactionHeader";
import FilterSearch from "./FilterSearch";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";

export default function Transaction() {
  const transactions = Array.from({ length: 30 }, (_, index) => ({
    id: `TR${index + 1}`.padStart(6, "0"),
    orderId: "P0001",
    date: "24 November 2024, 19:00",
    paymentMethod: "Transfer Bank",
    status: index % 2 === 0 ? "Berhasil" : "Gagal",
  }));

  const transactionsPerPage = 14;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const startIndex = (currentPage - 1) * transactionsPerPage;
  const currentTransactions = transactions.slice(startIndex, startIndex + transactionsPerPage);

  return (
    <div className="bg-[#E4EDF1] h-full">
      <TransactionHeader />
      <div className="m-5 sm:m-3 lg:m-7 bg-neutral-5 p-6 rounded-lg shadow-md">
        <FilterSearch />
        <TransactionTable transactions={currentTransactions} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
