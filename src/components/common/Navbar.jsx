import { useNavigate } from "react-router-dom";
import useNavbar from "../../hooks/useNavbar";

export default function Navbar() {
  const {
    user,
    searchQuery,
    setSearchQuery,
    handleLogout,
    handleKeyDown,
    handleSearch,
  } = useNavbar(); // Use the custom hook
  const navigate = useNavigate();

  return (
    <div className="navbar sticky top-0 flex justify-between items-center bg-neutral-5 border-b-neutral-4 border-[1px] px-8 py-4 z-50">
      {/* Logo Section */}
      <div className="hidden md:flex">
        <img
          className="w-24 cursor-pointer"
          src="/logo.svg"
          alt="Logo"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="relative w-full lg:w-[52%]">
        {/* Input */}
        <input
          type="text"
          value={searchQuery} // Mengikat input dengan state searchQuery
          onChange={(e) => setSearchQuery(e.target.value)} // Update state saat input berubah
          placeholder="Cari di BluyBay"
          className="p-3 py-3 rounded-lg border-2 border-neutral-4 border-solid w-full h-12 focus:outline-none"
          onKeyDown={handleKeyDown} // Menangani pencarian saat tombol enter ditekan
        />{" "}
        <button
          className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-neutral-600"
          onClick={handleSearch}
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4762 14.4713H15.6862L15.4062 14.2013C16.6062 12.8013 17.2262 10.8913 16.8862 8.86133C16.4162 6.08133 14.0962 3.86133 11.2962 3.52133C7.06621 3.00133 3.50621 6.56133 4.02621 10.7913C4.36621 13.5913 6.58621 15.9113 9.36621 16.3813C11.3962 16.7213 13.3062 16.1013 14.7062 14.9013L14.9762 15.1813V15.9713L19.2262 20.2213C19.6362 20.6313 20.3062 20.6313 20.7162 20.2213C21.1262 19.8113 21.1262 19.1413 20.7162 18.7313L16.4762 14.4713ZM10.4762 14.4713C7.98621 14.4713 5.97621 12.4613 5.97621 9.97133C5.97621 7.48133 7.98621 5.47133 10.4762 5.47133C12.9662 5.47133 14.9762 7.48133 14.9762 9.97133C14.9762 12.4613 12.9662 14.4713 10.4762 14.4713Z"
              fill="#A3A3A3"
            />
          </svg>{" "}
        </button>
      </div>
      <div className="md:flex items-center gap-5 hidden">
        {/* Cart Button */}
        <div
          className="hover:bg-neutral-4 px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.3291 21C8.04577 21 7.00744 22.05 7.00744 23.3334C7.00744 24.6167 8.04577 25.6667 9.3291 25.6667C10.6124 25.6667 11.6624 24.6167 11.6624 23.3334C11.6624 22.05 10.6124 21 9.3291 21ZM2.3291 3.50004C2.3291 4.14171 2.8541 4.66671 3.49577 4.66671H4.66244L8.86244 13.5217L7.28744 16.3684C6.43577 17.9317 7.55577 19.8334 9.3291 19.8334H22.1624C22.8041 19.8334 23.3291 19.3084 23.3291 18.6667C23.3291 18.025 22.8041 17.5 22.1624 17.5H9.3291L10.6124 15.1667H19.3041C20.1791 15.1667 20.9491 14.6884 21.3458 13.965L25.5224 6.39337C25.9541 5.62337 25.3941 4.66671 24.5074 4.66671H7.24077L6.4591 2.99837C6.27244 2.59004 5.85244 2.33337 5.4091 2.33337H3.49577C2.8541 2.33337 2.3291 2.85837 2.3291 3.50004ZM20.9958 21C19.7124 21 18.6741 22.05 18.6741 23.3334C18.6741 24.6167 19.7124 25.6667 20.9958 25.6667C22.2791 25.6667 23.3291 24.6167 23.3291 23.3334C23.3291 22.05 22.2791 21 20.9958 21Z"
              fill="#262626"
            />
          </svg>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            <li>
              <button
                onClick={() => navigate("/profile")}
                className="font-semibold"
              >
                {user?.name || "Guest"}
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/order")}>Daftar Pesanan</button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-6 dropdown dropdown-end lg:hidden">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
        >
          <li>
            <button
              onClick={() => navigate("/profile")}
              className="font-semibold"
            >
              {user?.name || "Guest"}
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/home")}>Beranda</button>
          </li>
          <li>
            <button onClick={() => navigate("/order")}>Daftar Pesanan</button>
          </li>
          <li>
            <button onClick={() => navigate("/cart")}>Keranjang</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
