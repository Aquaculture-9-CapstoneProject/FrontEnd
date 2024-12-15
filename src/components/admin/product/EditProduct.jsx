import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { showToast } from "../../../utils/toastUtils";
import useAdminProductStore from "../../../store/useAdminProductStore";
import { updateProduct } from "../../../services/adminServices";

export default function EditProduct({ isOpen, onClose, product }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { updateProductInStore } = useAdminProductStore();

  useEffect(() => {
    if (product) {
      reset({
        productName: product.Nama || "",
        description: product.Deskripsi || "",
        advantages: product.Keunggulan || "",
        price: product.Harga || "",
        stock: product.Stok || "",
        variation: product.Variasi || "",
        category: product.Kategori || "",
      });
      setImagePreview(product.Gambar || null);
    }
  }, [product, reset]);

  if (!isOpen) return null;

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
      alert("Please upload a valid image file.");
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();

    if (imageFile) formData.append("gambar", imageFile);
    formData.append("nama", data.productName);
    formData.append("deskripsi", data.description);
    formData.append("keunggulan", data.advantages);
    formData.append("harga", data.price);
    formData.append("variasi", data.variation);
    formData.append("kategori", data.category);
    formData.append("stok", data.stock);

    try {
      const response = await updateProduct(product.ID, formData);
      updateProductInStore(response.data);

      showToast("Produk berhasil diperbarui.");
      onClose();
    } catch (error) {
      console.error("Error updating product: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-[400px] md:h-[550px] max-w-full mx-4 md:mx-6 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-neutral-1 mb-2">
            Edit Produk
          </h2>
          <hr className="border-neutral-4 mb-4" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 border border-dashed border-secondary-5 rounded-lg p-6 text-center">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-40 mx-auto mb-4 object-contain"
                />
              ) : (
                <p className="text-sm text-neutral-2">No image selected</p>
              )}
              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label
                htmlFor="imageUpload"
                className="btn btn-sm bg-primary-5 text-white mt-2 cursor-pointer"
              >
                Upload Image
              </label>
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Nama Produk
              </label>
              <input
                type="text"
                {...register("productName", {
                  required: "Nama produk harus diisi.",
                })}
                className={`input input-bordered w-full text-sm ${errors.productName ? "border-error-3" : ""}`}
                placeholder="Nama Produk"
              />
              {errors.productName && (
                <p className="text-xs text-error-3 mt-1">
                  {errors.productName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                  Harga
                </label>
                <input
                  type="number"
                  {...register("price", { required: "Harga harus diisi." })}
                  className={`input input-bordered w-full text-sm ${errors.price ? "border-error-3" : ""}`}
                  placeholder="Harga produk"
                />
                {errors.price && (
                  <p className="text-xs text-error-3 mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                  Stok
                </label>
                <input
                  type="number"
                  {...register("stock", { required: "Stok harus diisi." })}
                  className={`input input-bordered w-full text-sm ${errors.stock ? "border-error-3" : ""}`}
                  placeholder="Stok produk"
                />
                {errors.stock && (
                  <p className="text-xs text-error-3 mt-1">
                    {errors.stock.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                  Variasi
                </label>
                <input
                  type="text"
                  {...register("variation", {
                    required: "Variasi harus diisi.",
                  })}
                  className={`input input-bordered w-full text-sm ${errors.variation ? "border-error-3" : ""}`}
                  placeholder="Variasi produk"
                />
                {errors.variation && (
                  <p className="text-xs text-error-3 mt-1">
                    {errors.variation.message}
                  </p>
                )}
              </div>

              <div>
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
                  <option value="Ikan">Ikan</option>
                  <option value="Udang">Udang</option>
                  <option value="Kerang">Kerang</option>
                  <option value="Ikan Hias">Ikan Hias</option>
                  <option value="Produk Olahan">Produk Olahan</option>
                  <option value="Benih">Benih</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                {errors.category && (
                  <p className="text-xs text-error-3 mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Deskripsi
              </label>
              <textarea
                {...register("description", {
                  required: "Deskripsi harus diisi.",
                })}
                className={`textarea textarea-bordered w-full text-sm ${errors.description ? "border-error-3" : ""}`}
                placeholder="Deskripsi produk"
              ></textarea>
              {errors.description && (
                <p className="text-xs text-error-3 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-neutral-1 mb-2 block">
                Keunggulan Produk
              </label>
              <textarea
                {...register("advantages", {
                  required: "Keunggulan produk harus diisi.",
                })}
                className={`textarea textarea-bordered w-full text-sm ${errors.advantages ? "border-error-3" : ""}`}
                placeholder="Keunggulan produk"
              ></textarea>
              {errors.advantages && (
                <p className="text-xs text-error-3 mt-1">
                  {errors.advantages.message}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
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
                  "Tambah"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
