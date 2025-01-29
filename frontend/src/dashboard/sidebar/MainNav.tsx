import { LayoutDashboard, Users, Award } from "lucide-react";
import NavSection from "./NavSection";

const MainNav = () => {
  const mainLinks = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Community",
      href: "/community",
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: "Hackathons",
      href: "/hackathons",
    },
  ];

  return <NavSection links={mainLinks} />;
};

export default MainNav;
