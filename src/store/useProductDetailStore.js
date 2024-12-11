import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProductDetail } from "../services/productServices";

const useProductDetailStore = create(
  persist(
    (set) => ({
      productDetail: null,
      isLoading: false,
      error: null,
      totalPrice: 0,

      fetchProductDetail: async (productId) => {
        set({ isLoading: true, error: null });
        try {
          const product = await getProductDetail(productId);
          set({
            productDetail: product,
            isLoading: false,
            totalPrice: product ? product.Harga : 0,
          });
        } catch (err) {
          set({ error: err, isLoading: false });
        }
      },
      updateTotalPrice: (quantity) =>
        set((state) => ({
          totalPrice: state.productDetail
            ? state.productDetail.Harga * quantity
            : 0,
        })),

      clearProductDetail: () => set({ productDetail: null, error: null }),
    }),
    {
      name: "product-detail-store",
      getStorage: () => localStorage,
    },
  ),
);

export default useProductDetailStore;
