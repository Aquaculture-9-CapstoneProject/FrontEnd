import { useState, useEffect } from "react";
import { fetchCheapestProducts } from "../services/productServices";

const useCheapestProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchCheapestProducts();
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

export default useCheapestProducts;
