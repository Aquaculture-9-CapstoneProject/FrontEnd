import { useState, useEffect } from "react";
import Navbar from "../../common/Navbar";
import Step from "../../common/Step";
import PaymentMethod from "./PaymentMethod";
import CountdownTimer from "./CountdownTimer";
import Instructions from "./Instructions";

export default function Payment() {
  const [counter, setCounter] = useState(59);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <>
      <Navbar />
      <Step currentStep={2} />
      <div className="px-4 sm:px-8 lg:px-16 md:mt-4">
        <h1 className="font-semibold text-[28px] mb-3 sm:mb-5">
          Menunggu Pembayaran Rp 172.000
        </h1>
        <PaymentMethod accountNumber="1823 4994 1245 7349" />
        <CountdownTimer hours={23} minutes={59} seconds={59} />
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center mt-3 sm:mt-5">
          <p className="text-xs sm:text-sm">jatuh tempo pada</p>
          <p className="text-xs sm:text-sm font-bold">23:59, 29 Nov 2024</p>
        </div>
        <Instructions />
      </div>
    </>
  );
}
