import React, { useState } from "react";
import ProductDetail from "./ProductDetail";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

export default function ProductTableBody({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State untuk modal delete
  const [productToDelete, setProductToDelete] = useState(null); // Produk yang akan dihapus
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
    setProductToDelete(product); // Set produk yang akan dihapus
    setIsDeleteModalOpen(true); // Buka modal delete
  };

  const handleCloseDeleteModal = () => {
    setProductToDelete(null); // Reset produk yang akan dihapus
    setIsDeleteModalOpen(false); // Tutup modal delete
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
      products.map((product, index) => (
        <tr key={index}>
          <td
            className="text-secondary-5 text-xs border-b border-neutral-4 cursor-pointer hover:underline"
            onClick={() => handleOpenModal(product)}
          >
            {product.id}
          </td>
          <td className="border-b border-neutral-4">
            <img
              src={product.image}
              alt={product.productName}
              className="product-image rounded-full w-[34px] h-[34px] object-cover"
            />
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {product.productName}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {product.category}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {product.price}
          </td>
          <td className="text-neutral-2 text-xs border-b border-neutral-4">
            {product.stock}
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
                  <path
                    d="M0.498901 12.401V14.9343C0.498901 15.1676 0.682235 15.351 0.915568 15.351H3.4489C3.55723 15.351 3.66557 15.3093 3.74057 15.226L12.8406 6.13431L9.71557 3.00931L0.623901 12.101C0.540568 12.1843 0.498901 12.2843 0.498901 12.401ZM15.2572 3.71764C15.5822 3.39264 15.5822 2.86764 15.2572 2.54264L13.3072 0.592642C12.9822 0.267642 12.4572 0.267642 12.1322 0.592642L10.6072 2.11764L13.7322 5.24264L15.2572 3.71764Z"
                    fill="#0D5B82"
                  />
                </svg>
              </button>
              <button onClick={() => handleOpenDeleteModal(product)}>
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.999959 13.6833C0.999959 14.5999 1.74996 15.3499 2.66663 15.3499H9.33329C10.25 15.3499 11 14.5999 11 13.6833V5.34993C11 4.43326 10.25 3.68326 9.33329 3.68326H2.66663C1.74996 3.68326 0.999959 4.43326 0.999959 5.34993V13.6833ZM11 1.18326H8.91663L8.32496 0.591596C8.17496 0.441596 7.95829 0.34993 7.74163 0.34993H4.25829C4.04163 0.34993 3.82496 0.441596 3.67496 0.591596L3.08329 1.18326H0.999959C0.541626 1.18326 0.166626 1.55826 0.166626 2.0166C0.166626 2.47493 0.541626 2.84993 0.999959 2.84993H11C11.4583 2.84993 11.8333 2.47493 11.8333 2.0166C11.8333 1.55826 11.4583 1.18326 11 1.18326Z"
                    fill="#BE123C"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      )))}

      {/* Modal Detail Produk */}
      <ProductDetail
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Modal Hapus Produk */}
      {isDeleteModalOpen && (
        <DeleteProduct
          product={productToDelete}
          onClose={handleCloseDeleteModal}
        />
      )}

      {/* Modal Edit Produk */}
      <EditProduct
        product={selectedProduct}
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
      />
    </>
  );
}
