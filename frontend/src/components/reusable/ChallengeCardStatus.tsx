import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChallengeCount } from "@/types/challenge";

const ChallengeCardStatus: React.FC<{ challenges: ChallengeCount[] }> = ({
  challenges,
}) => {
  return (
    <Card className="w-full mb-6">
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {challenges.map((challenge, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold">{challenge.count}</p>
              <p className="text-sm text-gray-500">{challenge.status}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
export default ChallengeCardStatus;
