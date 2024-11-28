export default function Carousel() {
  return (
    <div className="px-0 sm:px-8 mt-4 sm:mt-6">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/banner1.png"
            alt="Slide 1"
            className="w-full sm:rounded-lg"
          />
          <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/banner1.png"
            alt="Slide 2"
            className="w-full sm:rounded-lg"
          />
          <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/banner1.png"
            alt="Slide 3"
            className="w-full sm:rounded-lg"
          />
          <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/banner1.png"
            alt="Slide 4"
            className="w-full sm:rounded-lg"
          />
          <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
