import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOrderDetailStore = create(
  persist(
    (set) => ({
      orderDetail: null,
      setOrderDetail: (order) => set({ orderDetail: order }),
    }),
    {
      name: "order-detail-storage",
      getStorage: () => localStorage,
    },
  ),
);

export default useOrderDetailStore;
