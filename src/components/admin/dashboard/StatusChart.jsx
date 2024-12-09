import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusChartt = () => {
  const data = {
    // labels: ["Berhasil", "Gagal"],
    datasets: [
      {
        label: "Status Transaksi",
        data: [70, 30],
        backgroundColor: ["#1F92C5", "#E11D48"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center px-5 pt-2 pb-4 rounded-xl bg-neutral-5 w-full">
      <p className="gap-2.5 self-stretch py-2 w-full text-sm font-semibold leading-loose border-b border-solid border-b-neutral-4 text-neutral-1 max-md:max-w-full">
        Status Transaksi
      </p>
      <div className="flex flex-row items-center justify-center mt-5 w-full">
        {/* Chart */}
        <div className="h-52 w-52">
          <Doughnut data={data} />
        </div>

        {/* Labels */}
        <div className="ml-8 flex flex-col gap-4 text-sm">
          <div className="flex gap-2.5 items-center pr-5 text-xs font-semibold leading-5 whitespace-nowrap text-neutral-1">
            <div className="flex shrink-0 self-stretch my-auto w-8 h-2.5 bg-secondary-5" />
            <p className="self-stretch my-auto">Berhasil</p>
          </div>
          <div className="flex gap-2.5 items-center pr-5 text-xs font-semibold leading-5 whitespace-nowrap text-neutral-1">
            <div className="flex shrink-0 self-stretch my-auto w-8 h-2.5 bg-error-4" />
            <p className="self-stretch my-auto">Gagal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusChartt;
