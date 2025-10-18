import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/more/logo1.png";
import { Link } from "react-router";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#331A15] text-[#F5EDE0] py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Espresso Emporium Logo"
            className="w-10 h-10 rounded-full"
          />
          <Link to={"/"} className="text-2xl font-rancho tracking-wide">
            Espresso Emporium
          </Link>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-10 text-lg font-medium raleway">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#D2B48C] transition ${
                isActive ? "text-[#D2B48C]" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[#D2B48C] transition ${
                isActive ? "text-[#D2B48C]" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `hover:text-[#D2B48C] transition ${
                isActive ? "text-[#D2B48C]" : ""
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[#D2B48C] transition ${
                isActive ? "text-[#D2B48C]" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `hover:text-[#D2B48C] transition ${
                isActive ? "text-[#D2B48C]" : ""
              }`
            }
          >
            Community
          </NavLink>
        </nav>

        {/* Right: Login Button (always visible on large screen) */}
        <div className="hidden lg:block">
          <Link
            to={"/auth/login"}
            className="bg-[#D2B48C] raleway text-[#331A15] font-semibold px-6 py-2 rounded-xl hover:bg-[#b68c65] transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#F5EDE0] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#331A15] text-center py-6 space-y-6 shadow-md z-50">
          <nav className="flex flex-col gap-4 text-lg font-medium raleway">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-[#D2B48C] transition ${
                  isActive ? "text-[#D2B48C]" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-[#D2B48C] transition ${
                  isActive ? "text-[#D2B48C]" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/menu"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-[#D2B48C] transition ${
                  isActive ? "text-[#D2B48C]" : ""
                }`
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-[#D2B48C] transition ${
                  isActive ? "text-[#D2B48C]" : ""
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/users"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-[#D2B48C] transition ${
                  isActive ? "text-[#D2B48C]" : ""
                }`
              }
            >
              Community
            </NavLink>
          </nav>

          {/* Mobile Login Button */}
          <button className="bg-[#D2B48C] raleway text-[#331A15] font-semibold px-6 py-2 rounded-xl hover:bg-[#b68c65] transition">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
