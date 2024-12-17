const SkeletonArticleCard = () => {
    return (
      <div className="animate-pulse">
        {/* Placeholder untuk gambar artikel */}
        <div className="w-full h-[200px] sm:h-48 bg-neutral-3 rounded-md"></div>
        
        {/* Placeholder untuk judul artikel */}
        <div className="mt-4 h-4 w-3/4 bg-neutral-3 rounded-md"></div>
        
        {/* Placeholder untuk detail artikel */}
        <div className="flex items-center text-xs mt-2 space-x-2">
          <div className="h-3 w-16 bg-neutral-3 rounded-md"></div>
          <div className="h-3 w-24 bg-neutral-3 rounded-md"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonArticleCard;
  