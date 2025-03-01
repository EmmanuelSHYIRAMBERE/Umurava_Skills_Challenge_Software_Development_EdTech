import { useEffect, useState } from "react";
import LogoImage from "../assets/bluelogo.webp";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null;

  if (token && token !== "undefined" && user && user !== undefined) {
    setIsLoggedIn(true);
    setUserRole(user.role);
  }
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img src={LogoImage} alt="Umurava Logo" className="w-32 h-20" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`nav-link ${isActive("/")}`}>
              Home
            </Link>
            <Link
              to="/challenge"
              className={`nav-link ${isActive("/challenge")}`}
            >
              Challenge & Hackthons
            </Link>
            <Link
              to="/learning"
              className={`nav-link ${isActive("/learning")}`}
            >
              For Learning institutions
            </Link>
            <Link
              to="/about-us"
              className={`nav-link ${isActive("/about-us")}`}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className={`nav-link ${isActive("/contact-us")}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Join Button */}
          <div>
            {isLoggedIn ? (
              <Link
                to={userRole === "admin" ? "/admin" : "/dashboard"}
                className="bg-[#020B2D] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-[#020B2D] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200"
              >
                Join the Program
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
