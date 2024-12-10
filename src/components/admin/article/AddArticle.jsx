import React from "react";

export default function AddArticle({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-[400px] md:h-[550px] max-w-full mx-4 md:mx-6 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-xl font-semibold text-neutral-1 mb-2">Tambah Artikel</h2>
          <hr className="border-neutral-4 mb-4" />

          {/* Input Fields */}
          <div className="mb-4">
            <div className="mb-4 border border-dashed border-secondary-5 rounded-lg p-6 text-center">
              <p className="text-[10px] text-primary-5 font-semibold cursor-pointer">
                Click to upload, <span className="text-neutral-1">or drag and drop</span>
              </p>
              <p className="text-[10px] text-neutral-2">Max. File Size: 10MB</p>
            </div>
            <div className="mb-4">
              <div className="mb-2">
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                  Judul
                </label>
                <input
                  type="text"
                  className="input input-bordered border-neutral-3 w-full text-sm"
                  placeholder="Judul artikel"
                />
              </div>
              <div className="mb-2">
                <div>
                  <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                    Kategori
                  </label>
                  <div className="dropdown dropdown-end w-full">
                    <div
                      tabIndex={0}
                      role="button"
                      className="input input-bordered w-full text-sm bg-white flex items-center justify-between cursor-pointer"
                    >
                      Pilih salah satu opsi
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
              </div>
              <div className="mb-4">
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                  Isi Artikel
                </label>
                <textarea
                  className="textarea textarea-bordered w-full text-sm"
                  placeholder="Tulis konten artikel"
                ></textarea>
              </div>
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
            <button className="bg-primary-5 text-sm text-neutral-5 font-semibold rounded-lg py-2 px-4 hover:bg-primary-4 transition">
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
