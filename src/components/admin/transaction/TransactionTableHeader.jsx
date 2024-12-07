export default function TransactionTableHeader() {
    return (
      <thead>
        <tr>
          {["ID", "ID Pesanan", "Tanggal dan Waktu Pembayaran", "Metode Pembayaran", "Status", "Aksi"].map(
            (header, index) => (
              <th
                key={index}
                className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3"
              >
                {header}
              </th>
            )
          )}
        </tr>
      </thead>
    );
  }
  