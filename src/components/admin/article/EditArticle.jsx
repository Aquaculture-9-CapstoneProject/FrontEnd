import React, { useState, useEffect } from "react";

export default function EditArticle({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Data statis yang selalu ditampilkan di modal
  const staticArticle = {
    id: "P00001",
    title: "Peluang dan Tantangan Akuakultur di Era Modern",
    image: "./admin/article/ikan-segar.png",
    category: "Panduan dan Tips",
    date: "24 November 2024, 19:00",
    content: `Lorem ipsum dolor sit amet consectetur. Eu fringilla ullamcorper massa at malesuada in nibh risus tempor. Congue nunc dictumst pharetra at risus pharetra varius massa risus. Phasellus enim fames quis orci feugiat ut pharetra nam.`,
  };

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    date: "",
    content: "",
  });

  // Mengisi form dengan data statis saat komponen dimuat
  useEffect(() => {
    setFormData({
      title: staticArticle.title,
      image: staticArticle.image,
      category: staticArticle.category,
      date: staticArticle.date,
      content: staticArticle.content,
    });
  }, []);

  // Mengelola perubahan pada input
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
          <h2 className="text-xl font-semibold text-neutral-1 mb-2">
            Edit Artikel
          </h2>
          <hr className="border-neutral-4 mb-4" />

          {/* Konten Modal */}
          <div className="mb-4">
            {/* Gambar Artikel */}
            <div className="mb-4 border border-dashed border-secondary-5 rounded-lg text-center">
              <img
                src={formData.image}
                alt={formData.title}
                className="w-full rounded-lg object-cover"
              />
            </div>

            {/* Input Judul */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Judul
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered border-neutral-3 w-full text-sm"
                placeholder="Judul artikel"
              />
            </div>

            {/* Input Kategori */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Kategori
              </label>
              <div className="dropdown dropdown-end w-full">
                <div
                  tabIndex={0}
                  role="button"
                  className="input input-bordered w-full text-sm bg-white flex items-center justify-between cursor-pointer"
                >
                  {formData.category || "Pilih salah satu opsi"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
                >
                  <li>
                    <a>Panduan dan Tips</a>
                  </li>
                  <li>
                    <a>Tips</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Input Konten Artikel */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Isi Artikel
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="textarea textarea-bordered w-full text-sm"
                placeholder="Tulis konten artikel"
              ></textarea>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="bg-neutral-5 border border-2 border-neutral-4 text-sm text-neutral-1 font-semibold rounded-lg py-2 px-4 hover:bg-neutral-4 transition"
            >
              Batal
            </button>
            <button
              className="bg-primary-5 text-sm text-neutral-5 font-semibold rounded-lg py-2 px-4 hover:bg-primary-4 transition"
              onClick={() => console.log("Data saved:", formData)}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
