import TransactionTableHeader from "./TransactionTableHeader";
import TransactionTableBody from "./TransactionTableBody";

export default function TransactionTable({ transactions }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <TransactionTableHeader />
        <TransactionTableBody transactions={transactions} />
      </table>
    </div>
  );
}
