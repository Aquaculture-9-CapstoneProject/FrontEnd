export default function SkeletonArticleCard() {
    return (
      <div
        className="rounded-[20px] relative h-[200px] w-[360px] bg-lightgray bg-cover bg-no-repeat bg-center animate-pulse"
      >
        <div className="flex flex-col justify-between h-full px-4 py-4">
          {/* Skeleton badge */}
          <div className="w-24 h-5 bg-neutral-300 rounded-xl"></div>
          {/* Skeleton title */}
          <div className="w-3/4 h-6 bg-neutral-300 rounded-md"></div>
        </div>
      </div>
    );
  }
  