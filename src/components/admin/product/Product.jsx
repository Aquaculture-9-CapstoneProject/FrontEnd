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

  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, fetchProducts]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      fetchProducts(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      fetchProducts(newPage);
    }
  };

  return (
    <div className="bg-[#E4EDF1] h-full">
      <div className="mb-28">
        <ProductHeader />
      </div>
      <div className="m-5 sm:m-3 lg:m-7 bg-neutral-5 p-6 rounded-lg shadow-md">
        <FilterSearch
          onAddProductClick={() => setIsAddProductModalOpen(true)}
        />
        <AddProduct
          isOpen={isAddProductModalOpen}
          onClose={() => setIsAddProductModalOpen(false)}
        />
        {isLoading ? (
          <div className="flex justify-center items-center mt-4">
            <span className="loading loading-spinner loading-lg text-primary-4"></span>
          </div>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ProductTable products={products} />
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
