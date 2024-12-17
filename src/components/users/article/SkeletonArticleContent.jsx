export default function SkeletonArticleContent() {
    return (
      <div>
        <div className="max-w-[1440px] mx-auto px-4 md:px-80 bg-neutral-5">
          <div className="py-8 animate-pulse">
            {/* Breadcrumb Skeleton */}
            <div className="breadcrumbs text-sm text-neutral-2 mb-4">
              <div className="h-4 w-1/2 bg-neutral-300 rounded-md"></div>
            </div>
  
            {/* Judul dan Metadata Skeleton */}
            <header className="mb-8">
              <div className="h-8 w-3/4 bg-neutral-300 rounded-md mb-2"></div>
              <div className="h-4 w-1/4 bg-neutral-300 rounded-md"></div>
            </header>
  
            {/* Gambar Artikel Skeleton */}
            <figure className="mb-8">
              <div className="w-full h-64 bg-neutral-300 rounded-lg"></div>
            </figure>
  
            {/* Konten Artikel Skeleton */}
            <article className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="h-4 w-full bg-neutral-300 rounded-md"></div>
              ))}
              <div className="h-4 w-2/3 bg-neutral-300 rounded-md"></div>
            </article>
          </div>
        </div>
      </div>
    );
  }
  