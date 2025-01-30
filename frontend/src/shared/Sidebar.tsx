import Logo from "@/dashboard/sidebar/Logo";
import MainNav from "@/dashboard/sidebar/MainNav";
import SecondaryNav from "@/dashboard/sidebar/SecondaryNav";
import UserProfile from "@/dashboard/sidebar/UserProfile";

const Sidebar = () => {
  return (
    <div className="hidden top-0 lg:flex flex-col h-screen w-72 bg-blue-600">
      <Logo />

      <div className="flex-1 flex flex-col">
        <MainNav />
        <div className="flex-1" /> {/* Spacer */}
        <SecondaryNav />
      </div>

      <div className="w-full border-t border-white/10 flex items-center">
        <UserProfile name="Hilaire Sh" email="hilaire@uidesign" avatarUrl="" />
      </div>
    </div>
  );
};

export default Sidebar;
