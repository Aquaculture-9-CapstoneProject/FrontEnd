import React from "react";

const KeyFeatureSection = () => {
  return (
    <div className="bg-neutral-5 py-20 px-28 md:px-28">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-primary-5">
            Fitur Unggulan <span className="text-neutral-1">Website Kami</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Left Section */}
          <div className="flex flex-col gap-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-8">
              <div className="w-[72px] h-[72px] flex items-center justify-center rounded-full">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="72" height="72" rx="36" fill="#0D5B82" />
                  <path
                    d="M51.7674 47.9208C52.7274 46.3808 53.2674 44.5808 53.1474 42.6008C52.8874 38.3008 49.4674 34.6608 45.2074 34.2008C39.7674 33.6008 35.1674 37.8208 35.1674 43.1408C35.1674 48.1208 39.1874 52.1408 44.1474 52.1408C45.9074 52.1408 47.5474 51.6208 48.9274 50.7408L53.7474 55.5608C54.5274 56.3408 55.8074 56.3408 56.5874 55.5608C57.3674 54.7808 57.3674 53.5008 56.5874 52.7208L51.7674 47.9208ZM44.1674 48.1408C41.4074 48.1408 39.1674 45.9008 39.1674 43.1408C39.1674 40.3808 41.4074 38.1408 44.1674 38.1408C46.9274 38.1408 49.1674 40.3808 49.1674 43.1408C49.1674 45.9008 46.9274 48.1408 44.1674 48.1408ZM43.4474 31.1408C41.9674 31.1808 40.5474 31.5008 39.2474 32.0408L38.1474 30.3808L31.9874 40.4008C31.2674 41.5608 29.6474 41.6808 28.7674 40.6608L24.5274 35.7208L18.4074 45.5208C17.7874 46.5008 16.4674 46.7608 15.5274 46.0808C14.6874 45.4608 14.4474 44.3008 15.0074 43.4008L22.5674 31.3008C23.2874 30.1608 24.9074 30.0408 25.7874 31.0608L30.0074 35.9808L36.3674 25.6408C37.1274 24.4008 38.9274 24.3608 39.7274 25.5808L43.4474 31.1408ZM48.6274 32.1408C47.3474 31.5808 45.9674 31.2408 44.5274 31.1608L53.6074 16.7808C54.2274 15.8008 55.5474 15.5608 56.4674 16.2408C57.3274 16.8608 57.5474 18.0408 56.9874 18.9208L48.6274 32.1408Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-neutral-1">
                  Status Panen Real-Time
                </h4>
                <p className="text-base text-normal text-neutral-1 mt-2">
                  Pantau jadwal panen dan ketersediaan produk secara langsung.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-8">
              <div className="w-[72px] h-[72px] flex items-center justify-center rounded-full">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="#0D5B82"/>
<path d="M52 31V27C52 24.8 50.2 23 48 23H42C42 19.68 39.32 17 36 17C32.68 17 30 19.68 30 23H24C21.8 23 20 24.8 20 27V31C16.68 31 14 33.68 14 37C14 40.32 16.68 43 20 43V51C20 53.2 21.8 55 24 55H48C50.2 55 52 53.2 52 51V43C55.32 43 58 40.32 58 37C58 33.68 55.32 31 52 31ZM27 36C27 34.34 28.34 33 30 33C31.66 33 33 34.34 33 36C33 37.66 31.66 39 30 39C28.34 39 27 37.66 27 36ZM42 47H30C28.9 47 28 46.1 28 45C28 43.9 28.9 43 30 43H42C43.1 43 44 43.9 44 45C44 46.1 43.1 47 42 47ZM42 39C40.34 39 39 37.66 39 36C39 34.34 40.34 33 42 33C43.66 33 45 34.34 45 36C45 37.66 43.66 39 42 39Z" fill="#FAFAFA"/>
</svg>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-neutral-1">
                  Chatbot AI Cerdas
                </h4>
                <p className="text-base text-normal text-neutral-1 mt-2">
                  Dapatkan bantuan instan dengan chatbot berbasis AI.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-8">
              <div className="w-[72px] h-[72px] flex items-center justify-center rounded-full">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="#0D5B82"/>
<path d="M54.3 19.2825L52.66 20.9225L50.76 19.0025C49.98 18.2225 48.72 18.2225 47.92 19.0025L46 20.9225L44.08 19.0025C43.3 18.2225 42.02 18.2225 41.24 19.0025L39.34 20.9225L37.42 19.0025C36.64 18.2225 35.38 18.2225 34.6 19.0025L32.68 20.9225L30.76 19.0025C29.98 18.2225 28.72 18.2225 27.92 19.0025L26 20.9225L24.08 19.0025C23.3 18.2225 22.02 18.2225 21.24 19.0025L19.34 20.9225L17.7 19.2825C17.08 18.6625 16 19.1025 16 20.0025V49.5825C16 51.7825 17.8 53.5825 20 53.5825H52C54.2 53.5825 56 51.7825 56 49.5825V20.0025C56 19.1025 54.92 18.6625 54.3 19.2825ZM34 49.5825H20V37.5825H34V49.5825ZM52 49.5825H38V45.5825H52V49.5825ZM52 41.5825H38V37.5825H52V41.5825ZM52 33.5825H20V27.5825H52V33.5825Z" fill="#FAFAFA"/>
</svg>

              </div>
              <div>
                <h4 className="text-2xl font-semibold text-neutral-1">
                  Artikel Edukasi dan Panduan
                </h4>
                <p className="text-base text-normal text-neutral-1 mt-2">
                  Nikmati berbagai artikel informatif tentang akuakultur, resep
                  masakan, dan tips menjaga produk tetap segar.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative">
            <img
              src="laptopimage.png"
              alt="Laptop Mockup"
              className="w-full max-w-xl mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatureSection;