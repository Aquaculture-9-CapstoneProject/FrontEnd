import { create } from "zustand";
import { recommendedProducts } from "../dataDummy/recomendedProduct";

const useCartStore = create((set) => ({
  products: recommendedProducts,
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
