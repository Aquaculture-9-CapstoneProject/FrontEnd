import { useNavigate } from "react-router-dom";

export default function Step({ currentStep }) {
  const navigate = useNavigate();

  const steps = [
    {
      label: "Pembelian",
      icon: "/user/common/step/step1",
      doneIcon: "/user/common/step/step1-done.png",
    },
    {
      label: "Pembayaran",
      icon: "/user/common/step/step2",
      doneIcon: "/user/common/step/step2-done.png",
    },
    {
      label: "Status Pembayaran",
      icon: "/user/common/step/step3",
      doneIcon: "/user/common/step/step3-done.png",
    },
  ];

  return (
    <div className="px-16 py-6 flex">
      <div
        className="flex align-top -mt-8 items-center gap-2 w-[17%] cursor-pointer"
        onClick={() => navigate(-1)} // Navigate back
      >
        <img src="/user/checkout/back.svg" alt="back" />
        <h1 className="font-semibold">Kembali</h1>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center w-8/12">
        <ol className="flex items-center justify-center w-full">
          {steps.map((step, index) => (
            <li key={index}>
              <div className="flex items-center mb-1">
                <img
                  src={index < currentStep ? step.doneIcon : step.icon + ".png"}
                  alt={`step${index + 1}`}
                />
                {index < steps.length - 1 && (
                  <div
                    className={`h-2 w-60 ${
                      index < currentStep - 1
                        ? "bg-secondary-5"
                        : "bg-neutral-4"
                    }`}
                  />
                )}
              </div>
              <h1
                className={`${index === 1 ? "-ml-8" : index === 2 ? "-ml-14" : "-ml-6"}`}
              >
                {step.label}
              </h1>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
