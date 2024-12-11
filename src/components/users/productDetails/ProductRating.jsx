import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../utils/toastUtils";
import useProductDetailStore from "../../../store/useProductDetailStore";

const reviews = [
  {
    id: 1,
    stars: 5,
    user: "Jane Cooper",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Metus sodales nulla rutrum neque ut adipiscing. Pretium nisi lectus nibh cursus fringilla tristique arcu quis.",
  },
  {
    id: 2,
    stars: 4,
    user: "John Doe",
    comment: "Excellent product but there’s room for improvement.",
  },
  {
    id: 3,
    stars: 3,
    user: "Emily Davis",
    comment: "Average product. Could be better.",
  },
  {
    id: 4,
    stars: 2,
    user: "Michael Smith",
    comment: "Not satisfied. The quality is not up to the mark.",
  },
  {
    id: 5,
    stars: 1,
    user: "Sarah Johnson",
    comment: "Terrible experience. I won’t buy again.",
  },
  {
    id: 6,
    stars: 5,
    user: "Chris Brown",
    comment: "Absolutely loved it! Worth every penny.",
  },
  {
    id: 7,
    stars: 4,
    user: "Jessica Taylor",
    comment: "Good product. Packaging could be better.",
  },
  {
    id: 8,
    stars: 3,
    user: "Daniel Wilson",
    comment: "It’s okay, but there are better alternatives.",
  },
  {
    id: 9,
    stars: 2,
    user: "Laura Martinez",
    comment: "The design is nice but lacks durability.",
  },
  {
    id: 10,
    stars: 1,
    user: "Kevin Lee",
    comment: "The product arrived damaged. Very disappointed.",
  },
  {
    id: 11,
    stars: 5,
    user: "Sophia Moore",
    comment: "Amazing quality! Highly recommended.",
  },
  {
    id: 12,
    stars: 4,
    user: "Ethan Miller",
    comment: "Great product but delivery was delayed.",
  },
  {
    id: 13,
    stars: 3,
    user: "Olivia Garcia",
    comment: "Decent product. Nothing extraordinary.",
  },
  {
    id: 14,
    stars: 2,
    user: "James Rodriguez",
    comment: "Not worth the price. Wouldn’t recommend.",
  },
  {
    id: 15,
    stars: 1,
    user: "Isabella Anderson",
    comment: "Horrible quality. Complete waste of money.",
  },
];

export default function ProductRating() {
  const [filter, setFilter] = useState("All");
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const { productDetail } = useProductDetailStore();
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

  return (
    <div className="mt-5 px-4">
      {/* Ringkasan Pembelian */}
      <div className="rounded-lg max-w-sm w-full border-2 border-neutral-3 p-4 mx-auto">
        <h2 className="card-title">Ringkasan Pembelian</h2>
        <div className="flex mt-4 justify-between">
          <p>Total Harga</p>
          <p>Rp 160.000</p>
        </div>
        <div className="justify-between flex flex-row gap-8 mt-8">
          <button
            className="hover:bg-neutral-4 border-2 border-neutral-4 bg-neutral-5 flex items-center justify-center w-1/2 py-[14px] px-6 rounded-md font-semibold transition duration-200 ease-in-out transform hover:scale-105 gap-2"
            onClick={() => showToast("Berhasil menambahkan ke keranjang")}
          >
            <img src="./user/detail/add.svg" alt="add" />
            <p>Keranjang</p>
          </button>
          <button
            className="bg-primary-5 text-neutral-5 hover:bg-primary-6 w-full sm:w-1/2 text-center px-6 py-[14px] rounded-md font-semibold transition duration-200 ease-in-out transform hover:scale-105"
            onClick={() => navigate("/checkout")}
          >
            Beli
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
