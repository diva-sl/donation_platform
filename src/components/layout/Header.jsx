import React, { useEffect, useState } from "react";
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

  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <img
                src={Logo}
                alt="Mysticpace"
                className="h-16 object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) =>
                item.children ? (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                  >
                    <button className="flex items-center gap-1 font-medium text-gray-700">
                      {item.title}
                      <ChevronDown size={16} />
                    </button>

                    {showMegaMenu && (
                      <div className="absolute top-full left-0 mt-4 w-[500px] bg-white rounded-2xl shadow-xl p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {item.children.map((cause, i) => (
                            <Link
                              key={i}
                              to={cause.path}
                              className="p-3 rounded-xl hover:bg-orange-50"
                            >
                              <div className="font-medium">
                                {cause.icon} {cause.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700 font-medium"
                    }
                  >
                    {item.title}
                  </NavLink>
                ),
              )}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search */}

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
                  placeholder="Search campaigns..."
                  className="
      w-60
      pl-10
      pr-4
      py-2
      border
      rounded-full
      focus:outline-none
      focus:ring-2
      focus:ring-orange-500
    "
                />
              </div>

              <Link
                to="/start-fundraiser"
                className="
      border
      border-orange-500
      text-orange-500
      px-5
      py-2
      rounded-full
      font-medium
      hover:bg-orange-500
      hover:text-white
      transition
    "
              >
                Start Fundraiser
              </Link>

              <Link
                to="/campaigns"
                className="
      bg-orange-500
      text-white
      px-5
      py-2
      rounded-full
      font-medium
      hover:bg-orange-600
      transition
    "
              >
                Donate Now
              </Link>

              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="
    bg-gray-900
    text-white
    px-5
    py-2
    rounded-full
    font-medium
    hover:bg-black
    transition
  "
                  >
                    Login
                  </Link>
                </>
              ) : (
                <>
                  {/* Notification */}

                  <button className="relative">
                    <Bell size={22} />

                    <span
                      className="
          absolute
          -top-1
          -right-1
          bg-red-500
          text-white
          text-xs
          rounded-full
          w-4
          h-4
          flex
          items-center
          justify-center
        "
                    >
                      2
                    </span>
                  </button>

                  {/* Avatar */}

                  <div className="relative">
                    <button onClick={() => setProfileOpen(!profileOpen)}>
                      {user?.avatar ? (
                        <img
                          src={user.avatar}
                          alt="avatar"
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
                          className="
                flex
                items-center
                gap-3
                px-4
                py-3
                hover:bg-gray-50
              "
                        >
                          <User size={18} />
                          Profile
                        </Link>

                        <Link
                          to="/dashboard"
                          className="
                flex
                items-center
                gap-3
                px-4
                py-3
                hover:bg-gray-50
              "
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
            {/* Mobile */}
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
