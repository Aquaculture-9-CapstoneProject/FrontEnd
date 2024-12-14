import ProductHeader from "./ProductHeader";
import FilterSearch from "./FilterSearch";
import Pagination from "./Pagination";
import ProductTable from "./ProductTable";
import AddProduct from "./AddProduct";
import { useEffect, useState } from "react";

import useAdminProductStore from "../../../store/useAdminProductStore";

export default function Product() {
  const {
    products,
    currentPage,
    totalPages,
    fetchProducts,
    setCurrentPage,
    isLoading,
    error,
  } = useAdminProductStore();

  const productsPerPage = 14; // Tetapkan jumlah produk per halaman
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, fetchProducts]);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-[#E4EDF1] h-full">
      <ProductHeader />
      <div className="m-5 sm:m-3 lg:m-7 bg-neutral-5 p-6 rounded-lg shadow-md">
        <FilterSearch
          onAddProductClick={() => setIsAddProductModalOpen(true)}
        />
        <AddProduct
          isOpen={isAddProductModalOpen}
          onClose={() => setIsAddProductModalOpen(false)}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ProductTable products={currentProducts} />
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        setPage={setCurrentPage}
      />
    </div>
  );
}
