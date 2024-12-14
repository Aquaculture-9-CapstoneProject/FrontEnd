import { useEffect, useState } from "react";
import { totalIncomeDummy } from "../../../services/adminServices";

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
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await totalIncomeDummy();
        const { message } = response;

        const labels = message.map((item) => item.Bulan);
        const data = message.map((item) => item.Jumlah);

        setChartData({
          labels,
          datasets: [
            {
              fill: true,
              label: "Total Pendapatan",
              data,
              borderColor: "#1F92C5",
              backgroundColor: "rgba(31, 146, 197, 0.5)",
            },
          ],
        });
      } catch (error) {
        console.error("Gagal memuat data chart:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center px-5 pt-2 pb-4 rounded-xl bg-neutral-5 w-full">
      <p className="gap-2.5 self-stretch py-2 w-full text-sm font-semibold leading-loose border-b border-solid border-b-neutral-4 text-neutral-1 max-md:max-w-full">
        Total Pendapatan
      </p>

      <div className="flex flex-row items-center justify-center w-full">
        {/* Chart */}
        <div className="h-full w-full">
          {chartData ? (
            <Line data={chartData} options={options} />
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalChart;
