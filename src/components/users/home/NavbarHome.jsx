import { useNavigate } from "react-router-dom";
import useUserStore from "../../../store/useUsersStore";

export default function NavbarHome() {
  const { user, clearUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    navigate("/");
  };

  return (
    <div className="navbar flex justify-between items-center bg-neutral-5 border-b-neutral-4 border-[1px] px-8 py-4">
      <div className="hidden md:flex">
        <img className="w-24" src="./logo.svg" />
      </div>

      <div className="relative w-full lg:w-[52%]">
        {/* Input */}
        <input
          type="text"
          placeholder="Cari di BluyBay"
          className="p-3 py-3 rounded-lg border-2 border-neutral-4 border-solid w-full h-[52px] focus:outline-none"
        />

        <button className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-neutral-600">
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
        {/* ChatBot Button */}
        <button className="btn border-neutral-4 bg-neutral-5 hidden lg:block">
          ChatBot
        </button>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-16 rounded-full">
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
              <span className="font-semibold">{user?.name || "Guest"}</span>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
            <li className="lg:hidden">
              <button>Chat Bot</button>
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
            <span className="font-semibold">{user?.name || "Guest"}</span>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
          <li>
            <button>ChatBot</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
