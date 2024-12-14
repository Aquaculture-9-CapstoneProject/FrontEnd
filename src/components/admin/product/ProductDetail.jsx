export default function ProductDetail({ isOpen, onClose, product }) {
  if (!isOpen) return null;

  const advantages = product.Keunggulan.split("\n");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-[400px] md:h-[550px] max-w-full mx-4 md:mx-6 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-xl font-semibold text-neutral-1 mb-2">
            Detail Produk
          </h2>
          <hr className="border-neutral-3 mb-4" />

          {/* Gambar Produk */}
          <img
            src={product.Gambar}
            alt={product.Nama}
            className="rounded-lg w-full h-52 object-cover mb-6"
          />

          {/* Detail Produk */}
          <div className="mb-4">
            <h3 className="text-xs font-semibold text-neutral-1">
              Nama Produk
            </h3>
            <p className="text-sm text-neutral-2">{product.Nama}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-xs font-semibold text-neutral-1">Harga</h3>
              <p className="text-sm text-neutral-2">{product.Harga}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-neutral-1">Stok</h3>
              <p className="text-sm text-neutral-2">{product.Stok}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-neutral-1">Variasi</h3>
              <p className="text-sm text-neutral-2">{product.Variasi}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-neutral-1">Kategori</h3>
              <p className="text-sm text-neutral-2">{product.Kategori}</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xs font-semibold text-neutral-1">Deskripsi</h3>
            <p className="text-sm text-neutral-2">{product.Deskripsi}</p>
          </div>

          {/* Keunggulan Produk */}
          <div className="mb-4">
            <h3 className="text-xs font-semibold text-neutral-1">
              Keunggulan Produk
            </h3>
            <ul className="list-disc ml-6 text-sm text-neutral-2">
              {advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-neutral-5 border-2 border-neutral-4 text-neutral-1 font-semibold rounded-lg py-2 px-4 hover:bg-neutral-4 transition"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
