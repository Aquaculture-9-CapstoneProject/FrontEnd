import { useState } from "react";

export default function RatingModal({ isOpen, onClose, order }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  if (!isOpen || !order) return null;

  const isSubmitDisabled = rating === 0 || review.trim() === "";

  return (
    <div>
      {/* Overlay Gelap */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}
      ></div>

      {/* Modal Konten */}
      <dialog
        id="rating_modal"
        className="modal modal-bottom sm:modal-middle z-20"
        open
      >
        <div className="modal-box">
          <h3 className="font-semibold text-2xl text-center">
            Beri Rating dan Ulasan
          </h3>
          <div className="py-4">
            <img
              src={order.image}
              alt={order.name}
              className="w-16 h-16 rounded-lg mx-auto"
            />
            <h4 className="text-center text-lg font-semibold mt-2">
              {order.name}
            </h4>
            <p className="text-center text-sm text-neutral-2">
              {order.description}
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="w-8 h-8"
                >
                  <img
                    src={
                      star <= rating
                        ? "./user/order/star-active.svg"
                        : "./user/order/star.svg"
                    }
                    alt={star <= rating ? "Star Active" : "Star"}
                    className="w-full h-full"
                  />
                </button>
              ))}
            </div>
            <textarea
              className="textarea textarea-bordered w-full mt-4 resize-none h-28"
              placeholder="Ceritakan terkait produk yang kamu terima"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={onClose}>
              Batal
            </button>
            <button
              className={`btn bg-primary-5 text-neutral-5 ${
                isSubmitDisabled ? "btn-disabled opacity-50" : ""
              }`}
              onClick={() => {
                console.log({ orderId: order.id, rating, review });
                onClose();
              }}
              disabled={isSubmitDisabled}
            >
              Kirim
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
