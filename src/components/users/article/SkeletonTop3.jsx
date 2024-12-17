const SkeletonArticleThumbnail = () => (
    <div className="animate-pulse bg-neutral-3 rounded-lg h-48 w-full"></div>
  );
  
  const SkeletonTopArticleCard = () => (
    <div className="flex items-start gap-4 animate-pulse">
      <div className="bg-neutral-3 w-16 h-16 md:w-20 md:h-20 rounded-lg"></div>
      <div className="flex-1 space-y-2">
        <div className="bg-neutral-3 h-4 w-24 rounded"></div>
        <div className="bg-neutral-3 h-6 w-3/4 rounded"></div>
        <div className="bg-neutral-3 h-3 w-1/2 rounded"></div>
      </div>
    </div>
  );
  
  const SkeletonTop3 = () => {
    return (
      <section className="py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-neutral-3 h-6 w-2/3 mb-5 animate-pulse rounded"></div>
            <SkeletonArticleThumbnail />
          </div>
          <div>
            <div className="bg-neutral-3 h-5 w-1/3 mb-5 animate-pulse rounded"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((_, idx) => (
                <SkeletonTopArticleCard key={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SkeletonTop3;
  