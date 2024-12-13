import { useNavigate } from "react-router-dom";
import Navbar from "../../common/Navbar";
import Step from "../../common/Step";
import usePaymentStore from "../../../store/usePaymentStore";
import { useEffect, useState } from "react";
import { fetchPaymentDetail } from "../../../services/productServices";
import { formatCurrency } from "../../../utils/currency";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function PaymentSucces() {
  const navigate = useNavigate();
  const { paymentData } = usePaymentStore();
  const [paymentDetail, setPaymentDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "d MMMM yyyy, HH.mm 'WIB'", { locale: id });
  };
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await fetchPaymentDetail(paymentData.invoice_id);
        setPaymentDetail(data.response.payment);
        console.log(data.response.payment);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (paymentData?.invoice_id) {
      fetchDetail();
    }
  }, [paymentData?.invoice_id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-6">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { order, Tanggal, jumlah } = paymentDetail;

  return (
    <>
      <Navbar />
      <Step currentStep={3} backPath="/cart" />

      <div className="flex flex-col items-center justify-center px-4 sm:px-8 text-neutral-1">
        <h1 className="font-semibold text-2xl sm:text-[28px] mb-5 text-center mt-4">
          Pembayaran Berhasil
        </h1>
        <img
          src="./user/payment/succes.png"
          alt="success"
          className="w-40 sm:w-80 py-2"
        />
        <p className="text-sm sm:text-base text-center w-full sm:w-8/12 lg:w-6/12">
          Yea, pembayaranmu udah kami terima! Cek detailnya di bawah ini ya!
        </p>
        <div className="p-4 rounded-[10px] border-2 border-solid border-neutral-3 mt-5 w-full sm:w-8/12 lg:w-6/12">
          <h1 className="text-left text-base sm:text-lg font-semibold">
            Detail Transaksi
          </h1>
          <hr className="my-2 border-t border-neutral-3" />
          <div className="flex flex-col gap-2 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span>Nomor Pesanan</span>
              <span>{paymentDetail.invoice_id}</span>
            </div>
            <div className="flex justify-between">
              <span>Waktu Pemesanan</span>
              <span>{formatDate(Tanggal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Nomor Transaksi</span>
              <span>{paymentDetail.id}</span>
            </div>
            <div className="flex justify-between">
              <span>Metode Pembayaran</span>
              <span>{order.metode_pembayaran}</span>
            </div>
            <div className="flex justify-between">
              <span>Waktu Pembayaran</span>
              <span>{formatDate(Tanggal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(order.details[0].Subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Layanan</span>
              <span>{formatCurrency(order.biaya_layanan)}</span>
            </div>
            <div className="flex justify-between">
              <span>Ongkir</span>
              <span>{formatCurrency(order.biaya_ongkir)}</span>
            </div>
            <hr className="my-2 border-t border-neutral-3" />
            <div className="flex justify-between text-lg sm:text-xl font-semibold">
              <span>Total Harga</span>
              <span>{formatCurrency(jumlah)}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 w-full sm:w-8/12 lg:w-6/12 mb-8">
          <button
            type="button"
            className="w-full py-3 px-6 bg-primary-5 text-neutral-5 rounded-md font-semibold
              hover:bg-primary-6 hover:text-neutral-6 
              active:bg-primary-7 active:text-neutral-8 transition duration-200"
            onClick={() => navigate("/order")}
          >
            Lihat Daftar Pesanan
          </button>
          <button
            type="button"
            className="w-full py-3 px-6 bg-neutral-4 text-neutral-7 rounded-md
              border-2 border-transparent hover:border-neutral-1 
              hover:text-neutral-6 active:bg-neutral-6 active:text-neutral-8 
              transition duration-200 font-semibold"
            onClick={() => navigate("/home")}
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </>
  );
}
