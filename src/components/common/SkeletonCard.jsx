export default function SkeletonCard() {
  return (
    <div className="card bg-neutral-5 shadow-xl flex-shrink-0 active:scale-95 hover:border-secondary-1 border-[1px] cursor-pointer w-80">
      <figure className="relative w-full h-48 bg-neutral-3 overflow-hidden">
        <div className="skeleton w-full h-full bg-neutral-3"></div>
      </figure>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="skeleton h-6 w-2/3 bg-neutral-3 rounded"></div>
          <div className="skeleton h-6 w-1/4 bg-neutral-3 rounded"></div>
        </div>
        <div className="skeleton h-4 w-1/2 bg-neutral-3 rounded mb-4"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="skeleton h-4 w-12 bg-neutral-3 rounded"></div>
            <div className="skeleton h-4 w-4 bg-neutral-3 rounded-full"></div>
          </div>
          <div className="skeleton h-10 w-20 bg-primary-4 rounded"></div>
        </div>
      </div>
    </div>
  );
}
