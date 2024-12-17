import { useNavigate } from "react-router-dom";

export default function ArticleThumbnail({
  title,
  badgeText,
  image,
  cardSize = "small",
}) {
  const navigate = useNavigate();

  const isLarge = cardSize === "large";

  return (
    <div
      className={`rounded-[20px] cursor-pointer relative ${
        isLarge ? "h-[200px] md:h-[320px]" : "h-[96px] md:h-[151px]"
      } bg-cover bg-no-repeat bg-center transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95`}
      style={{
        backgroundImage: `linear-gradient(224deg, rgba(0, 0, 0, 0) 21.94%, rgba(0, 0, 0, 0.32) 56.76%), url(${image})`,
      }}
      onClick={() => navigate("/article-latest")}
    >
      <div className="flex flex-col justify-between h-full px-4 py-4">
        <p className="font-semibold text-xs w-fit text-neutral-5 bg-secondary-5 px-2 py-1 rounded-xl">
          {badgeText}
        </p>
        <h1
          className={`text-neutral-5 font-semibold ${
            isLarge ? "text-lg md:text-xl" : "text-sm md:text-base"
          }`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
