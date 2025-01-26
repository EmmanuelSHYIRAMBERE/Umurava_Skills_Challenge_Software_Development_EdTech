import {
  FaHome,
  FaChartLine,
  FaUserFriends,
  FaUserCircle,
  FaQuestionCircle,
} from "react-icons/fa";
import log from "../assets/log.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-blue-500 text-white h-screen w-72 p-6 flex flex-col justify-between">
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
            <Link to="challenge">
              <li className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
                <FaChartLine className="mr-2" />
                Challenges & Hackathons
              </li>
            </Link>
            <Link to="community">
              <li className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
                <FaUserFriends className="mr-2" />
                Community
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="space-y-4">
        <div className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
          <FaUserCircle className="mr-2" />
          <span>Hilaire Sh</span>
        </div>
        <Link to="settings">
          <div className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
            <FaQuestionCircle className="mr-2" />
            Settings
          </div>
        </Link>
        <Link to="help-center">
          <div className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
            <FaQuestionCircle className="mr-2" />
            Help Center
          </div>
        </Link>
        <Link to="/refer">
          <div className="flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500">
            <FaUserFriends className="mr-2" />
            Refer family & friends
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
