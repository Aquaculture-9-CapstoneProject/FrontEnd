import React, { useState, useEffect } from "react";

export default function EditProduct({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Data statis yang selalu ditampilkan di modal
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
    setFormData({
      productName: staticProduct.productName,
      image: staticProduct.image,
      price: staticProduct.price,
      stock: staticProduct.stock,
      variation: staticProduct.variation,
      category: staticProduct.category,
      description: staticProduct.description,
      advantages: staticProduct.advantages.join("\n"), // Assuming advantages is an array
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-[400px] md:h-[550px] max-w-full mx-4 md:mx-6 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-xl font-semibold text-neutral-1 mb-2">Edit Product</h2>
          <hr className="border-neutral-4 mb-4" />

          {/* Input Fields */}
          <div className="mb-4">
            {/* Image Field */}
            <div className="mb-4 border border-dashed border-secondary-5 rounded-lg text-center">
              <img src={formData.image} alt={formData.productName} className="w-full rounded-lg object-cover" />
            </div>

            {/* Input Fields */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">Nama Produk</label>
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
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">Harga</label>
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
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">Stok</label>
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
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">Variasi</label>
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
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">Kategori</label>
                <div className="dropdown dropdown-end w-full">
                  <div
                    tabIndex={0}
                    role="button"
                    className="input input-bordered w-full text-sm bg-white flex items-center justify-between cursor-pointer"
                  >
                    {formData.category || "Pilih salah satu opsi"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow">
                    <li><a>Ikan</a></li>
                    <li><a>Udang</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">Deskripsi</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="textarea textarea-bordered w-full text-sm"
                placeholder="Masukkan deskripsi produk"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">Keunggulan Produk</label>
              <textarea
                name="advantages"
                value={formData.advantages}
                onChange={handleChange}
                className="textarea textarea-bordered w-full text-sm"
                placeholder="Masukkan keunggulan produk"
              ></textarea>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4">
            <button onClick={onClose} className="bg-neutral-5 border border-2 border-neutral-4 text-sm text-neutral-1 font-semibold rounded-lg py-2 px-4 hover:bg-neutral-4 transition">
              Batal
            </button>
            <button
              className="bg-primary-5 text-sm text-neutral-5 font-semibold rounded-lg py-2 px-4 hover:bg-primary-4 transition"
              onClick={() => console.log("Data saved:", formData)} // Simpan data
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
