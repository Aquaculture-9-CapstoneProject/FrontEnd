export default function OrderDetail({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    // Data statis untuk slicing
    const staticOrder = {
      id: "P00001",
      userName: "JJ Maybank",
      address: "Jl. Pahlawan",
      date: "24 November 2024, 19.00",
      products: [
        { name: "Ikan Tongkol", quantity: "x2 kg", variation: "Tongkol Premium" },
        { name: "Nugget Ikan", quantity: "x10 gram", variation: "Teri" },
        { name: "Ikan Salmon", quantity: "x1 kg", variation: "Salmon Premium" }
      ],
      nominal: "Rp 56.000",
      status: "Perlu Dikirim"
    };
  
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
              <span>{staticOrder.id}</span>
            </div>
  
            {/* Nama Pengguna */}
            <div className="flex justify-between text-sm text-neutral-2">
              <span className="font-semibold text-neutral-1">Nama Pengguna</span>
              <span>{staticOrder.userName}</span>
            </div>
  
            {/* Alamat */}
            <div className="flex justify-between text-sm text-neutral-2">
              <span className="font-semibold text-neutral-1">Alamat</span>
              <span>{staticOrder.address}</span>
            </div>
  
            {/* Tanggal dan Waktu Pemesanan */}
            <div className="flex justify-between text-sm text-neutral-2">
              <span className="font-semibold text-neutral-1">Tanggal dan Waktu Pemesanan</span>
              <span>{staticOrder.date}</span>
            </div>
  
            {/* Produk */}
            <div className="text-sm text-neutral-2">
              <span className="font-semibold text-neutral-1">Produk</span>
              <ul className="mt-2">
                {staticOrder.products.map((product, index) => (
                  <li key={index} className="flex justify-between pt-2">
                    <span>{product.name} <br/> <span className="text-xs text-neutral-3">{product.variation}</span></span>
                    <span>{product.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Nominal */}
            <div className="flex justify-between text-sm text-neutral-2">
              <span className="font-semibold text-neutral-1">Nominal</span>
              <span>{staticOrder.nominal}</span>
            </div>
  
            {/* Status */}
            <div className="flex justify-between text-sm text-neutral-2">
              <span className="font-semibold text-neutral-1">Status</span>
              <span className="px-2 py-1 rounded-full text-sm bg-neutral-5 border border-neutral-1 text-neutral-1 text-[10px]">
                {staticOrder.status}
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
  