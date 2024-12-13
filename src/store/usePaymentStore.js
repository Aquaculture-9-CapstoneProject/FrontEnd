import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePaymentStore = create(
  persist(
    (set) => ({
      paymentData: {
        invoice_id: "",
        invoice_url: "",
        jumlah: 0,
      },
      setPaymentData: (data) =>
        set((state) => {
          if (
            state.paymentData.invoice_id === data.invoice_id &&
            state.paymentData.invoice_url === data.invoice_url &&
            state.paymentData.jumlah === data.jumlah
          ) {
            return state;
          }
          return {
            paymentData: { ...state.paymentData, ...data },
          };
        }),
    }),
    {
      name: "payment-store",
    },
  ),
);

export default usePaymentStore;
