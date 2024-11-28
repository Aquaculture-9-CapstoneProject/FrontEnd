import React from "react";

const HeroSection = () => {
  return (
    <div className="hero bg-base-100 mt-8 py-8 px-28 max-w-[1440px] mx-auto flex items-center">
      {/* Left Content */}
      <div className="w-1/2">
        <h1 className="text-4xl font-semibold text-neutral-1 leading-snug">
          Nikmati Kemudahan <br />
          Membeli Produk <br />
          Akuakultur Berkualitas!
        </h1>
        <p className="mt-4 text-base text-primary-1 leading-relaxed">
          Temukan hasil akuakultur segar langsung dari pembudidaya terpercaya. 
          Pesan dengan mudah, cepat, dan aman melalui platform kami.
        </p>
        <button className="btn bg-primary-4 mt-16 text-neutral-5 border-none w-[184px] h-[48px]">
          Belanja Sekarang
        </button>
      </div>

      {/* Right Image */}
      <div className="w-1/2 relative">
        <div className="absolute top-0 right-0 -z-10 w-[682px] h-[515px]"></div>
        <img
          src="fisherman.svg"
          alt="Fisherman Holding Fish"
          className="relative z-10 w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;