import { MobileMenu } from "@/dashboard/mobile/MobileMenu";
import { NotificationBell } from "@/dashboard/navbar/NotificationBell";
import { SearchBar } from "@/dashboard/navbar/SearchBar";
import { UserAvatar } from "@/dashboard/navbar/UserAvatar";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:ml-72">
      <div className="flex h-12 items-center px-4 md:px-6">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex w-full md:w-1/2">
            <MobileMenu />

            <SearchBar />
          </div>
          <div className="flex items-center gap-4">
            <NotificationBell />
            <UserAvatar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
