import { NavSectionProps } from "@/types/sidebar";
import SideNavLink from "./SideNavLink";

const NavSection: React.FC<NavSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-1 px-2">
      {title && (
        <h3 className="text-white/60 text-sm font-medium px-4 py-2">{title}</h3>
      )}
      {links.map((link) => (
        <SideNavLink key={link.href} {...link} />
      ))}
    </div>
  );
};

export default NavSection;
