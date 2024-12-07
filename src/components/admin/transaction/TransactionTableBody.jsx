export default function TransactionTableBody({ transactions, openModal }) {
  return (
    <tbody>
      {transactions.map((transaction, index) => (
        <tr key={index}>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">{transaction.id}</td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">{transaction.orderId}</td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">{transaction.date}</td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">{transaction.paymentMethod}</td>
          <td>
            <span
              className={`badge ${
                transaction.status === "Berhasil"
                  ? "badge-success bg-neutral-5 border border-secondary-5 text-secondary-5 text-[10px]"
                  : "badge-error bg-neutral-5 border border-error-3 text-error-3 text-[10px]"
              }`}
            >
              {transaction.status}
            </span>
          </td>
          <td>
            <button onClick={() => openModal(transaction)}>
              <svg
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.20003 13.8333C1.20003 14.75 1.95003 15.5 2.8667 15.5H9.53337C10.45 15.5 11.2 14.75 11.2 13.8333V5.5C11.2 4.58333 10.45 3.83333 9.53337 3.83333H2.8667C1.95003 3.83333 1.20003 4.58333 1.20003 5.5V13.8333ZM11.2 1.33333H9.1167L8.52503 0.741667C8.37503 0.591667 8.15837 0.5 7.9417 0.5H4.45837C4.2417 0.5 4.02503 0.591667 3.87503 0.741667L3.28337 1.33333H1.20003C0.741699 1.33333 0.366699 1.70833 0.366699 2.16667C0.366699 2.625 0.741699 3 1.20003 3H11.2C11.6584 3 12.0334 2.625 12.0334 2.16667C12.0334 1.70833 11.6584 1.33333 11.2 1.33333Z"
                  fill="#BE123C"
                />
              </svg>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
