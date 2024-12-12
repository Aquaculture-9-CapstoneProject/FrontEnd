import Navbar from "../../common/Navbar";
import ProductRecomendation from "../../common/ProductRecomendation";
import ProductTable from "./ProductTable";
import Summary from "./Summary";
import { fetchCart } from "../../../services/productServices";
import { useEffect } from "react";
import useCartStore from "../../../store/useCartStore";
export default function Cart() {
  const { setProducts, setTotal, setIsLoading, isLoading } = useCartStore();

  useEffect(() => {
    const loadCart = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCart();
        setProducts(data.Keranjang);
        setTotal(data.Total);
      } catch (error) {
        console.error("Failed to load cart:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, [setProducts, setTotal, setIsLoading]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-6">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="my-6 px-4 md:px-8 lg:px-16">
        <h1 className="text-[24px] sm:text-[28px] font-semibold text-neutral-1 mb-3">
          Keranjang Belanja
        </h1>
        <div className="flex flex-wrap xl:flex-nowrap gap-6">
          <ProductTable />
          <Summary />
        </div>
      </div>
      <div className="hidden lg:flex">
        <ProductRecomendation title="Rekomendasi untuk kamu" />
      </div>
    </>
  );
}
