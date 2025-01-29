import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

interface ChallengeCount {
  count: number;
  status: string;
}

interface ChallengeStatusCountProps {
  challengeCounts: ChallengeCount;
}

const ChallengeStatusCountCard: React.FC<ChallengeStatusCountProps> = ({
  challengeCounts,
}) => {
  return (
    <Card className="w-full bg-white">
      <CardContent className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            {/* Blue line aligned with content */}
            <div className="w-1 bg-blue-500 rounded self-stretch h-[40px] mt-1" />

            {/* Content container */}
            <div className="flex flex-col">
              <span className="text-gray-600 text-xs mb-1">
                {challengeCounts.status}{" "}
                {challengeCounts.status === "Completed" ? "Challenges" : ""}
              </span>
              <span className="text-md font-bold">
                {challengeCounts.count.toString().padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Icon with blue circle background */}
          <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
            <ClipboardList className="h-4 w-4 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChallengeStatusCountCard;
