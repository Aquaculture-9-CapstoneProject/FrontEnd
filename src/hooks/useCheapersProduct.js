import { useState, useEffect } from "react";
import { fetchCheapestProducts } from "../services/productServices";

const useCheapestProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchCheapestProducts();
        setProducts(data.data);
      } catch (err) {
        setError(err);
      }
    };

    getProducts();
  }, []);

  return { products, error };
};

export default useCheapestProducts;
