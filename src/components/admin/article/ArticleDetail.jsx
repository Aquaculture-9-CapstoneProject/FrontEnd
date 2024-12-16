export default function ArticleDetail({ isOpen, onClose, article }) {
  console.log(article);
  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-[400px] md:h-[550px] max-w-full mx-4 md:mx-6 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-xl font-semibold text-neutral-1 text-center mt-4 mb-2">
            {article.Judul}
          </h2>
          <p className="text-center text-sm text-neutral-3 mb-6">
            {article.Kategori} • {article.CreatedAt}
          </p>

          {/* Gambar Artikel */}
          <img
            src={article.Gambar}
            alt={article.Judul}
            className="rounded-lg w-full h-52 object-cover mb-6"
          />

          {/* Konten */}
          <div className="mb-4">
            {article.Deskripsi.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
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
