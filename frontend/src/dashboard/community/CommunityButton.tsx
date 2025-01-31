import { cn } from "@/lib/utils";
import { CommunityButtonProps } from "@/types/community";

const CommunityButton: React.FC<CommunityButtonProps> = ({
  children,
  onClick,
  variant = "default",
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors",
        variant === "default"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default CommunityButton;
