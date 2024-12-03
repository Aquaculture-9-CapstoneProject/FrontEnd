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
      <div className="flex px-16 py-6 gap-8">
        <Filter />
        <FilterProduct />
      </div>
    </>
  );
}
