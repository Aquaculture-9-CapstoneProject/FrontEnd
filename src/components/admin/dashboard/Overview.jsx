import useDashboardStore from "../../../store/useDashboardStore";

export default function Overview() {
  const { data } = useDashboardStore();

  const processedOrders = {
    title: "Pesanan Dikirim",
    currentAmount: data.overview.shipped,
    iconUrl: "./admin/dashboard/processed.svg",
    status: "sedang dalam perjalanan",
  };

  const completedOrders = {
    title: "Pesanan Selesai",
    currentAmount: data.overview.completed,
    iconUrl: "./admin/dashboard/completed.svg",
    status: "telah diterima oleh pembeli",
  };

  const renderStats = (data) => (
    <div className="flex overflow-hidden flex-col px-6 py-2 rounded-xl bg-neutral-5 w-full h-min flex-grow">
      <p className="text-[10px] leading-loose text-neutral-2">{data.title}</p>
      <div className="flex gap-7 justify-between items-center w-full">
        <p className="text-xl font-bold leading-none text-primary-8 text-nowrap">
          {data.currentAmount}
        </p>
        <img
          loading="lazy"
          src={data.iconUrl}
          alt={`${data.title} icon`}
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </div>
      <p className="text-[10px] leading-loose text-neutral-2">{data.status}</p>
    </div>
  );

  return (
    <div className="flex gap-4 flex-col md:flex-row justify-between w-full mb-6">
      {renderStats(processedOrders)}
      {renderStats(completedOrders)}
    </div>
  );
}
