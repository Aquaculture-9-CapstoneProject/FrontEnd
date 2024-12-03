import React from "react";

const ArticleCard = ({ image, title, badgeText, date, cardSize = "small" }) => {
  const isLarge = cardSize === "large"; // Tentukan ukuran card

  return (
    <div
      className={`card ${
        isLarge ? "h-[200px] md:h-[320px]" : "h-[96px] md:h-[151px]"
      } w-full bg-base-100 image-full`}
    >
      <figure>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body justify-end">
        {/* Badge */}
        <div className="absolute top-4 left-4 badge bg-secondary-5 border-none font-semibold text-sm text-neutral-5">
          {badgeText}
        </div>
        {/* Judul Artikel */}
        <h2
          className={`${
            isLarge ? "text-lg md:text-xl" : "text-base md:text-lg"
          } text-neutral-5 font-semibold`}
        >
          {title}
        </h2>
        {/* Tanggal */}
        {date && !isLarge && (
          <div className="flex items-center text-xs text-neutral-2 mt-2">
            <svg width="12" height="12" fill="none" className="mr-1">
              <path
                d="M10 1.5H9.5V1C9.5 0.725 9.275 0.5 9 0.5C8.725 0.5 8.5 0.725 8.5 1V1.5H3.5V1C3.5 0.725 3.275 0.5 3 0.5C2.725 0.5 2.5 0.725 2.5 1V1.5H2C1.45 1.5 1 1.95 1 2.5V10.5C1 11.05 1.45 11.5 2 11.5H10C10.55 11.5 11 11.05 11 10.5V2.5C11 1.95 10.55 1.5 10 1.5ZM9.5 10.5H2.5C2.225 10.5 2 10.275 2 10V4H10V10C10 10.275 9.775 10.5 9.5 10.5Z"
                fill="#525252"
              />
            </svg>
            {date}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
