export default function ProductDetail({ isOpen, onClose, product }) {
  if (!isOpen) return null;

  const advantages = product.Keunggulan.split("\n");

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box max-w-2xl">
        {/* Header */}
        <h2 className="text-lg font-bold mb-4">Detail Produk</h2>
        <hr className="mb-4" />

        {/* Gambar Produk */}
        <img
          src={product.Gambar || "default-image-url.jpg"}
          alt={product.Nama}
          className="rounded-lg w-full h-48 object-cover mb-6"
        />

        {/* Detail Produk */}
        <div className="mb-4">
          <h3 className="font-semibold">Nama Produk</h3>
          <p className="text-neutral-1">{product.Nama}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-semibold">Harga</h3>
            <p className="text-neutral-1">Rp {product.Harga}</p>
          </div>
          <div>
            <h3 className="font-semibold">Stok</h3>
            <p className="text-neutral-1">{product.Stok}</p>
          </div>
          <div>
            <h3 className="font-semibold">Variasi</h3>
            <p className="text-neutral-1">{product.Variasi}</p>
          </div>
          <div>
            <h3 className="font-semibold">Kategori</h3>
            <p className="text-neutral-1">{product.Kategori}</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Deskripsi</h3>
          <p className="text-neutral-1">{product.Deskripsi}</p>
        </div>

        {/* Keunggulan Produk */}
        <div className="mb-4">
          <h3 className="font-semibold">Keunggulan Produk</h3>
          <ul className="list-disc ml-6 text-neutral-1">
            {advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="modal-action">
          <button onClick={onClose} className="btn btn-outline btn-sm">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
