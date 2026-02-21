import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";

import Logo from "../../../assets/images/beranda/icon/logo.svg";
import Avatar from "../../../assets/images/beranda/avatar.png";
import ProfileIcon from "../../../assets/images/beranda/icon/account.svg";
import PremiumIcon from "../../../assets/images/beranda/icon/star.svg";
import LogoutIcon from "../../../assets/images/beranda/icon/logout.svg";

/* ======================
   Static Data
====================== */
const NAV_MENU = [
  { name: "Series", path: "/beranda" },
  { name: "Film", path: "/beranda" },
  { name: "Daftar Saya", path: "/beranda" },
];

const DROPDOWN_MENU = [
  {
    label: "Profil Saya",
    path: "/beranda",
    icon: ProfileIcon,
  },
  {
    label: "Ubah Premium",
    path: "/beranda",
    icon: PremiumIcon,
  },
  {
    label: "Keluar",
    path: "/",
    icon: LogoutIcon,
  },
];

/* ======================
   Component
====================== */
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className="flex justify-between items-center text-white text-xs md:text-lg p-6 w-full">
      {/* ======================
          LEFT NAV
      ====================== */}
      <nav className="flex gap-2 md:gap-10">
        <img
          src={Logo}
          alt="Logo"
          className="w-[45px] md:w-[103.55px]"
        />

        <div className="flex items-center gap-3 md:gap-20">
          {NAV_MENU.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-textPrimary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* ======================
          RIGHT NAV (AVATAR)
      ====================== */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <img
            src={Avatar}
            alt="User Avatar"
            className="w-10 md:w-auto"
          />
        </button>

      {isDropdownOpen && (
  <div className="absolute right-0 top-12 w-48 bg-mainBG rounded z-10">
    {DROPDOWN_MENU.map((item) => (
      <Link
        key={item.label}
        to={item.path}
        className="flex items-center gap-3 px-4 py-2 hover:text-textPrimary hover:bg-blue"
        onClick={() => setIsDropdownOpen(false)}
      >
        <img
          src={item.icon}
          alt={item.label}
          className="w-4 h-4"
        />
        <span>{item.label}</span>
      </Link>
    ))}
  </div>
)}

      </div>
    </header>
  );
};

export default Navbar;
