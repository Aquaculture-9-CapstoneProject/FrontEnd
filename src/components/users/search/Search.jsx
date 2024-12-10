import { useEffect } from "react";
import Navbar from "../../common/Navbar";
import Filter from "./Filter";
import FilterProduct from "./FilterProduct";

export default function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row px-4 md:px-16 py-6 gap-4 md:gap-8">
        <Filter />
        <FilterProduct />
      </div>
    </>
  );
}
