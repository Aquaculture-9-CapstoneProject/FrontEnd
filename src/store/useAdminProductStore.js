import { create } from "zustand";
import { getAllProduct } from "../services/adminServices";

const useAdminProductStore = create((set) => ({
  products: [],
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  isLoading: false,
  error: null,

  fetchProducts: async (page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const response = await getAllProduct(page);
      const { data, pagination } = response;
      set({
        products: data,
        currentPage: pagination.CurrentPage,
        totalPages: pagination.TotalPages,
        totalItems: pagination.TotalItems,
        isLoading: false,
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  setCurrentPage: (page) => set({ currentPage: page }),

  getCurrentProducts: () => {
    return (state) => {
      const startIndex = (state.currentPage - 1) * state.productsPerPage;
      const endIndex = startIndex + state.productsPerPage;
      return state.products.slice(startIndex, endIndex);
    };
  },

  getProductDetails: (id) => {
    return (state) => state.products.find((product) => product.ID === id);
  },
}));

export default useAdminProductStore;
