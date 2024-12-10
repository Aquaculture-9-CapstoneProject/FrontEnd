import { useNavigate } from "react-router-dom";

const orders = [
  {
    id: 1,
    title: "Belanja",
    date: "16 November 2024",
    status: "Dikirim",
    bgStatus: "bg-secondary-5",
    image: "/user/search/ikan-hias.png",
    productName: "Ikan Salmon",
    details: "4 kg x Rp 40.000",
    additionalInfo: "+ 2 produk lainnya",
    total: "Rp 172.000",
  },
  {
    id: 2,
    title: "Belanja",
    date: "15 November 2024",
    status: "Selesai",
    bgStatus: "bg-primary-5",
    image: "/user/search/ikan-hias.png",
    productName: "Sayuran Organik",
    details: "3 kg x Rp 30.000",
    additionalInfo: "+ 1 produk lainnya",
    total: "Rp 110.000",
  },
  {
    id: 3,
    title: "Belanja",
    date: "14 November 2024",
    status: "Dibatalkan",
    bgStatus: "bg-error-3",
    image: "/user/search/ikan-hias.png",
    productName: "Sayuran Organik",
    details: "3 kg x Rp 30.000",
    additionalInfo: "+ 1 produk lainnya",
    total: "Rp 110.000",
  },
];

export default function OrderCard() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6 mb-5">
      {orders.map((order) => (
        <div
          key={order.id}
          className="mx-4 sm:mx-16 px-6 sm:px-8 py-6 border-[1px] border-solid border-neutral-3 rounded-2xl"
        >
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
            <h1 className="text-base font-semibold">{order.title}</h1>
            <p className="text-sm sm:text-base">{order.date}</p>
            <div
              className={`badge ${order.bgStatus} text-neutral-5 py-2 sm:py-3 text-xs sm:text-sm px-2 sm:px-3`}
            >
              {order.status}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-5">
            <div className="flex gap-4 sm:gap-5">
              <img
                className="rounded-lg w-16 h-16 sm:w-20 sm:h-20"
                src={order.image}
                alt={order.productName}
              />
              <div>
                <h1 className="text-neutral-1 font-semibold text-lg sm:text-xl">
                  {order.productName}
                </h1>
                <p className="text-xs sm:text-sm text-neutral-2">
                  {order.details}
                </p>
                <p className="text-xs mt-3 text-neutral-2">
                  {order.additionalInfo}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 flex flex-col items-end sm:items-center">
              <p className="text-xs sm:text-sm text-neutral-2">Total belanja</p>
              <h1 className="text-lg sm:text-xl font-bold text-neutral-1 mt-1">
                {order.total}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-3 sm:gap-8 mt-4 sm:mt-2">
            {order.status === "Dikirim" && (
              <>
                <button
                  type="button"
                  className="text-xs sm:text-sm py-2 px-3 bg-neutral-4 text-neutral-7 rounded-md 
                     border-2 border-transparent hover:border-neutral-1 
                     hover:text-neutral-6 active:bg-neutral-6 active:text-neutral-8 
                     transition duration-200 font-semibold"
                  onClick={() => navigate("/order-detail")}
                >
                  Lihat Detail Pesanan
                </button>
                <button
                  type="button"
                  className="text-xs sm:text-sm py-2 px-3 bg-primary-5 text-neutral-5 rounded-md font-semibold
                     hover:bg-primary-6 hover:text-neutral-6 
                     active:bg-primary-7 active:text-neutral-8 transition duration-200"
                >
                  Pesanan diterima
                </button>
              </>
            )}
            {order.status === "Selesai" && (
              <button
                type="button"
                className="text-xs sm:text-sm py-2 px-3 bg-primary-5 text-neutral-5 rounded-md font-semibold
                   hover:bg-primary-6 hover:text-neutral-6 
                   active:bg-primary-7 active:text-neutral-8 transition duration-200"
                onClick={() => navigate("/order-detail")}
              >
                Lihat Detail Pesanan
              </button>
            )}
            {order.status === "Dibatalkan" && (
              <button
                type="button"
                className="text-xs sm:text-sm py-2 px-3 bg-neutral-4 text-neutral-7 rounded-md 
                   border-2 border-transparent hover:border-neutral-1 
                   hover:text-neutral-6 active:bg-neutral-6 active:text-neutral-8 
                   transition duration-200 font-semibold"
              >
                Lihat Detail Pesanan
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
