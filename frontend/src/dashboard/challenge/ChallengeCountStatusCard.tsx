import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChallengeCountStatusCardProps } from "@/types/challenge";

const ChallengeCountStatusCard = ({
  status,
  count,
  isActive = false,
  onClick,
}: ChallengeCountStatusCardProps) => {
  const statusDisplay = {
    all: "All Challenge",
    completed: "Completed Challenge",
    open: "Open Challenge",
    ongoing: "Ongoing Challenge",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
        "hover:bg-blue-100 hover:text-blue-600",
        isActive ? "bg-blue-100" : "bg-gray-100",
        "w-full md:w-auto"
      )}
    >
      <FileText
        className={cn("h-5 w-5", isActive ? "text-blue-600" : "text-gray-500")}
      />
      <span
        className={cn(
          "font-medium",
          isActive ? "text-blue-600" : "text-gray-500"
        )}
      >
        {statusDisplay[status]}
      </span>
      <span
        className={cn(
          "flex items-center justify-center h-6 min-w-[24px] rounded-full text-sm",
          isActive ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-500"
        )}
      >
        {count}
      </span>
    </button>
  );
};

export default ChallengeCountStatusCard;
