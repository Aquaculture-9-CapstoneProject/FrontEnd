import { useState } from "react";
import useUserStore from "../../store/useUsersStore";
import { useLocation, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useEffect } from "react";

export default function Sidebar({ children }) {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const { clearUser } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.pathname === "/dashboard") setActiveMenuItem(0);
      if (location.pathname === "/transaksi") setActiveMenuItem(1);
      if (location.pathname === "/pesanan") setActiveMenuItem(2);
      if (location.pathname === "/produk") setActiveMenuItem(3);
      if (location.pathname === "/artikel") setActiveMenuItem(4);
    }, 100); //kasih delay animasinya kadang kagak jalan klo gk ada delay
    return () => clearTimeout(timer);
  }, [location]);

  const handleLogout = () => {
    clearUser();
    navigate("/");
  };

  const handleMenuClick = (index, to) => {
    setActiveMenuItem(index);
    document.getElementById("my-drawer-2").checked = false;
    navigate(to); // Navigasi ke URL yang diberikan
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col overflow-hidden">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        {/* Menampilkan konten dari children */}
        {children}
      </div>
      <div className="drawer-side h-screen overflow-hidden">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-neutral-5 text-neutral-1 h-screen w-[320px] px-6 py-5 flex flex-col gap-3">
          <li
            onClick={() =>
              (document.getElementById("my-drawer-2").checked = false)
            }
          >
            <div>
              <img
                src="./logo.svg"
                alt="logo"
                className="cursor-pointer h-11 mb-3"
              />
            </div>
          </li>
          <div className="flex gap-2 flex-col">
            <MenuItem
              icon="/admin/common/sidebar/dashboard.svg"
              label="Dashboard"
              isActive={activeMenuItem === 0}
              onClick={() => handleMenuClick(0, "/dashboard")}
            />
            <MenuItem
              icon="/admin/common/sidebar/transaksi.svg"
              label="Transaksi"
              isActive={activeMenuItem === 1}
              onClick={() => handleMenuClick(1, "/transaksi")}
            />
            <MenuItem
              icon="/admin/common/sidebar/pesanan.svg"
              label="Pesanan"
              isActive={activeMenuItem === 2}
              onClick={() => handleMenuClick(2, "/pesanan")}
            />
            <MenuItem
              icon="/admin/common/sidebar/produk.svg"
              label="Produk"
              isActive={activeMenuItem === 3}
              onClick={() => handleMenuClick(3, "/produk")}
            />
            <MenuItem
              icon="/admin/common/sidebar/artikel.svg"
              label="Artikel"
              isActive={activeMenuItem === 4}
              onClick={() => handleMenuClick(4, "/artikel")}
            />
          </div>
          <div className="mt-auto">
            <MenuItem
              icon="/admin/common/sidebar/logout.svg"
              label="Logout"
              isActive={false}
              onClick={handleLogout}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
