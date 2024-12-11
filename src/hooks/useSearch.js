import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { fetchProductsByCategory } from "../services/productServices";

export function useSearch() {
  const { selectedCategories, setSearchResults, setIsLoading } =
    useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      if (selectedCategories.length === 0) return; // Tidak fetch jika tidak ada kategori

      setIsLoading(true); // Set loading state

      try {
        const products = [];
        for (const category of selectedCategories) {
          const result = await fetchProductsByCategory(category);
          products.push(...result);
        }
        setSearchResults(products); // Update state di store
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false); // Set loading state selesai
      }
    };

    fetchData();
  }, [selectedCategories, setSearchResults, setIsLoading]);

  return { selectedCategories };
}
