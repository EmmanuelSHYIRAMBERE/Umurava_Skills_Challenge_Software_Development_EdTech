import React from "react";
import avatarUrl from "../../assets/blog-1.jpg"
interface UserAvatarProps {
  avatarUrl: string;
  isOnline: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({  isOnline }) => {
  return (
    <div className="relative inline-block">
      <img
        src={avatarUrl}
        alt="User Profile"
        className="w-10 h-10 rounded-full border-2 border-white"
      />
      {isOnline && (
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
};

export default UserAvatar;
