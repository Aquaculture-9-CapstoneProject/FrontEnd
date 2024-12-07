import React, { useState } from "react";
import TransactionTableHeader from "./TransactionTableHeader";
import TransactionTableBody from "./TransactionTableBody";
import DeleteTransaction from "./DeleteTransaction";

export default function TransactionTable({ transactions }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <TransactionTableHeader />
        <TransactionTableBody transactions={transactions} openModal={openModal} />
      </table>

      {/* Modal */}
      {isModalOpen && (
        <DeleteTransaction transaction={selectedTransaction} onClose={closeModal} />
      )}
    </div>
  );
}
