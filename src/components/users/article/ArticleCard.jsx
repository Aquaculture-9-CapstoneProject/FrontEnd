import { useNavigate } from "react-router-dom";

const ArticleCard = ({ id, image, title, date, badgeText }) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/article-content/${id}`)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] sm:h-48 object-cover rounded-md cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
      />
      <h3 className="mt-4 text-base font-semibold text-neutral-1">{title}</h3>
      <div className="flex items-center text-xs text-neutral-2 mt-2">
        <svg width="12" height="12" fill="none" className="mr-1">
          <path
            d="M10 1.5H9.5V1C9.5 0.725 9.275 0.5 9 0.5C8.725 0.5 8.5 0.725 8.5 1V1.5H3.5V1C3.5 0.725 3.275 0.5 3 0.5C2.725 0.5 2.5 0.725 2.5 1V1.5H2C1.45 1.5 1 1.95 1 2.5V10.5C1 11.05 1.45 11.5 2 11.5H10C10.55 11.5 11 11.05 11 10.5V2.5C11 1.95 10.55 1.5 10 1.5ZM9.5 10.5H2.5C2.225 10.5 2 10.275 2 10V4H10V10C10 10.275 9.775 10.5 9.5 10.5Z"
            fill="#525252"
          />
        </svg>
        {date}
        <span className="mx-2"></span>
        <span>{badgeText}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
