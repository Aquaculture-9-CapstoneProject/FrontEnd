import { useState } from "react";

export default function Carousel() {
  const slides = [
    { id: "slide1", src: "/user/home/banner1.png", alt: "Slide 1" },
    { id: "slide2", src: "/user/home/banner2.png", alt: "Slide 2" },
    { id: "slide3", src: "/user/home/banner3.png", alt: "Slide 3" },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  const handleNextClick = () => {
    setCurrentSlideIndex((nextIndex) => (nextIndex + 1) % slides.length);
  };

  return (
    <div className="mt-4 sm:mt-6 relative hidden md:flex">
      <div className="carousel w-full px-6">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item relative w-full ${
              index === currentSlideIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full sm:rounded-lg"
            />
          </div>
        ))}
        <button
          onClick={handlePrevClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 bg-white rounded-full border shadow-md p-3 hover:bg-gray-100"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9417 15.8082C12.9998 15.8662 13.0458 15.9352 13.0773 16.011C13.1087 16.0869 13.1249 16.1682 13.1249 16.2503C13.1249 16.3325 13.1087 16.4138 13.0773 16.4897C13.0458 16.5655 12.9998 16.6345 12.9417 16.6925C12.8836 16.7506 12.8147 16.7967 12.7388 16.8281C12.663 16.8595 12.5816 16.8757 12.4995 16.8757C12.4174 16.8757 12.3361 16.8595 12.2602 16.8281C12.1843 16.7967 12.1154 16.7506 12.0573 16.6925L5.80733 10.4425C5.74922 10.3845 5.70312 10.3156 5.67167 10.2397C5.64021 10.1638 5.62402 10.0825 5.62402 10.0003C5.62402 9.91821 5.64021 9.83688 5.67167 9.76101C5.70312 9.68514 5.74922 9.61621 5.80733 9.55816L12.0573 3.30816C12.1746 3.19088 12.3337 3.125 12.4995 3.125C12.6654 3.125 12.8244 3.19088 12.9417 3.30816C13.059 3.42544 13.1249 3.5845 13.1249 3.75035C13.1249 3.9162 13.059 4.07526 12.9417 4.19253L7.13311 10.0003L12.9417 15.8082Z"
              fill="#1F2937"
            />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 bg-white rounded-full border shadow-md p-3 hover:bg-gray-100"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1925 10.4425L7.94254 16.6925C7.88447 16.7506 7.81553 16.7967 7.73966 16.8281C7.66379 16.8595 7.58247 16.8757 7.50035 16.8757C7.41823 16.8757 7.33691 16.8595 7.26104 16.8281C7.18517 16.7967 7.11623 16.7506 7.05816 16.6925C7.00009 16.6345 6.95403 16.5655 6.9226 16.4897C6.89117 16.4138 6.875 16.3325 6.875 16.2503C6.875 16.1682 6.89117 16.0869 6.9226 16.011C6.95403 15.9352 7.00009 15.8662 7.05816 15.8082L12.8668 10.0003L7.05816 4.19253C6.94088 4.07526 6.875 3.9162 6.875 3.75035C6.875 3.5845 6.94088 3.42544 7.05816 3.30816C7.17544 3.19088 7.3345 3.125 7.50035 3.125C7.6662 3.125 7.82526 3.19088 7.94254 3.30816L14.1925 9.55816C14.2506 9.61621 14.2967 9.68514 14.3282 9.76101C14.3597 9.83688 14.3758 9.91821 14.3758 10.0003C14.3758 10.0825 14.3597 10.1638 14.3282 10.2397C14.2967 10.3156 14.2506 10.3845 14.1925 10.4425Z"
              fill="#1F2937"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
