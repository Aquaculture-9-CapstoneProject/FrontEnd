import Navbar from "../../common/Navbar";
import ProductRecomendation from "../../common/ProductRecomendation";
import ProductTable from "./ProductTable";
import Summary from "./Summary";

export default function Cart() {
  return (
    <>
      <Navbar />
      <div className="my-6 px-16">
        <h1 className="text-[28px] font-semibold text-neutral-1 mb-3">
          Keranjang Belanja
        </h1>
        <div className="flex gap-6">
          <ProductTable />
          <Summary />
        </div>
      </div>
      <ProductRecomendation title="Rekomendasi untuk kamu" />
    </>
  );
}
