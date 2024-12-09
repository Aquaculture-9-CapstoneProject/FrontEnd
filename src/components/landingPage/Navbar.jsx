import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMenuOpenRef = useRef(isMenuOpen);
  const navigate = useNavigate();

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest(".navbar") && isMenuOpenRef.current) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside, isMenuOpen]);

  const handleToggleMenu = () => {
    // Gunakan setTimeout untuk sedikit menunda perubahan status menu
    setTimeout(() => {
      setIsMenuOpen((prevState) => !prevState);
    }, 0);
  };

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="navbar bg-neutral-5 border-b-neutral-4 border-[1px] z-20 fixed px-4 lg:px-28 flex items-center justify-between w-full">
      <div className="flex-none">
        <img src="./logo.svg" alt="logo" className="w-24 h-12" />
      </div>

      {/* Menu Hamburger (Mobile) */}
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            aria-label="Toggle menu"
            className="btn btn-ghost"
            onClick={handleToggleMenu} // Gunakan handler yang sudah diperbarui
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-4 shadow-lg"
            >
              <li className="mb-2 hover:bg-neutral-4 rounded-md hover:text-primary-5 cursor-pointer">
                <a href="#beranda">Beranda</a>
              </li>
              <li className="mb-2 hover:bg-neutral-4 rounded-md hover:text-primary-5 cursor-pointer">
                <a href="#keunggulan">Keunggulan</a>
              </li>
              <li className="mb-2 hover:bg-neutral-4 rounded-md hover:text-primary-5 cursor-pointer">
                <a href="#artikel">Artikel</a>
              </li>
              <li className="mb-4 hover:bg-neutral-4 rounded-md hover:text-primary-5 cursor-pointer">
                <a href="#testimoni">Testimoni</a>
              </li>
              <hr className="border-t border-neutral-3 my-2" />
              <li className="mb-2 hover:bg-neutral-4 rounded-md hover:text-primary-5 cursor-pointer">
                <a
                  onClick={() => handleNavigate("/login")}
                  className="text-neutral-1 block text-center"
                >
                  Masuk
                </a>
              </li>
              <li className="hover:bg-neutral-2 cursor-pointer">
                <a
                  onClick={() => handleNavigate("/register")}
                  className="bg-primary-5 text-neutral-5 px-5 py-2 rounded-md block text-center hover:bg-primary-4"
                >
                  Buat Akun
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li className="hover:text-primary-5 cursor-pointer">
            <a href="#beranda">Beranda</a>
          </li>
          <li className="hover:text-primary-5 cursor-pointer">
            <a href="#keunggulan">Keunggulan</a>
          </li>
          <li className="hover:text-primary-5 cursor-pointer">
            <a href="#fitur">Fitur</a>
          </li>
          <li className="hover:text-primary-5 cursor-pointer">
            <a href="#testimoni">Testimoni</a>
          </li>
        </ul>
      </div>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden lg:flex gap-4">
        <a
          className="text-neutral-1 hover:text-primary-5 cursor-pointer"
          onClick={() => handleNavigate("/login")}
        >
          Masuk
        </a>
        <a
          className="bg-primary-5 text-neutral-5 px-5 py-[10px] rounded-md hover:bg-primary-4 cursor-pointer"
          onClick={() => handleNavigate("/register")}
        >
          Buat Akun
        </a>
      </div>
    </div>
  );
};

export default Navbar;
