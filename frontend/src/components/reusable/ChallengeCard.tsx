import React from "react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/White Logo.png";

interface ChallengeCard {
  id: string;
  title: string;
  skills: string[];
  seniority: "Junior" | "Intermediate" | "Senior";
  timeline: string;
}

const ChallengeCard: React.FC<{ challenge: ChallengeCard }> = ({
  challenge,
}) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm w-full max-w-md p-5">
      {/* Header Section */}
      <div className="relative">
        <div className="bg-blue-600 rounded-t-lg p-4 h-40 flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-48" />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-4 py-1 rounded-md text-sm">
            Open
          </span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="p-6 space-y-6 border-b">
        {/* Challenge Title */}
        <h3 className="text-xl font-semibold">{challenge.title}</h3>

        {/* Skills Section */}
        <div className="space-y-3">
          <div className="font-bold">Skills Needed: </div>
          <div className="flex flex-wrap gap-2">
            {challenge.skills.map((skill, index) => (
              <span
                key={index}
                className="text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-2">
          <div>
            <span className="font-bold">Seniority Level: </span>
            <span className="text-gray-600">({challenge.seniority})</span>
          </div>
          <div>
            <span className="font-bold">Timeline: </span>
            <span className="text-gray-600">{challenge.timeline}</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="p-6">
        <Button
          variant="default"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8"
        >
          View Challenge
        </Button>
      </div>
    </div>
  );
};

export default ChallengeCard;
