import { useEffect } from "react";
import useDashboardStore from "../../../store/useDashboardStore";
import DahsboardHeader from "./DashboardHeader";
import DashboardStats from "./DashbordStats";
import TotalChart from "./TotalChart";
import StatusChart from "./StatusChart";
import Overview from "./Overview";
import CategoryTable from "./CategoryTable";
import PopularTable from "./PopularTable";

export default function Dashboard() {
  const { loading, error, fetchDashboardData } = useDashboardStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#E4EDF1] h-full">
      {/* Header */}
      <div className="mb-24">
        <DahsboardHeader />
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-4">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
