import { useState } from "react";
import ProductDetail from "./ProductDetail";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

export default function ProductTableBody({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleOpenDeleteModal = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setProductToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleOpenEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedProduct(null);
    setIsEditModalOpen(false);
  };

  return (
    <>
      {products.length === 0 ? (
        <tr>
          <td colSpan="6" className="text-center text-neutral-3 text-base py-4">
            Belum ada produk yang ditambahkan
          </td>
        </tr>
      ) : (
        products.map((product) => (
          <tr key={product.ID}>
            <td
              className="text-secondary-5 text-xs border-b border-neutral-4 cursor-pointer hover:underline"
              onClick={() => handleOpenModal(product)}
            >
              {product.ID}
            </td>
            <td className="border-b border-neutral-4">
              <img
                src={product.Gambar || "default-image-url.jpg"}
                alt={product.Nama || "Produk"}
                className="product-image rounded-full w-[34px] h-[34px] object-cover"
              />
            </td>
            <td className="text-neutral-2 text-xs border-b border-neutral-4">
              {product.Nama}
            </td>
            <td className="text-neutral-2 text-xs border-b border-neutral-4">
              {product.Kategori}
            </td>
            <td className="text-neutral-2 text-xs border-b border-neutral-4">
              Rp {product.Harga.toLocaleString("id-ID")}
            </td>
            <td className="text-neutral-2 text-xs border-b border-neutral-4">
              {product.Stok}
            </td>
            <td className="border-b border-neutral-4">
              <div className="flex items-center gap-2">
                <button onClick={() => handleOpenEditModal(product)}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="..." fill="currentColor" />
                  </svg>
                </button>
                <button onClick={() => handleOpenDeleteModal(product)}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.498901 12.401V14.9343C0.498901 15.1676 0.682235 15.351 0.915568 15.351H3.4489C3.55723 15.351 3.66557 15.3093 3.74057 15.226L12.8406 6.13431L9.71557 3.00931L0.623901 12.101C0.540568 12.1843 0.498901 12.2843 0.498901 12.401ZM15.2572 3.71764C15.5822 3.39264 15.5822 2.86764 15.2572 2.54264L13.3072 0.592642C12.9822 0.267642 12.4572 0.267642 12.1322 0.592642L10.6072 2.11764L13.7322 5.24264L15.2572 3.71764Z"
                      fill="#0D5B82"
                    />
                  </svg>{" "}
                </button>
              </div>
            </td>
          </tr>
        ))
      )}
      {/* Modals */}
      {isModalOpen && (
        <ProductDetail product={selectedProduct} onClose={handleCloseModal} />
      )}
      {isDeleteModalOpen && (
        <DeleteProduct
          product={productToDelete}
          onClose={handleCloseDeleteModal}
        />
      )}
      {isEditModalOpen && (
        <EditProduct product={selectedProduct} onClose={handleCloseEditModal} />
      )}
    </>
  );
}
