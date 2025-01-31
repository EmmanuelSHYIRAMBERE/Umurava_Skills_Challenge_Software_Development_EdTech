import { cn } from "@/lib/utils";
import { NavLinkProps } from "@/types/sidebar";
import { Link } from "react-router-dom";

const SideNavLink: React.FC<NavLinkProps> = ({
  icon,
  label,
  href,
  isActive,
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
        "text-white hover:bg-white hover:bg-opacity-90 hover:text-blue-600",
        isActive && "bg-white text-blue-600"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default SideNavLink;
