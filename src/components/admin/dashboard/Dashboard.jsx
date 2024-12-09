import CategoryTable from "./CategoryTable";
import DahsboardHeader from "./DashboardHeader";
import DashboardStats from "./DashbordStats";
import Overview from "./Overview";
import PopularTable from "./PopularTable";
import StatusChart from "./StatusChart";
import TotalChart from "./TotalChart";

export default function Dashboard() {
  return (
    <div className="bg-[#E4EDF1] h-full">
      {/* Header */}
      <DahsboardHeader />

      <DashboardStats />

      <div className="m-5 sm:m-3 lg:m-6 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div className="col-span-2">
          <TotalChart />
        </div>
        <div className="col-span-2">
          <StatusChart />
        </div>

        <div className="col-span-2">
          <Overview />
          <CategoryTable />
        </div>
        <div className="col-span-2">
          <PopularTable />
        </div>
      </div>
    </div>
  );
}
