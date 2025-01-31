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
      icon: <Award className="h-5 w-5" />,
      label: "Challenges & Hackathons",
      href: "/dashboard/challenge-and-hackathons",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Community",
      href: "/dashboard/community",
    },
  ];

  return <NavSection links={mainLinks} />;
};

export default MainNav;
