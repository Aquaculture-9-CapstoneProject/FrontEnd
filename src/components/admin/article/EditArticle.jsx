import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { showToast } from "../../../utils/toastUtils";
import useAdminArticleStore from "../../../store/useAdminArticleStore";
import { updateArticle } from "../../../services/adminServices";

export default function EditArticle({ isOpen, onClose, article }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [imagePreview, setImagePreview] = useState(article?.Gambar || null);
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { updateArticleInStore } = useAdminArticleStore();

  useEffect(() => {
    if (article) {
      reset({
        title: article.Judul,
        category: article.Kategori,
        content: article.Deskripsi,
      });
      setImagePreview(article.Gambar);
    }
  }, [article, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();

    // Menambahkan data ke FormData
    if (imageFile) formData.append("gambar", imageFile);
    formData.append("judul", data.title);
    formData.append("kategori", data.category);
    formData.append("deskripsi", data.content);

    try {
      const response = await updateArticle(article.ID, formData);
      setIsLoading(false);
      updateArticleInStore(response.data);
      reset();
      setImagePreview(null);
      setImageFile(null);
      onClose();
      showToast("Artikel berhasil diperbarui.");
    } catch (error) {
      console.error("Error: ", error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      alert("Silakan unggah file gambar yang valid.");
    }
  };

  const handleCancel = () => {
    setImagePreview(article?.Gambar || null);
    setImageFile(null);
    reset({
      title: article?.Judul || "",
      category: article?.Kategori || "",
      content: article?.Deskripsi || "",
    });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-[550px] max-w-full mx-4 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-xl font-semibold text-neutral-1 mb-2">
            Edit Artikel
          </h2>
          <hr className="border-neutral-4 mb-4" />

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Upload Gambar */}
            <div className="mb-4 border border-dashed border-secondary-5 rounded-lg p-6 text-center">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-40 mx-auto mb-4 object-contain"
                />
              ) : (
                <>
                  <p className="text-[10px] text-primary-5 font-semibold cursor-pointer">
                    Click to upload,{" "}
                    <span className="text-neutral-1">or drag and drop</span>
                  </p>
                  <p className="text-[10px] text-neutral-2">
                    Max. File Size: 10MB
                  </p>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                {...register("image")}
                className="hidden"
                id="imageUpload"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="imageUpload"
                className="btn btn-sm bg-primary-5 text-white mt-2 cursor-pointer"
              >
                Upload Image
              </label>
            </div>

            {/* Judul */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Judul Artikel
              </label>
              <input
                type="text"
                {...register("title", {
                  required: "Judul artikel harus diisi.",
                })}
                className={`input input-bordered w-full text-sm ${errors.title ? "border-error-3" : ""}`}
                placeholder="Judul artikel"
              />
              {errors.title && (
                <p className="text-xs text-error-3 mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Kategori */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Kategori
              </label>
              <select
                {...register("category", {
                  required: "Kategori harus dipilih.",
                })}
                className={`input input-bordered w-full text-sm ${errors.category ? "border-error-3" : ""}`}
              >
                <option value="">Pilih salah satu opsi</option>
                <option value="Panduan dan Tips">Panduan dan Tips</option>
                <option value="Resep dan Kuliner">Resep dan Kuliner</option>
                <option value="Resep dan Kuliner">Kesehatan</option>
              </select>
              {errors.category && (
                <p className="text-xs text-error-3 mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Konten */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Isi Artikel
              </label>
              <textarea
                {...register("content", {
                  required: "Isi artikel harus diisi.",
                })}
                className={`textarea textarea-bordered w-full text-sm ${errors.content ? "border-error-3" : ""}`}
                placeholder="Tulis konten artikel"
              ></textarea>
              {errors.content && (
                <p className="text-xs text-error-3 mt-1">
                  {errors.content.message}
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-neutral-5 border-2 border-neutral-4 text-sm text-neutral-1 font-semibold rounded-lg py-2 px-4 hover:bg-neutral-4 transition"
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-primary-5 text-sm text-neutral-5 font-semibold rounded-lg py-2 px-4 hover:bg-primary-4 transition"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Simpan"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
