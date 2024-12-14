import { useState, useEffect } from "react";
import Navbar from "../../common/Navbar";
import Step from "../../common/Step";
import PaymentMethod from "./PaymentMethod";
import CountdownTimer from "./CountdownTimer";
import usePaymentStore from "../../../store/usePaymentStore";
import { useNavigate } from "react-router-dom";
import { fetchPaymentStatus } from "../../../services/productServices";

export default function Payment() {
  const [counter, setCounter] = useState(59);
  const { paymentData } = usePaymentStore();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const statusData = await fetchPaymentStatus(paymentData.invoice_id);

        if (statusData.status === "PAID") {
          navigate("/payment-succes");
        } else if (statusData.status === "EXPIRED") {
          navigate("/payment-failed");
        }
      } catch (error) {
        console.error("Failed to fetch payment status:", error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [paymentData.invoice_id, navigate]);

  return (
    <>
      <Navbar />
      <Step currentStep={2} backPath={"/cart"} />
      <div className="px-4 sm:px-8 lg:px-16 md:mt-4">
        <h1 className="font-semibold text-[28px] mb-3 sm:mb-5 text-center">
          Menunggu Pembayaran Rp {paymentData.jumlah.toLocaleString("id-ID")}
        </h1>
        <PaymentMethod link={paymentData.invoice_url} />
        <CountdownTimer hours={23} minutes={59} seconds={59} />
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 items-center mt-3 sm:mt-5 mb-5">
          <p className="text-xs sm:text-sm">jatuh tempo pada</p>
          <p className="text-xs sm:text-sm font-bold">23:59, 29 Nov 2024</p>
        </div>
      </div>
    </>
  );
}
