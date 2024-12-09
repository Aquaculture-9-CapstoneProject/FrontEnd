export default function ProductDetail({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    // Data statis untuk slicing
    const staticProduct = {
      id: "P00001",
      productName: "Ikan Salmon",
      image: "./admin/product/salmon.png",
      category: "Ikan",
      price: "Rp 40.000",
      stock: 20,
      variation: "Salmon Premium",
      description:
        "Hadirkan cita rasa autentik dengan ikan salmon segar, pilihan terbaik untuk sajian sehat dan berkualitas. Cocok untuk berbagai kreasi masakan seperti sashimi, sushi, atau hidangan panggang.",
      advantages: [
        "Berasal dari perairan bersih dan segar.",
        "Diproses dengan standar kebersihan tinggi.",
        "Mengandung omega-3 yang baik untuk kesehatan.",
        "Tekstur lembut dan rasa premium.",
      ],
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-[600px] h-[400px] md:h-[550px] max-w-full mx-4 md:mx-6 overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <h2 className="text-xl font-semibold text-neutral-1 mb-2">Detail Produk</h2>
            <hr className="border-neutral-3 mb-4" />
  
            {/* Gambar Produk */}
            <img
              src={staticProduct.image}
              alt={staticProduct.productName}
              className="rounded-lg w-full h-52 object-cover mb-6"
            />
  
            {/* Detail Produk */}
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-neutral-1">Nama Produk</h3>
              <p className="text-sm text-neutral-2">{staticProduct.productName}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-xs font-semibold text-neutral-1">Harga</h3>
                <p className="text-sm text-neutral-2">{staticProduct.price}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-neutral-1">Stok</h3>
                <p className="text-sm text-neutral-2">{staticProduct.stock}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-neutral-1">Variasi</h3>
                <p className="text-sm text-neutral-2">{staticProduct.variation}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-neutral-1">Kategori</h3>
                <p className="text-sm text-neutral-2">{staticProduct.category}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-neutral-1">Deskripsi</h3>
              <p className="text-sm text-neutral-2">{staticProduct.description}</p>
            </div>
  
            {/* Keunggulan Produk */}
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-neutral-1">Keunggulan Produk</h3>
              <ul className="list-disc ml-6 text-sm text-neutral-2">
                {staticProduct.advantages.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
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
      </div>
    );
  }
  