const MenuItem = ({ icon, label, onClick, isActive }) => {
  const activeIcon = `${icon.split(".svg")[0]}-done.svg`;

  return (
    <li
      className="relative flex gap-2 rounded-lg overflow-hidden"
      onClick={onClick}
    >
      <span
        className={`absolute inset-0 bg-primary-5 transition-transform duration-500 ease-in-out ${
          isActive ? "-translate-x-0" : "-translate-x-full"
        }`}
      ></span>

      <div className="relative z-10 h-11 flex items-center px-3 transition-colors duration-300 ease-in-out">
        <img
          src={isActive ? activeIcon : icon}
          alt={label}
          className={`w-6 h-6 transition-colors duration-300 ease-in-out`}
        />
        <p
          className={`ml-2 text-base font-semibold transition-colors duration-300 ease-in-out ${
            isActive ? "text-neutral-5" : "text-neutral-2"
          }`}
        >
          {label}
        </p>
      </div>
    </li>
  );
};

export default MenuItem;
