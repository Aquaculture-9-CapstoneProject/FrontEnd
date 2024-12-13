import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCheckoutStore = create(
  persist(
    (set) => ({
      loading: false,
      orderData: null,
      setLoading: (loading) => set({ loading }),
      setOrderData: (data) => set({ orderData: data }),
    }),
    {
      name: "checkout-store",
      getStorage: () => localStorage,
    },
  ),
);
