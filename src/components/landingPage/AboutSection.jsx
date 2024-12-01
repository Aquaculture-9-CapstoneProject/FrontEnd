import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-neutral-5">
      <img
        src="topwave.svg"
        alt="Top Wave"
        className="top-0 left-0 w-full h-auto -mb-1"
      />
      <div className="bg-primary-1 py-[120px] px-28 text-neutral-5">
        <div className="max-w-[1440px] mx-auto flex items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-semibold">
              Tentang <br /> <span className="text-secondary-9">BlueBay</span>
            </h2>
          </div>

          <div className="w-2/3">
            <p className="text-base text-justify font-normal leading-relaxed border-l-4 border-primary-8 pl-4">
              BlueBay menyediakan ikan dan produk laut segar yang bergizi, diproduksi
              dengan metode budidaya ramah lingkungan. Kami menjunjung transparansi
              dengan memberikan informasi jelas tentang asal-usul dan kualitas produk
              untuk konsumsi rumah tangga maupun bisnis. Berkomitmen pada
              keberlanjutan, BlueBay mendukung kebutuhan pangan sehat sambil menjaga
              ekosistem laut.
            </p>
          </div>
        </div>
      </div>
    
      <div className="bg-primary-1">
        <img
          src="bottomwave.svg"
          alt="Bottom Wave"
          className="top-0 left-0 w-full h-auto -mt-1"
        />
      </div>
    </div>
  );
};

export default AboutSection;