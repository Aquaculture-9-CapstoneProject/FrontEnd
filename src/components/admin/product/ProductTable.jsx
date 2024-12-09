import React from "react";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableBody from "./ProductTableBody";

export default function ProductTable({ products }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <ProductTableHeader />
        </thead>
        <tbody>
          <ProductTableBody products={products} />
        </tbody>
      </table>
    </div>
  );
}
