import { Settings, HelpCircle, Users } from "lucide-react";
import NavSection from "./NavSection";

const SecondaryNav = () => {
  const secondaryLinks = [
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      href: "/dashboard/#",
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      label: "Help Center",
      href: "/dashboard/#",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Refer family & friends",
      href: "/dashboard/#",
    },
  ];

  return <NavSection links={secondaryLinks} />;
};

export default SecondaryNav;
