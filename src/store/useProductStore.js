import { create } from "zustand";
import { fetchProductsByCategory } from "../services/productServices";

export const useProductStore = create((set) => ({
  productResult: [],
  selectedCategories: [],
  isLoading: false,

  setSelectedCategories: (categories) =>
    set({ selectedCategories: categories }),

  setSearchResults: (products) => set({ productResult: products }),

  toggleCategory: async (category) => {
    // Update state selectedCategories terlebih dahulu
    set((state) => {
      const isSelected = state.selectedCategories.includes(category);
      const updatedCategories = isSelected
        ? state.selectedCategories.filter((cat) => cat !== category)
        : [...state.selectedCategories, category];
      return { selectedCategories: updatedCategories };
    });

    // Fetch produk setelah kategori diperbarui
    set({ isLoading: true });
    try {
      const state = useProductStore.getState();
      const { selectedCategories } = state;

      const products = [];
      for (const cat of selectedCategories) {
        const result = await fetchProductsByCategory(cat);
        products.push(...result);
      }

      set({ productResult: products });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
