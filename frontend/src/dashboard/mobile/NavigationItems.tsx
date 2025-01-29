import { cn } from "@/lib/utils";
import Logo from "../sidebar/Logo";
import MainNav from "../sidebar/MainNav";
import SecondaryNav from "../sidebar/SecondaryNav";
import UserProfile from "../sidebar/UserProfile";

interface NavigationItemsProps {
  className?: string;
}

export const NavigationItems = ({ className }: NavigationItemsProps) => {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="mb-4">
        <Logo />
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <MainNav />
        <div className="flex-1" /> {/* Spacer */}
        <SecondaryNav />
      </div>

      <div className="border-t border-gray-200 mt-auto">
        <UserProfile
          name="John Doe"
          email="john@example.com"
          avatarUrl="/path/to/avatar.jpg"
        />
      </div>
    </div>
  );
};
