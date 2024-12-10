const Footer = () => {
  return (
    <footer className="bg-primary-1 text-neutral-5 py-12 px-6 sm:px-10 md:px-28">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 md:flex-row justify-between items-center md:items-start">
        {/* Logo and Description */}
        <div className="flex-1 text-center md:text-left">
          <img src="./logo.svg" alt="logo" className="mx-auto md:mx-0" />
          <p className="text-xs md:text-normal leading-5 mt-4">
            BlueBay menyediakan ikan dan produk laut segar yang bergizi,
            diproduksi dengan metode budidaya ramah lingkungan.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-sm mb-3">Navigasi</h3>
          <ul className="space-y-3 text-xs text-normal">
            <li>Beranda</li>
            <li>Keunggulan</li>
            <li>Artikel</li>
            <li>Testimoni</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-sm mb-3">Kontak</h3>
          <div className="space-y-3 text-xs text-normal">
            <p>08512345678</p>
            <p>www.example.com</p>
            <p>example@gmail.com</p>
            <p>Surabaya, Indonesia</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-sm mb-3">Dapatkan Informasi</h3>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-x-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-[288px] h-[34px] px-4 rounded-lg bg-neutral-5 text-neutral-1 placeholder-[#A3A3A3] text-sm focus:outline-none"
            />
            <button className="w-full md:w-[57px] h-[34px] bg-primary-4 rounded-lg text-neutral-5 text-xs font-semibold mt-3 md:mt-0">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
