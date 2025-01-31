import { Link } from "react-router-dom";
import log from "@/assets/log.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center p-4 pt-8 hover:opacity-80 transition-opacity"
    >
      <img src={log} alt="Logo" className="mr-2 rounded-full" />
    </Link>
  );
};

export default Logo;
