import { create } from "zustand";
import { removeFromCart } from "../services/productServices";

const useCartStore = create((set) => ({
  products: [],
  total: null,
  isLoading: false,
  loadingProducts: {},
  setTotal: (total) => set({ total }),
  setProducts: (products) => set({ products }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setQuantity: (id, quantity) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, quantity } : product,
      ),
    })),
  removeProduct: async (id) => {
    try {
      set((state) => ({
        loadingProducts: { ...state.loadingProducts, [id]: true },
      }));
      await removeFromCart(id);
      set((state) => ({
        products: state.products.filter((product) => product.ID !== id),
        loadingProducts: { ...state.loadingProducts, [id]: false },
      }));
    } catch (error) {
      console.error("Gagal menghapus produk dari keranjang:", error);
      set((state) => ({
        loadingProducts: { ...state.loadingProducts, [id]: false },
      }));
    }
  },
}));

export default useCartStore;
