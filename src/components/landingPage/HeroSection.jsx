import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <div
      id="beranda"
      className="hero bg-neutral-5 pt-28 md:pt-36 px-6 md:px-28 max-w-[1440px] mx-auto flex flex-wrap items-center"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-semibold text-neutral-1 leading-snug">
          Nikmati Kemudahan <br />
          Membeli Produk <br />
          Akuakultur Berkualitas!
        </h1>
        <p className="mt-4 text-sm md:text-base text-primary-1 leading-relaxed mx-auto md:mx-0 w-full md:w-[487px]">
          Temukan hasil akuakultur segar langsung dari pembudidaya terpercaya.
          Pesan dengan mudah, cepat, dan aman melalui platform kami.
        </p>
        <button
          onClick={handleButtonClick}
          className="btn bg-primary-4 mt-8 md:mt-16 text-neutral-5 border-none w-[140px] md:w-[184px] h-[40px] md:h-[48px] rounded-md"
        >
          Belanja Sekarang
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute top-0 right-0 -z-10 hidden md:block w-[682px] h-[515px]"></div>
        <img
          src="fisherman.svg"
          alt="Fisherman Holding Fish"
          className="relative z-10 w-4/5 md:w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
