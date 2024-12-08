import React, { useState } from "react";
import ProductHeader from "./ProductHeader";
import FilterSearch from "./FilterSearch";
import Pagination from "./Pagination"
import ProductTable from "./ProductTable";

export default function Product() {
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: `P${(index + 1).toString().padStart(6, "0")}`,
    image: "./admin/product/salmon.png",
    productName: "Ikan Salmon",
    category: "Ikan",
    price: "Rp. 40.000",
    stock: 120,
  }));

  const productsPerPage = 14;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

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
        <FilterSearch />
        <ProductTable products={currentProducts} />
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
