import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProductDetail } from "../services/productServices";

const useProductDetailStore = create(
  persist(
    (set) => ({
      productDetail: null,
      isLoading: false,
      error: null,

      fetchProductDetail: async (productId) => {
        set({ isLoading: true, error: null });
        try {
          const product = await getProductDetail(productId);
          set({ productDetail: product, isLoading: false });
        } catch (err) {
          set({ error: err, isLoading: false });
        }
      },

      clearProductDetail: () => set({ productDetail: null, error: null }),
    }),
    {
      name: "product-detail-store",
      getStorage: () => localStorage,
    },
  ),
);

export default useProductDetailStore;
