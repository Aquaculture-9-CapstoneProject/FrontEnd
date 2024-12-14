import useDashboardStore from "../../../store/useDashboardStore";
import { formatCurrency } from "../../../utils/currency";

export default function DashboardStats() {
  const { data } = useDashboardStore();
  const revenue = {
    title: "Pendapatan Bulan Ini",
    currentAmount: formatCurrency(data.stats.revenue),
    iconUrl: "./admin/dashboard/credit.svg",
    changeAmount: "Rp 200.000",
    changePercentage: "10%",
    trend: "up",
    trendIconUrl: "./admin/dashboard/up.svg",
  };

  const orders = {
    title: "Pesanan Bulan Ini",
    currentAmount: data.stats.orders,
    iconUrl: "./admin/dashboard/pesanan.svg",
    changeAmount: "30",
    changePercentage: "0.1%",
    trend: "up",
    trendIconUrl: "./admin/dashboard/up.svg",
  };

  const products = {
    title: "Total Produk",
    currentAmount: data.stats.products,
    iconUrl: "./admin/dashboard/produk.svg",
    changeAmount: "10",
    changePercentage: "30%",
    trend: "down",
    trendIconUrl: "./admin/dashboard/down.svg",
  };

  const articles = {
    title: "Total Artikel Diunggah",
    currentAmount: data.stats.articles,
    iconUrl: "./admin/dashboard/artikel.svg",
    changeAmount: "5",
    changePercentage: "0.5%",
    trend: "up",
    trendIconUrl: "./admin/dashboard/up.svg",
  };

  const renderStats = (data) => (
    <div className="flex overflow-hidden flex-col px-6 py-2 rounded-xl bg-neutral-5 w-full h-min flex-grow">
      <p className="text-sm leading-loose text-neutral-2">{data.title}</p>
      <div className="flex gap-4 justify-between items-center mt-2 w-full">
        <p className="text-2xl font-bold leading-none text-primary-8 text-nowrap">
          {data.currentAmount}
        </p>
        <img
          loading="lazy"
          src={data.iconUrl}
          alt={`${data.title} icon`}
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </div>
      <div className="flex gap-2 items-center mt-2 w-full min-h-[24px]">
        <img
          loading="lazy"
          src={data.trendIconUrl}
          alt={`${data.trend} trend indicator`}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <p
          className={`self-stretch text-xs font-semibold leading-loose ${
            data.trend === "down" ? "text-error-3" : "text-primary-7"
          }`}
        >
          {data.changeAmount} ({data.changePercentage})
        </p>{" "}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between w-full px-6 pt-6">
      {renderStats(revenue)}
      {renderStats(orders)}
      {renderStats(products)}
      {renderStats(articles)}
    </div>
  );
}
