import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    name: "Amalia Putri",
    role: "Ibu Rumah Tangga",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "John B Routledge",
    role: "Pengusaha",
    review:
      "BlueBay adalah solusi terbaik untuk kebutuhan saya. Kualitas dan layanan sangat memuaskan.",
    image:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Cleo Anderson",
    role: "Koki Profesional",
    review:
      "Produk BlueBay selalu segar dan kualitasnya tidak pernah mengecewakan. Sangat direkomendasikan!",
    image:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    rating: 5,
  },
  {
    id: 4,
    name: "Pope Heyward",
    role: "Mahasiswa",
    review:
      "BlueBay memberikan pengalaman belanja yang mudah dan menyenangkan. Produk yang ditawarkan sangat berkualitas.",
    image:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    rating: 5,
  },
  {
    id: 5,
    name: "JJ Maybank",
    role: "Pemilik Restoran",
    review:
      "Sebagai pemilik restoran, saya sangat terbantu dengan produk dari BlueBay. Kualitas dan harga yang ditawarkan sangat baik.",
    image:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    rating: 5,
  },
];

const StarSVG = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.6407 17.8719L29.5938 24.0219L31.7047 33.1782C31.8164 33.6568 31.7845 34.1578 31.6131 34.6185C31.4416 35.0791 31.1382 35.479 30.7407 35.7681C30.3432 36.0572 29.8693 36.2227 29.3782 36.244C28.8871 36.2652 28.4007 36.1413 27.9797 35.8876L19.9938 31.0438L12.025 35.8876C11.604 36.1413 11.1176 36.2652 10.6266 36.244C10.1355 36.2227 9.66159 36.0572 9.26409 35.7681C8.86659 35.479 8.56314 35.0791 8.39167 34.6185C8.2202 34.1578 8.18833 33.6568 8.30003 33.1782L10.4078 24.0313L3.35941 17.8719C2.98661 17.5504 2.71704 17.126 2.5845 16.6518C2.45196 16.1777 2.46235 15.675 2.61437 15.2068C2.76639 14.7385 3.05327 14.3256 3.43903 14.0198C3.8248 13.7139 4.29228 13.5288 4.78285 13.4876L14.0735 12.6829L17.7 4.03287C17.8894 3.57899 18.2089 3.19128 18.6181 2.91858C19.0274 2.64588 19.5082 2.50037 20 2.50037C20.4918 2.50037 20.9727 2.64588 21.3819 2.91858C21.7912 3.19128 22.1106 3.57899 22.3 4.03287L25.9375 12.6829L35.225 13.4876C35.7156 13.5288 36.1831 13.7139 36.5688 14.0198C36.9546 14.3256 37.2415 14.7385 37.3935 15.2068C37.5455 15.675 37.5559 16.1777 37.4234 16.6518C37.2908 17.126 37.0213 17.5504 36.6485 17.8719H36.6407Z"
      fill="#1F92C5"
    />
  </svg>
);

const LeftArrowSVG = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="60" height="60" rx="30" fill="#0D5B82" />
    <path
      d="M35 36.4583L28.5333 29.9917L35 23.525C35.65 22.875 35.65 21.825 35 21.175C34.35 20.525 33.3 20.525 32.65 21.175L25 28.825C24.35 29.475 24.35 30.525 25 31.175L32.65 38.825C33.3 39.475 34.35 39.475 35 38.825C35.6333 38.175 35.65 37.1083 35 36.4583Z"
      fill="#FAFAFA"
    />
  </svg>
);

const RightArrowSVG = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="60"
      height="60"
      rx="30"
      transform="matrix(-1 0 0 1 60 0)"
      fill="#0D5B82"
    />
    <path
      d="M25 36.4583L31.4667 29.9917L25 23.525C24.35 22.875 24.35 21.825 25 21.175C25.65 20.525 26.7 20.525 27.35 21.175L35 28.825C35.65 29.475 35.65 30.525 35 31.175L27.35 38.825C26.7 39.475 25.65 39.475 25 38.825C24.3667 38.175 24.35 37.1083 25 36.4583Z"
      fill="#FAFAFA"
    />
  </svg>
);

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 bg-neutral-5">
      <div className="max-w-[1440px] mx-auto px-8 md:px-28">
        <div className="text-center">
          <p className="text-secondary-5 text-base font-semibold">
            Ulasan pelanggan
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-neutral-1">
            Apa Kata <span className="text-primary-5">Mereka?</span>
          </h2>
        </div>
        <div className="relative my-10">
          <div className="mx-auto sm:w-full md:w-3/4 lg:w-2/3">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={30}
              onSwiper={setSwiperRef}
              onSlideChange={(swiper) =>
                setActiveTestimonial(swiper.activeIndex)
              }
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className={`transition-all duration-300
                  ${
                    index === activeTestimonial
                      ? "w-[130px] h-[130px] border-4 border-primary-5 opacity-100 mx-auto rounded-full"
                      : "w-[100px] h-[100px] opacity-50 mx-auto rounded-full mt-[15px]"
                  }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Left Arrow */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer"
            onClick={() => swiperRef?.slidePrev()}
          >
            <LeftArrowSVG />
          </div>
          {/* Right Arrow */}
          <div
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer"
            onClick={() => swiperRef?.slideNext()}
          >
            <RightArrowSVG />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl text-neutral-1 font-semibold">
            {testimonials[activeTestimonial].name}
          </h3>
          <p className="text-neutral-2 text-base">
            {testimonials[activeTestimonial].role}
          </p>
          <div className="flex justify-center gap-0 my-5">
            {Array(testimonials[activeTestimonial].rating)
              .fill()
              .map((_, i) => (
                <StarSVG key={i} />
              ))}
          </div>
          <p className="text-neutral-1 text-xl max-w-3xl mx-auto">
            {testimonials[activeTestimonial].review}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

