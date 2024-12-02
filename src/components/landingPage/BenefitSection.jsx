const BenefitSection = () => {
  const benefits = [
    {
      icon: "./landingPage/icon1.svg",
      title: "Produk Berkualitas",
      description: "Hasil laut terbaik, segar, dan terjamin.",
    },
    {
      icon: "./landingPage/icon2.svg",
      title: "Belanja Mudah dan Cepat",
      description: "Klik, bayar, beres dalam sekejap.",
    },
    {
      icon: "./landingPage/icon3.svg",
      title: "Lacak Pesanan Real-Time",
      description: "Pesanan sampai? Bisa cek langsung!",
    },
    {
      icon: "./landingPage/icon4.svg",
      title: "Customer Support 24/7",
      description: "Kami selalu siap membantu Anda.",
    },
  ];

  return (
    <div className="bg-neutral-5 -mt-1" id="keunggulan">
      <div className="text-center py-16 px-4 md:px-28">
        <h3 className="text-2xl font-normal text-neutral-1 tracking-wide uppercase">
          Keunggulan Website Kami
        </h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-1 mt-2">
          Kenapa Harus Belanja di BlueBay?
        </h2>
      </div>

      {/* Benefits Content */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-28 pb-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full mx-auto mb-4">
              <img src={benefit.icon} alt={`icon-${index}`} />
            </div>
            <h4 className="font-semibold text-xl text-neutral-1">
              {benefit.title}
            </h4>
            <p className="text-sm text-neutral-1 mt-[9px]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitSection;
