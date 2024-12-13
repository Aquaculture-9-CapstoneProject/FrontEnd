import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../utils/toastUtils";
import useProductDetailStore from "../../../store/useProductDetailStore";
import { formatCurrency } from "../../../utils/currency";
import { reviews } from "../../../dataDummy/review";
import { addToCart, orderFromCard } from "../../../services/productServices";

export default function ProductRating() {
  const [filter, setFilter] = useState("All");
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const { productDetail, totalPrice, quantity } = useProductDetailStore();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const navigate = useNavigate();

  const handleFilterChange = (stars) => {
    setFilter(stars);
    if (stars === "All") {
      setFilteredReviews(reviews);
    } else {
      const starNumber = parseInt(stars, 10);
      setFilteredReviews(
        reviews.filter((review) => review.stars === starNumber),
      );
    }
  };

  const handleAddToCart = async (id, quantity) => {
    setIsAddingToCart(true);
    try {
      await addToCart(Number(id), quantity);
      showToast("Berhasil menambahkan ke keranjang");
    } catch (error) {
      showToast("Gagal menambahkan ke keranjang");
      console.error("Error adding to cart:", error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleBuyClick = async (id, quantity) => {
    setIsBuying(true);
    try {
      await orderFromCard(id, quantity);
      navigate("/checkout");
    } catch (error) {
      console.error("Error during the purchase:", error);
    } finally {
      setIsBuying(false);
    }
  };

  return (
    <div className="mt-5 px-4">
      {/* Ringkasan Pembelian */}
      <div className="rounded-lg max-w-sm w-full border-2 border-neutral-3 p-4 mx-auto">
        <h2 className="card-title">Ringkasan Pembelian</h2>
        <div className="flex mt-4 justify-between">
          <p>Total Harga</p>
          <p className="font-semibold text-xl">{formatCurrency(totalPrice)}</p>
        </div>
        <div className="justify-between flex flex-row gap-8 mt-8">
          <button
            className="hover:bg-neutral-4 border-2 border-neutral-4 bg-neutral-5 flex items-center justify-center w-1/2 py-[14px] px-6 rounded-md font-semibold transition duration-200 ease-in-out transform hover:scale-105 gap-2"
            onClick={() => handleAddToCart(productDetail.ID, quantity)}
          >
            {!isAddingToCart ? (
              <>
                <img src="./user/detail/add.svg" alt="add" />
                <p>Keranjang</p>
              </>
            ) : (
              <span className="loading loading-spinner loading-md"></span>
            )}
          </button>
          <button
            className="bg-primary-5 text-neutral-5 hover:bg-primary-6 w-full sm:w-1/2 text-center px-6 py-[14px] rounded-md font-semibold transition duration-200 ease-in-out transform hover:scale-105"
            onClick={() => handleBuyClick(productDetail.ID, quantity)}
          >
            {!isBuying ? (
              "Beli"
            ) : (
              <span className="loading loading-spinner loading-md"></span>
            )}
          </button>
        </div>
      </div>

      {/* Ulasan Pembeli */}
      <div className="mt-8">
        <h1 className="text-xl font-semibold text-neutral-1">Ulasan Pembeli</h1>
        <div className="flex items-center gap-4 mt-3 text-neutral-1">
          <p className="font-semibold text-4xl">{productDetail.Rating}</p>
          <img src="./user/detail/star.svg" alt="star" />
          <p className="text-2xl mt-2">/5.0</p>
        </div>
        <div className="flex gap-2 overflow-x-auto w-full mt-2 py-3">
          {["All", 1, 2, 3, 4, 5].map((stars) => (
            <button
              key={stars}
              className={`${
                filter === stars
                  ? "bg-primary-5 text-neutral-5"
                  : "border-primary-5 border-2 text-neutral-1"
              } rounded-full text-xs px-2 py-1 whitespace-nowrap`}
              onClick={() => handleFilterChange(stars)}
            >
              {stars === "All" ? "Semua" : `Bintang ${stars}`}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-5 overflow-x-auto h-screen">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-2 px-6 py-6 border-2 border-neutral-4 rounded-2xl max-w-sm w-full mx-auto"
            >
              <div className="flex">
                {[...Array(review.stars)].map((_, index) => (
                  <img
                    key={index}
                    className="w-3 h-3"
                    src="./user/detail/star.svg"
                    alt="star"
                  />
                ))}
              </div>
              <h1 className="font-semibold text-xs">{review.user}</h1>
              <p className="text-[10px]">{review.comment}</p>
            </div>
          ))}
          {filteredReviews.length === 0 && (
            <p className="text-neutral-1 text-center">Tidak ada ulasan.</p>
          )}
        </div>
      </div>
    </div>
  );
}
