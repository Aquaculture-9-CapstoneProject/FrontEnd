import React from "react";

const BenefitSection = () => {
  return (
    <div className="bg-neutral-5 -mt-1">
      {/* Header Section */}
      <div className="text-center py-16 px-28">
        <h3 className="text-2xl font-normal text-neutral-1 tracking-wide uppercase">
          Keunggulan Website Kami
        </h3>
        <h2 className="text-4xl font-semibold text-primary-1 mt-2">
          Kenapa Harus Belanja di BlueBay?
        </h2>
      </div>

      {/* Benefits Content */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-12 md:px-28 pb-16">
        {/* Item 1 */}
        <div className="text-center">
            <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full mx-auto mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3">
                <rect width="48" height="48" rx="24" fill="#3CB1EC"/>
                </g>
                <path d="M36.45 32.415L11.745 33.705C11.13 33.735 10.59 33.255 10.56 32.64C10.53 32.025 11.01 31.485 11.625 31.455L36.345 30.165C36.96 30.135 37.5 30.615 37.53 31.23C37.56 31.845 37.08 32.385 36.45 32.415ZM36.375 35.235H11.625C11.01 35.235 10.5 35.745 10.5 36.36C10.5 36.975 11.01 37.485 11.625 37.485H36.375C36.99 37.485 37.5 36.975 37.5 36.36C37.5 35.745 36.99 35.235 36.375 35.235ZM39 13.515V24.015C39 25.665 37.65 27.015 36 27.015H12C10.35 27.015 9 25.665 9 24.015V13.515C9 11.865 10.35 10.515 12 10.515H36C37.65 10.515 39 11.865 39 13.515ZM34.68 15.15C32.805 15.555 31.395 16.815 31.185 18.36C30.225 17.265 27.09 14.265 21.375 14.265C16.215 14.265 13.155 16.71 11.91 18C11.49 18.435 11.49 19.11 11.91 19.545C13.155 20.835 16.215 23.28 21.375 23.28C27.09 23.28 30.225 20.28 31.185 19.185C31.395 20.715 32.805 21.975 34.68 22.395C35.37 22.545 36 21.975 36 21.285V16.275C36 15.57 35.355 15 34.68 15.15Z" fill="#0D5B82"/>
                </svg>
            </div>
            <h4 className="font-semibold text-xl text-neutral-1">
                Produk Berkualitas
            </h4>
            <p className="text-sm text-neutral-1 text-normal mt-[9px]">
                Hasil laut terbaik, segar, dan terjamin.
            </p>
        </div>

        {/* Item 2 */}
        <div className="text-center">
          <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full mx-auto mb-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <rect width="48" height="48" rx="24" fill="#3CB1EC"/>
            </g>
            <path d="M34.5 15.75H31.5C31.5 11.61 28.14 8.25 24 8.25C19.86 8.25 16.5 11.61 16.5 15.75H13.5C11.85 15.75 10.5 17.1 10.5 18.75V36.75C10.5 38.4 11.85 39.75 13.5 39.75H34.5C36.15 39.75 37.5 38.4 37.5 36.75V18.75C37.5 17.1 36.15 15.75 34.5 15.75ZM24 11.25C26.49 11.25 28.5 13.26 28.5 15.75H19.5C19.5 13.26 21.51 11.25 24 11.25ZM24 26.25C20.505 26.25 17.565 23.865 16.74 20.625C16.485 19.68 17.22 18.75 18.195 18.75C18.9 18.75 19.47 19.26 19.665 19.95C20.19 21.855 21.93 23.25 24 23.25C26.07 23.25 27.81 21.855 28.335 19.95C28.53 19.26 29.1 18.75 29.805 18.75C30.78 18.75 31.5 19.68 31.26 20.625C30.435 23.865 27.495 26.25 24 26.25Z" fill="#0D5B82"/>
            </svg>
          </div>
          <h4 className="font-semibold text-xl text-neutral-1">
            Belanja Mudah dan Cepat
          </h4>
          <p className="text-sm text-neutral-1 text-normal mt-[9px]">
            Klik, bayar, beres dalam sekejap.
          </p>
        </div>

        {/* Item 3 */}
        <div className="text-center">
          <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full mx-auto mb-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <rect width="48" height="48" rx="24" fill="#3CB1EC"/>
            </g>
            <path d="M30.36 17.64C28.605 15.885 26.31 15 24 15V24L17.64 30.36C21.15 33.87 26.85 33.87 30.375 30.36C33.885 26.85 33.885 21.15 30.36 17.64ZM24 9C15.72 9 9 15.72 9 24C9 32.28 15.72 39 24 39C32.28 39 39 32.28 39 24C39 15.72 32.28 9 24 9ZM24 36C17.37 36 12 30.63 12 24C12 17.37 17.37 12 24 12C30.63 12 36 17.37 36 24C36 30.63 30.63 36 24 36Z" fill="#0D5B82"/>
            </svg>
          </div>
          <h4 className="font-semibold text-xl text-neutral-1">
            Lacak Pesanan Real-Time
          </h4>
          <p className="text-sm text-neutral-1 text-normal mt-[9px]">
            Pesanan sampai? Bisa cek langsung!
          </p>
        </div>

        {/* Item 4 */}
        <div className="text-center">
          <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full mx-auto mb-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <rect width="48" height="48" rx="24" fill="#3CB1EC"/>
            </g>
            <path d="M12.7078 15H15.7078V16.5C15.7078 18.15 17.0578 19.5 18.7078 19.5H27.7078C29.3578 19.5 30.7078 18.15 30.7078 16.5V15H33.7078V22.5H36.7078V15C36.7078 13.35 35.3578 12 33.7078 12H27.4378C26.8078 10.26 25.1578 9 23.2078 9C21.2578 9 19.6078 10.26 18.9778 12H12.7078C11.0578 12 9.70776 13.35 9.70776 15V36C9.70776 37.65 11.0578 39 12.7078 39H21.7078V36H12.7078V15ZM23.2078 12C24.0328 12 24.7078 12.675 24.7078 13.5C24.7078 14.325 24.0328 15 23.2078 15C22.3828 15 21.7078 14.325 21.7078 13.5C21.7078 12.675 22.3828 12 23.2078 12Z" fill="#0D5B82"/>
            <path d="M37.8328 25.875C37.2178 25.26 36.1978 25.26 35.5828 25.875L28.4728 33L25.0828 29.625C24.4678 29.01 23.4628 29.01 22.8328 29.625C22.2178 30.24 22.2178 31.26 22.8328 31.875L27.4078 36.435C27.9928 37.02 28.9378 37.02 29.5228 36.435L37.8178 28.125C38.4478 27.51 38.4478 26.49 37.8328 25.875Z" fill="#0D5B82"/>
            </svg>
          </div>
          <h4 className="font-semibold text-xl text-neutral-1">
            Informasi Produk Lengkap
          </h4>
          <p className="text-sm text-neutral-1 text-normal mt-[9px]">
            Semua info produk jelas, no ribet.
          </p>
        </div>
      </div>

      {/* Wave */}
      <div>
        <img
          src="accent.svg"
          alt="Accent"
          className="top-0 left-0 w-full h-auto -mb-1"
        />
      </div>
    </div>
  );
};

export default BenefitSection;