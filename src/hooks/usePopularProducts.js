import { useEffect, useState } from "react";
import { fetchPopularProducts } from "../services/productServices";

const usePopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchPopularProducts();
        setProducts(data.data);
      } catch (err) {
        setError(err);
      }
    };

    getProducts();
  }, []);

  return { products, error };
};

export default usePopularProducts;
