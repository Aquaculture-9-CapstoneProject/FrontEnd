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
      quantity: 1,

      fetchProductDetail: async (productId) => {
        set({ isLoading: true, error: null });
        try {
          const product = await getProductDetail(productId);
          set({
            productDetail: product,
            isLoading: false,
            totalPrice: product ? product.Harga : 0,
            quantity: 1,
          });
        } catch (err) {
          set({ error: err, isLoading: false });
        }
      },

      updateTotalPrice: () =>
        set((state) => ({
          totalPrice: state.productDetail
            ? state.productDetail.Harga * state.quantity
            : 0,
        })),

      setQuantity: (newQuantity) =>
        set((state) => {
          if (state.productDetail && newQuantity <= state.productDetail.Stok) {
            return { quantity: newQuantity };
          }
          return state;
        }),

      clearProductDetail: () =>
        set({ productDetail: null, error: null, quantity: 1, totalPrice: 0 }),
    }),
    {
      name: "product-detail-store",
      getStorage: () => localStorage,
    },
  ),
);

export default useProductDetailStore;
