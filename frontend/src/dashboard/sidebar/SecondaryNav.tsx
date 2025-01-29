import { Settings, HelpCircle, Users } from "lucide-react";
import NavSection from "./NavSection";

const SecondaryNav = () => {
  const secondaryLinks = [
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      href: "/settings",
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      label: "Help Center",
      href: "/help",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Refer family & friends",
      href: "/refer",
    },
  ];

  return <NavSection links={secondaryLinks} />;
};

export default SecondaryNav;
