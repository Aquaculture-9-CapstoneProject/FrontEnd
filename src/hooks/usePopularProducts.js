import { useEffect, useState } from "react";
import { fetchPopularProducts } from "../services/productServices";

const usePopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      try {
        const data = await fetchPopularProducts();
        setProducts(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, error, loading };
};

export default usePopularProducts;
