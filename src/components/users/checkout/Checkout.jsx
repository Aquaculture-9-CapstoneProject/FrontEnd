import { useEffect } from "react";
import Navbar from "../../common/Navbar";
import AddressSection from "./AddressSection";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import ProductList from "./ProductList";
import Step from "../../common/Step";

export default function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Step currentStep={1} />

      <div className="px-4 sm:px-8 md:px-16 mb-10">
        <h1 className="font-semibold text-[24px] md:text-[28px] mb-5 mt-3">
          Pembelian
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          <div className="col-span-1 md:col-span-6 flex flex-col gap-5">
            <AddressSection />
            <ProductList />
          </div>
          <div className="col-span-1 md:col-span-4 flex flex-col gap-5">
            <PaymentMethod />
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
}
