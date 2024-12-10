import { useState, useEffect } from "react";

export default function CountdownTimer({ hours, minutes, seconds }) {
  const [counter, setCounter] = useState(seconds);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 items-center mt-3 sm:mt-5">
      <p className="text-xs sm:text-sm">Kadaluarsa dalam</p>
      <div className="flex gap-2 bg-error-5 items-center px-2 sm:px-4 rounded-lg py-1">
        <img
          src="./user/payment/schedule.svg"
          alt="schedule"
          className="w-4 sm:w-5"
        />
        <span className="countdown text-white text-xs sm:text-sm font-semibold">
          <span style={{ "--value": hours }}></span>:
          <span style={{ "--value": minutes }}></span>:
          <span style={{ "--value": counter }}></span>
        </span>
      </div>
    </div>
  );
}
