import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUsersStore";
import { useProductStore } from "../store/useProductStore";
import { useState } from "react";
import { searchProducts } from "../services/productServices";

const useNavbar = () => {
  const { user, clearUser } = useUserStore();
  const navigate = useNavigate();
  const { setSearchResults, setIsLoading } = useProductStore();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    clearUser();
    navigate("/");
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.trim();
      if (query) {
        navigate(`/products?name=${encodeURIComponent(query)}`);
        await handleSearch(query);
      }
    }
  };

  const handleSearch = async (query) => {
    if (query) {
      setIsLoading(true);
      try {
        const results = await searchProducts(query);
        setSearchResults(results);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    user,
    searchQuery,
    setSearchQuery,
    handleLogout,
    handleKeyDown,
    handleSearch,
  };
};

export default useNavbar;
