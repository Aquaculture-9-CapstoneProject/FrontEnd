import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-5 px-28 py-4 max-w-[1440px] mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div>
        <img
          src="logo.svg"
          alt="Logo BlueBay"
          className="w-[96px] h-[48px]"
        />
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-normal text-sm text-neutral-1">
          <li>
            <p>
              Beranda
            </p>
          </li>
          <li>
            <p>
              Keunggulan
            </p>
          </li>
          <li>
            <p>
              Artikel
            </p>
          </li>
          <li>
            <p>
              Testimoni
            </p>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-8">
        <p className="text-sm font-normal text-neutral-1">
          Masuk
        </p>
        <button className="btn bg-primary-4 text-neutral-5 border-none w-[114px] h-[38px]">
          Buat Akun
        </button>
      </div>
    </div>
  );
};

export default Navbar;