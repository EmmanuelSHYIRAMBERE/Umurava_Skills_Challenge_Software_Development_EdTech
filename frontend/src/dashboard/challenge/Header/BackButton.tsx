import { ChevronLeft } from "lucide-react";

export const BackButton = () => {
  return (
    <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer">
      <ChevronLeft className="w-4 h-4" />
      <span>Go back</span>
    </div>
  );
};
