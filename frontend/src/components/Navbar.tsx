import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaCog,
  FaEnvelope,
  FaSignOutAlt,
  FaRegBell,
} from "react-icons/fa";


const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
const navigate = useNavigate();
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")!)
  : null;

const isAdmin = user && user.role === "admin";


  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setShowNotifications(false);
    }
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target as Node)
    ) {
      setShowProfileDropdown(false);
    }
  };

  useEffect(() => {
    if (showNotifications || showProfileDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications, showProfileDropdown]);
   const handleLogout = async () => {
     try {
      localStorage.clear();
      //  const response = await axios.post(`${SERVER_BASE_URL}/api/v1/auth/logout`);

      //  if (response.status === 200) {
      //    localStorage.clear();
         navigate("/login"); // Redirect to the login page or any other appropriate page
      //  } else {
      //    console.error("Logout failed");
      //  }
     } catch (error) {
       console.error("Error during logout:", error);
     }
   };
  return (
    <nav className="bg-white px-6 py-4 flex w-full justify-between items-center ">
      <div className="flex items-center ml-10">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-50 pl-10 pr-48 py-2 p rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 mr-10 relative ">
        <div
          className="relative bg-gray-100 rounded-full p-2"
          ref={notificationRef}
        >
          <FaRegBell
            className="text-gray-500 hover:text-gray-700 cursor-pointer text-1xl"
            onClick={toggleNotifications}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl transform transition-all duration-200 ease-out">
              <div className="p-3">
                {/* Header */}
                <div className="flex items-center justify-between px-2 pb-2 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Notifications
                  </h3>
                  <button className="text-xs font-medium text-blue-600 hover:text-blue-700 px-2 py-1 rounded hover:bg-blue-50 transition-colors duration-150">
                    Mark all as read
                  </button>
                </div>

                {/* Notifications List */}
                <div className="py-2 max-h-[320px] overflow-y-auto">
                  {/* Unread Notification */}
                  <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer transition-colors duration-150 border-l-4 border-blue-500 bg-blue-50/50">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full mt-1">
                        <FaEnvelope className="text-blue-600 text-sm" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-800 font-medium">
                          New message from Sarah
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Hey, can we schedule a meeting...
                        </p>
                        <span className="text-xs text-gray-400 mt-1 block">
                          2 minutes ago
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Read Notification */}
                  <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer transition-colors duration-150">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gray-100 p-2 rounded-full mt-1">
                        <FaBell className="text-gray-500 text-sm" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">
                          System maintenance completed
                        </p>
                        <span className="text-xs text-gray-400 mt-1 block">
                          2 hours ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <div className="flex justify-between items-center px-3">
                    <button
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                      onClick={() => setShowNotifications(false)}
                    >
                      View All Notifications
                    </button>
                    <button
                      className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors duration-150"
                      onClick={() => setShowNotifications(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative" ref={profileRef}>
          <div
            className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl flex items-center justify-center"
            onClick={toggleProfileDropdown}
          >
            {user && user.photo ? (
              <img
                src={user.photo}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg">
                {user ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
            )}
          </div>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl transform transition-all duration-200 ease-out">
              <div className="p-3">
                {/* User Info Section */}
                <div className="px-3 py-2 mb-2">
                  <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                    <div className="bg-blue-100 p-2 rounded-full">
                      {user && user.photo ? (
                        <img
                          src={user.photo}
                          alt={user.name}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg">
                          {user ? user.name.charAt(0).toUpperCase() : "U"}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {user ? user.name : "User"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {user ? user.email : "user@example.com"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Navigation Links */}
                <div className="space-y-1">
                  <Link
                    to={isAdmin ? "/admin/settings" : "/dashboard/settings"}
                    className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-150 group"
                  >
                    <FaUserCircle className="mr-3 text-gray-400 group-hover:text-blue-500" />
                    <span>My Profile</span>
                  </Link>

                  <Link
                    to={isAdmin ? "/admin/settings" : "/dashboard/settings"}
                    className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-150 group"
                  >
                    <FaCog className="mr-3 text-gray-400 group-hover:text-blue-500" />
                    <span>Settings</span>
                  </Link>

                
                </div>

                {/* Divider */}
                <div className="my-2 border-t border-gray-100"></div>

                {/* Sign Out Button */}
                <button
                  className="flex items-center w-full px-3 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors duration-150 group"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="mr-3 group-hover:text-red-600" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
