import { useEffect } from "react";
import Navbar from "../../common/Navbar";
import AddressSection from "./AddressSection";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import ProductList from "./ProductList";
import Step from "./Step";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-16 py-6 flex">
        <div
          className="flex align-top -mt-8 items-center gap-2 w-[17%] cursor-pointer"
          onClick={() => navigate(-1)} // Navigate back
        >
          <img src="/user/checkout/back.svg" alt="back" />
          <h1 className="font-semibold">Kembali</h1>
        </div>

        <div className="flex justify-center w-8/12">
          <Step />
        </div>
      </div>

      <div className="px-16">
        <h1 className="font-semibold text-[28px] mb-5">Pembelian</h1>
        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-6 flex flex-col gap-5">
            <AddressSection />
            <ProductList />
          </div>

          <div className="col-span-4 flex flex-col gap-5">
            <PaymentMethod />
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
}
