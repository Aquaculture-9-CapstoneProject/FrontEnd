import Navbar from "../../common/Navbar";
import ProductRecomendation from "../../common/ProductRecomendation";
import ProductTable from "./ProductTable";
import Summary from "./Summary";

export default function Cart() {
  return (
    <>
      <Navbar />
      <div className="my-6 px-4 md:px-8 lg:px-16">
        <h1 className="text-[24px] sm:text-[28px] font-semibold text-neutral-1 mb-3">
          Keranjang Belanja
        </h1>
        <div className="flex flex-wrap gap-6">
          <ProductTable />
          <Summary />
        </div>
      </div>
      <div className="hidden lg:flex">
        <ProductRecomendation title="Rekomendasi untuk kamu" />
      </div>
    </>
  );
}
