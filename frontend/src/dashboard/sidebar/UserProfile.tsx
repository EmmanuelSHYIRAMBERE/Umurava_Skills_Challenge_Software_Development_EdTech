import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserProfileProps } from "@/types/sidebar";
import { LogOut } from "lucide-react";

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  avatarUrl,
}) => {
  return (
    <div className="flex items-center justify-between gap-1 px-4 py-10">
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col mr-12">
        <span className="text-white font-medium">{name}</span>
        <span className="text-white/60 text-sm">{email}</span>
      </div>
      <LogOut className="h-5 w-5 text-white" />
    </div>
  );
};

export default UserProfile;
