import { useState } from "react";
import useUserStore from "../../store/useUsersStore";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ icon, label, onClick, isActive, isLogout }) => (
  <li
    className={`flex gap-2 rounded-lg ${isActive ? "bg-neutral-4" : ""}`}
    onClick={onClick}
  >
    <div className="h-11 flex items-center">
      <img
        src={icon}
        alt={label}
        className={`transition-opacity duration-200 ${
          isActive || isLogout ? "opacity-100" : "opacity-50"
        }`}
      />
      <p
        className={`text-base font-semibold ${
          isActive ? "text-neutral-1" : "text-neutral-2"
        }`}
      >
        {label}
      </p>
    </div>
  </li>
);

export default function Sidebar({ children }) {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const { clearUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    navigate("/");
  };

  const handleMenuClick = (index) => {
    setActiveMenuItem(index);
    document.getElementById("my-drawer-2").checked = false;
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
        {children}
      </div>
      <div className="drawer-side h-screen overflow-hidden">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-neutral-5 text-neutral-1 h-screen w-[392px] px-6 py-5 flex flex-col gap-5">
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
          <div className="flex gap-5 flex-col">
            <MenuItem
              icon="/admin/home/dashboard.svg"
              label="Dashboard"
              isActive={activeMenuItem === 0}
              onClick={() => handleMenuClick(0)}
            />
            <MenuItem
              icon="/admin/home/transaksi.svg"
              label="Transaksi"
              isActive={activeMenuItem === 1}
              onClick={() => handleMenuClick(1)}
            />
            <MenuItem
              icon="/admin/home/pesanan.svg"
              label="Pesanan"
              isActive={activeMenuItem === 2}
              onClick={() => handleMenuClick(2)}
            />
            <MenuItem
              icon="/admin/home/produk.svg"
              label="Produk"
              isActive={activeMenuItem === 3}
              onClick={() => handleMenuClick(3)}
            />
            <MenuItem
              icon="/admin/home/artikel.svg"
              label="Artikel"
              isActive={activeMenuItem === 4}
              onClick={() => handleMenuClick(4)}
            />
            <MenuItem
              icon="/admin/home/rating.svg"
              label="Rating"
              isActive={activeMenuItem === 5}
              onClick={() => handleMenuClick(5)}
            />
          </div>
          <div className="mt-auto">
            <MenuItem
              icon="/admin/home/logout.svg"
              label="Logout"
              isActive={false}
              isLogout={true}
              onClick={handleLogout}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
