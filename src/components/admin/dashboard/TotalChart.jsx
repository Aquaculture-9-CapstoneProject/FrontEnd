import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const TotalChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Total Transaksi",
        data: [450, 520, 610, 580, 650, 720, 690, 550, 720, 500, 620, 600],
        borderColor: "#1F92C5",
        backgroundColor: "rgba(31, 146, 197, 0.5)",
      },
    ],
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center px-5 pt-2 pb-4 rounded-xl bg-neutral-5 w-full">
      <p className="gap-2.5 self-stretch py-2 w-full text-sm font-semibold leading-loose border-b border-solid border-b-neutral-4 text-neutral-1 max-md:max-w-full">
        Total Transaksi
      </p>

      <div className="flex flex-row items-center justify-center mt-5 w-full">
        {/* Chart */}
        <div className="h-52 w-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TotalChart;
