import { create } from "zustand";

const useCartStore = create((set) => ({
  products: [],
  total: null,
  setTotal: (total) => set({ total }),
  setProducts: (products) => set({ products }),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  setQuantity: (id, quantity) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, quantity } : product,
      ),
    })),
}));

export default useCartStore;
