
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex w-full justify-between items-center">
      <div className="flex items-center ml-10">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 mr-10">
        <FaBell className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        <Link to="/profile">
          <FaUserCircle className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
