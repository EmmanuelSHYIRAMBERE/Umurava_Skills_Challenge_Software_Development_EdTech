import {
  FaHome,
  FaUserFriends,

  FaUserPlus,
  FaRegFileAlt,
} from "react-icons/fa";
import log from "../../assets/log.svg";
import { Link } from "react-router-dom";
import { TbHeadset } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import UserAvatar from "../comp/UserAvatar"; // Import the UserAvatar component
import { LuLogOut } from "react-icons/lu";

const SuperSidebar = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;
  return (
    <div className="fixed bg-blue-500 text-white h-screen w-72 p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-8">
          <img src={log} alt="Logo" className="mr-2 rounded-full" />
        </div>
        <nav>
          <ul className="space-y-4">
            <Link to="">
              <li className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
                <FaHome className="mr-2" />
                Dashboard
              </li>
            </Link>
            <Link to="challenges">
              <li className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
                <FaRegFileAlt className="mr-2" />
                Challenges & Hackathons
              </li>
            </Link>
            <Link to="community">
              <li className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
                <FaUserPlus className="mr-2" />
                Community
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="space-y-4">
        <Link to="settings">
          <div className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
            <FiSettings className="mr-2" />
            Settings
          </div>
        </Link>
        <Link to="help-center">
          <div className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
            <TbHeadset className="mr-2" />
            Help Center
          </div>
        </Link>
        <Link to="/refer">
          <div className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
            <FaUserFriends className="mr-2" />
            Refer family & friends
          </div>
        </Link>
        <div className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
          <UserAvatar
            avatarUrl="https://via.placeholder.com/150"
            isOnline={true}
          />
          <div className="flex flex-col">
            <span className="ml-2 text-xs">
              {user.name.length > 15
                ? user.name.slice(0, 15) + "..."
                : user.name}
            </span>
            <span className="ml-2 text-sm">{user.email}</span>
          </div>
          <LuLogOut className="ml-10" />
        </div>
      </div>
    </div>
  );
};

export default SuperSidebar;
