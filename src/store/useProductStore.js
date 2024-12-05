import { create } from "zustand";

export const useProductStore = create((set) => ({
  selectedCategories: [],

  setSelectedCategories: (categories) =>
    set({ selectedCategories: categories }),

  toggleCategory: (category) =>
    set((state) => {
      const isSelected = state.selectedCategories.includes(category);
      return {
        selectedCategories: isSelected
          ? state.selectedCategories.filter((cat) => cat !== category) // Hapus kategori jika sudah dipilih
          : [...state.selectedCategories, category], // Tambah kategori jika belum dipilih
      };
    }),
}));
