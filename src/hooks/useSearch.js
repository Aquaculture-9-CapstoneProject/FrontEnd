import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import {
  fetchProductsByCategory,
  allProducts,
} from "../services/productServices";

export const useSearch = () => {
  const { selectedCategories, setSearchResults, setIsLoading } =
    useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (selectedCategories.length === 0) {
          const products = await allProducts();
          setSearchResults(products);
        } else {
          const products = await Promise.all(
            selectedCategories.map((category) =>
              fetchProductsByCategory(category),
            ),
          );
          setSearchResults(products.flat());
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategories, setIsLoading, setSearchResults]);
};
