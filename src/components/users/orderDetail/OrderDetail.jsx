import { useNavigate } from "react-router-dom";
import Navbar from "../../common/Navbar";
import AddressCard from "./AddressCard";
import OrderSummary from "./OrderSummary";

export default function OrderDetail() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="px-16 py-5 flex items-center justify-between">
        <div
          className="flex items-center gap-2 w-[17%] cursor-pointer"
          onClick={() => navigate(-1)} // Navigate back
        >
          <img src="/user/checkout/back.svg" alt="back" />
          <h1 className="font-semibold">Kembali</h1>
        </div>
        <h1 className="text-center font-semibold text-[28px]">
          Detail Pesanan
        </h1>
        <div className="w-[17%]"></div> {/* Penyeimbang */}
      </div>

      <div className="flex justify-center mb-10">
        <div className="mx-16 p-6 rounded-lg border-[1px] border-solid border-neutral-3 w-3/4">
          <AddressCard />
          <OrderSummary />
        </div>
      </div>
    </>
  );
}
