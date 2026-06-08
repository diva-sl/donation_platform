import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  Search,
  Bell,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import MobileMenu from "./MobileMenu";
import { menuItems } from "../../constants/menu";
import Logo from "../../assets/logos/logo.png";
import { logout } from "../../redux/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth?.user);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="h-24 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={Logo}
                alt="Mysticpace"
                className="h-20 lg:h-48 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item, index) =>
                item.children ? (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="
                      flex
                      items-center
                      gap-1
                      text-[15px]
                      font-medium
                      text-gray-700
                      hover:text-orange-500
                      transition
                    "
                    >
                      {item.title}
                      <ChevronDown size={16} />
                    </button>

                    {activeDropdown === index && (
                      <div className="absolute left-0 top-full pt-4 z-50">
                        <div
                          className="
                          w-[550px]
                          bg-white
                          rounded-3xl
                          shadow-2xl
                          border
                          border-gray-100
                          p-5
                        "
                        >
                          <div className="grid grid-cols-2 gap-3">
                            {item.children.map((cause, i) => (
                              <Link
                                key={i}
                                to={cause.path}
                                className="
                                flex
                                items-center
                                gap-3
                                p-4
                                rounded-xl
                                hover:bg-orange-50
                                transition-all
                              "
                              >
                                <span className="text-xl">{cause.icon}</span>

                                <div>
                                  <p className="font-medium">{cause.title}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-[15px] font-medium transition ${
                        isActive
                          ? "text-orange-500"
                          : "text-gray-700 hover:text-orange-500"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                ),
              )}
            </nav>

            {/* RIGHT SECTION */}
            <div className="hidden lg:flex items-center gap-3">
              {/* SEARCH */}
              <div className="relative">
                <Search
                  size={18}
                  className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
                />

                <input
                  type="text"
                  placeholder="Search..."
                  className="
                  w-44
                  pl-10
                  pr-4
                  py-2
                  text-sm
                  border
                  border-gray-200
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-500
                "
                />
              </div>

              {/* START FUNDRAISER */}
              <Link
                to="/start-fundraiser"
                className="
                border
                border-orange-500
                text-orange-500
                px-4
                py-2
                text-sm
                rounded-full
                font-medium
                hover:bg-orange-500
                hover:text-white
                transition
              "
              >
                Start Fundraiser
              </Link>

              {/* DONATE */}
              <Link
                to="/campaigns"
                className="
                bg-orange-500
                text-white
                px-4
                py-2
                text-sm
                rounded-full
                font-medium
                hover:bg-orange-600
                transition
              "
              >
                Donate Now
              </Link>

              {!user ? (
                <Link
                  to="/login"
                  className="
                  bg-gray-900
                  text-white
                  px-4
                  py-2
                  text-sm
                  rounded-full
                  font-medium
                  hover:bg-black
                  transition
                "
                >
                  Login
                </Link>
              ) : (
                <>
                  {/* NOTIFICATION */}
                  <button className="relative">
                    <Bell size={22} />

                    <span
                      className="
                      absolute
                      -top-1
                      -right-1
                      w-4
                      h-4
                      rounded-full
                      bg-red-500
                      text-white
                      text-[10px]
                      flex
                      items-center
                      justify-center
                    "
                    >
                      2
                    </span>
                  </button>

                  {/* PROFILE */}
                  <div ref={profileRef} className="relative">
                    <button onClick={() => setProfileOpen(!profileOpen)}>
                      {user?.avatar ? (
                        <img
                          src={user.avatar}
                          alt=""
                          className="
                          w-10
                          h-10
                          rounded-full
                          object-cover
                        "
                        />
                      ) : (
                        <div
                          className="
                          w-10
                          h-10
                          rounded-full
                          bg-orange-500
                          text-white
                          flex
                          items-center
                          justify-center
                          font-bold
                        "
                        >
                          {user?.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                      )}
                    </button>

                    {profileOpen && (
                      <div
                        className="
                        absolute
                        right-0
                        top-14
                        w-64
                        bg-white
                        rounded-2xl
                        shadow-xl
                        overflow-hidden
                      "
                      >
                        <div className="p-4 border-b">
                          <h4 className="font-semibold">{user?.name}</h4>
                          <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>

                        <Link
                          to="/profile"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                        >
                          <User size={18} />
                          Profile
                        </Link>

                        <Link
                          to="/dashboard"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                        >
                          <LayoutDashboard size={18} />
                          Dashboard
                        </Link>

                        <button
                          onClick={() => dispatch(logout())}
                          className="
                          w-full
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          text-red-500
                          hover:bg-red-50
                        "
                        >
                          <LogOut size={18} />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* MOBILE MENU */}
            <button onClick={() => setMobileOpen(true)} className="lg:hidden">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} setIsOpen={setMobileOpen} />
    </>
  );
};

export default Header;
