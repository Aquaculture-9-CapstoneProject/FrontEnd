import { create } from "zustand";

export const useProductStore = create((set) => ({
  productResult: [],
  selectedCategories: [],
  isLoading: false,

  setSelectedCategories: (categories) =>
    set({ selectedCategories: categories }),

  setSearchResults: (products) => set({ productResult: products }),

  setIsLoading: (loading) => set({ isLoading: loading }),

  toggleCategory: (category) => {
    // Update state selectedCategories
    set((state) => {
      const isSelected = state.selectedCategories.includes(category);
      const updatedCategories = isSelected
        ? state.selectedCategories.filter((cat) => cat !== category)
        : [...state.selectedCategories, category];
      return { selectedCategories: updatedCategories };
    });
  },
}));
