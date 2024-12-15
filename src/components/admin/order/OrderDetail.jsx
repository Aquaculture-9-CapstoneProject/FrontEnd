import { formatCurrency } from "../../../utils/currency";

export default function OrderDetail({ isOpen, onClose, order }) {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-neutral-5 rounded-lg shadow-lg w-[90%] max-w-[457px] p-6 relative">
        {/* Header */}
        <h2 className="text-xl font-semibold text-neutral-1">Detail Pesanan</h2>
        <hr className="my-4 border-neutral-3" />

        {/* Konten */}
        <div className="space-y-4">
          {/* ID */}
          <div className="flex justify-between text-sm text-neutral-2">
            <span className="font-semibold text-neutral-1">ID</span>
            <span>{order.order_id}</span>
          </div>

          {/* Nama Pengguna */}
          <div className="flex justify-between text-sm text-neutral-2">
            <span className="font-semibold text-neutral-1">Nama Pengguna</span>
            <span>{order.namapengguna}</span>
          </div>

          {/* Alamat */}
          <div className="flex justify-between text-sm text-neutral-2">
            <span className="font-semibold text-neutral-1">Alamat</span>
            <span>{order.alamat}</span>
          </div>

          {/* Tanggal dan Waktu Pemesanan */}
          <div className="flex justify-between text-sm text-neutral-2">
            <span className="font-semibold text-neutral-1">Tanggal dan Waktu Pemesanan</span>
            <span>{order.tanggaldanwaktu}</span>
          </div>

          {/* Produk */}
          <div className="text-sm text-neutral-2">
            <span className="font-semibold text-neutral-1">Produk</span>
            <ul className="mt-2">
              {order.produk.map((item, index) => (
                <li key={index} className="flex justify-between pt-2">
                  <span>
                    {item.nama} <br />
                    <span className="text-xs text-neutral-3">
                      {item.variasi}
                    </span>
                  </span>
                  <span>x{item.kuantitas}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Total Nominal */}
          <div className="flex justify-between text-sm text-neutral-2">
            <span className="font-semibold text-neutral-1">Total Nominal</span>
            <span>
              {formatCurrency(order.produk.reduce((acc, p) => acc + p.nominal, 0))}
            </span>
          </div>

          {/* Status */}
          <div className="flex justify-between text-sm text-neutral-2">
            <span className="font-semibold text-neutral-1">Status</span>
            <span
              className={`badge px-2 ${
                order.status === "DIKIRIM"
                  ? "bg-neutral-5 border border-secondary-5 text-secondary-5 text-[10px]"
                  : "text-neutral-1 text-[10px] bg-neutral-5 border border-neutral-5"
              }`}
            >
              {order.status || "Tidak ada status"}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-neutral-5 border border-2 border-neutral-4 text-neutral-1 font-semibold rounded-lg py-2 px-4 hover:bg-neutral-4 transition"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
