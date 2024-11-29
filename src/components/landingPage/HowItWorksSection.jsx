import React from "react";

const HowItWorksSection = () => {
  return (
    <div className="bg-primary-1 text-neutral-4 py-20 px-28 md:px-28">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[104px]">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl text-secondary-9 font-semibold">Kemudahan Belanja di BlueBay</h3>
          <h2 className="text-4xl font-semibold text-neutral-5 mt-5">
            Yuk, Lihat <br />
            <span className="text-secondary-9">Cara Kerja Website Kami!</span>
          </h2>
          <p className="mt-4 text-xl text-normal mt-5">
            Belanja produk akuakultur segar nggak pernah semudah ini. Ikuti
            langkah-langkah sederhana dan nikmati pengalaman belanja tanpa
            ribet!
          </p>
          <button className="bg-[#0D5B82] text-neutral-5 font-semibold px-6 py-3 rounded-lg mt-16 w-[280px] h-[52px]">
            Mulai Belanja
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-5 h-[calc(100%-4rem)] w-[3px] bg-neutral-4">
            <div className="absolute top-0 h-[calc(3rem+80px)] bg-primary-5 w-[3px]"></div>
          </div>

          <div className="grid gap-6 relative">
            {/* Step 1 */}
            <div className="flex items-start gap-8 relative">
              <div className="bg-primary-5 text-neutral-5 w-12 h-12 flex items-center justify-center rounded-full font-semibold text-xl relative z-10">
                1
              </div>
              <div>
                <h4 className="text-2xl text-secondary-9 font-semibold">Daftar Akun</h4>
                <p className="text-base text-normal">
                  Buat akun dalam hitungan menit. Gratis dan gampang banget!
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-8 relative">
              <div className="bg-neutral-4 text-neutral-1 w-12 h-12 flex items-center justify-center rounded-full font-semibold text-xl relative z-10">
                2
              </div>
              <div>
                <h4 className="text-2xl text-secondary-9 font-semibold">Jelajahi BlueBay</h4>
                <p className="text-base text-normal">
                  Cari produk favoritmu dari pembudidaya terpercaya.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-8 relative">
              <div className="bg-neutral-4 text-neutral-1 w-12 h-12 flex items-center justify-center rounded-full font-semibold text-xl relative z-10">
                3
              </div>
              <div>
                <h4 className="text-2xl text-secondary-9 font-semibold">Pesan Sekarang</h4>
                <p className="text-base text-normal">
                  Tinggal klik, pesan, dan kami yang urus sisanya.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-8 relative">
              <div className="bg-neutral-4 text-neutral-1 w-12 h-12 flex items-center justify-center rounded-full font-semibold text-xl relative z-10">
                4
              </div>
              <div>
                <h4 className="text-2xl text-secondary-9 font-semibold">Lacak Pesanan</h4>
                <p className="text-base text-normal">
                  Pantau perjalanan pesananmu hingga sampai ke depan pintu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;