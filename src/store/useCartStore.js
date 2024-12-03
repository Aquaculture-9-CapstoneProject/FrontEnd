import { create } from "zustand";
import { products } from "../dataDummy/product";

const useCartStore = create((set) => ({
  products: products,
  setQuantity: (id, quantity) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, quantity } : product,
      ),
    }));
  },
  removeProduct: (id) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },
}));
export default useCartStore;
