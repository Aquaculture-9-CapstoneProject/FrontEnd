import { useNavigate } from "react-router-dom";

export default function Step({ currentStep }) {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: "Pembelian", isActive: currentStep >= 1 },
    { number: 2, label: "Pembayaran", isActive: currentStep >= 2 },
    { number: 3, label: "Status Pembayaran", isActive: currentStep >= 3 },
  ];

  const StepItem = ({ number, label, isActive }) => (
    <div className="flex flex-col items-center self-stretch my-auto h-8 w-[31px]">
      <div
        className={`flex justify-center items-center px-2 w-8 h-8 rounded-full min-h-[32px] ${
          isActive ? "bg-secondary-5 text-neutral-50" : "bg-neutral-4"
        }`}
      >
        {number}
      </div>
      <div className={`mt-1 text-nowrap ${isActive ? "text-neutral-1" : ""}`}>
        {label}
      </div>
    </div>
  );

  const ProgressBar = ({ isActive }) => (
    <div
      className={`flex flex-1 shrink self-stretch my-auto h-2 basis-0 ${
        isActive ? "bg-secondary-5" : "bg-neutral-4"
      }`}
    />
  );

  const ProgressSteps = () => (
    <div className="flex flex-col px-7 text-base max-w-[569px] max-md:pl-5">
      <div className="flex flex-wrap items-start w-full max-md:max-w-full">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex items-center ${
              index === 0 ? "w-[31px]" : "flex-1 shrink basis-0 min-w-[240px]"
            }`}
          >
            {index > 0 && <ProgressBar isActive={index < currentStep} />}
            <StepItem
              number={step.number}
              label={step.label}
              isActive={step.isActive}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="px-4 py-6 hidden  md:flex flex-col md:flex-row items-center md:px-16">
      {/* Tombol Kembali */}
      <div
        className="flex items-center gap-2 cursor-pointer z-10 mb-4 md:mb-0"
        onClick={() => navigate(-1)}
      >
        <img src="/user/checkout/back.svg" alt="Kembali" />
        <h1 className="font-semibold">Kembali</h1>
      </div>

      <div className="flex-1 justify-center flex -ml-[10%]">
        <ProgressSteps />
      </div>
    </div>
  );
}
