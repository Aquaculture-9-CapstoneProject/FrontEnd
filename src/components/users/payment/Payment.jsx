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
      return () => clearTimeout(timer); // Clear timeout untuk menghindari memory leak
    }
  }, [counter]);

  return (
    <>
      <Navbar />
      <Step currentStep={2} />
      <div className="px-16">
        <h1 className="font-semibold text-[28px] mb-5">
          Menunggu Pembayaran Rp 172.000
        </h1>
        <PaymentMethod accountNumber="1823 4994 1245 7349" />
        <CountdownTimer hours={23} minutes={59} seconds={59} />
        <div className="flex gap-6 items-center mt-5">
          <p className="text-sm">jatuh tempo pada</p>
          <p className="text-sm font-bold">23:59, 29 Nov 2024</p>
        </div>
        <Instructions />
      </div>
    </>
  );
}
