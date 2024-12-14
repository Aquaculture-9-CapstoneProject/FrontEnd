import { useState, useEffect } from "react";

export default function EditProduct({ isOpen, onClose, product }) {
  const [formData, setFormData] = useState({
    productName: "",
    image: "",
    price: "",
    stock: "",
    variation: "",
    category: "",
    description: "",
    advantages: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        productName: product.Nama || "",
        image: product.Gambar || "",
        price: product.Harga || "",
        stock: product.Stok || "",
        variation: product.Variasi || "",
        category: product.Kategori || "",
        description: product.Deskripsi || "",
        advantages: (product.Keunggulan || "").split("\n"),
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Pastikan advantages diubah ke array
    const updatedData = {
      ...formData,
      advantages: formData.advantages.split("\n"),
    };
    console.log("Data saved:", updatedData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-[400px] md:h-[550px] max-w-full mx-4 md:mx-6 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-neutral-1 mb-2">
            Edit Product
          </h2>
          <hr className="border-neutral-4 mb-4" />
          <div className="mb-4">
            <div className="mb-4 border border-dashed border-secondary-5 rounded-lg text-center">
              <img
                src={formData.image}
                alt={formData.productName}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Nama Produk
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="input input-bordered border-neutral-3 w-full text-sm"
                placeholder="Nama Produk"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                  Harga
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="input input-bordered w-full text-sm"
                  placeholder="Masukkan harga per kg"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                  Stok
                </label>
                <input
                  type="text"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="input input-bordered w-full text-sm"
                  placeholder="Jumlah produk saat ini"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                  Variasi
                </label>
                <input
                  type="text"
                  name="variation"
                  value={formData.variation}
                  onChange={handleChange}
                  className="input input-bordered w-full text-sm"
                  placeholder="Variasi produk"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                  Kategori
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="input input-bordered w-full text-sm bg-white"
                >
                  <option value="Ikan">Ikan</option>
                  <option value="Udang">Udang</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Deskripsi
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="textarea textarea-bordered w-full text-sm"
                placeholder="Masukkan deskripsi produk"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Keunggulan Produk
              </label>
              <textarea
                name="advantages"
                value={formData.advantages}
                onChange={handleChange}
                className="textarea textarea-bordered w-full text-sm"
                placeholder="Masukkan keunggulan produk"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button onClick={onClose} className="btn btn-secondary">
              Batal
            </button>
            <button onClick={handleSave} className="btn btn-primary">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
