import React from "react";

interface UserAvatarProps {
  avatarUrl: string;
  isOnline: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ isOnline }) => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;

  return (
    <div className="relative inline-block">
      <div className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl flex items-center justify-center">
        {user && user.photo ? (
          <img
            src={user.photo}
            alt={user.name}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 text-lg">
            {user ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
        )}
      </div>
      {isOnline && (
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
};

export default UserAvatar;
