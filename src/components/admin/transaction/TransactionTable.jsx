import React, { useState } from "react";
import TransactionTableHeader from "./TransactionTableHeader";
import TransactionTableBody from "./TransactionTableBody";
import DeleteTransaction from "./DeleteTransaction";

export default function TransactionTable({ transactions }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState(null);

  const openDeleteModal = (id) => {
    setSelectedTransactionId(id);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <TransactionTableHeader />
        <TransactionTableBody transactions={transactions} onDeleteClick={openDeleteModal} />
      </table>

      {/* Modal */}
      {isDeleteModalOpen && (
        <DeleteTransaction transaction={selectedTransactionId} onClose={() => setIsDeleteModalOpen(false)} />
      )}
    </div>
  );
}
