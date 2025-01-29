import React from "react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/White Logo.png";
import { Challenge } from "@/types/challenge";
import { Link } from "react-router-dom";

const ChallengeCard: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm w-full max-w-md p-3">
      {/* Header Section */}
      <div className="relative">
        <div className="bg-blue-600 rounded-lg p-2 h-36 w-full relative overflow-hidden group hover:shadow-md hover:scale-105 transition duration-2000 flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-48" />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-4 py-1 rounded-md text-sm">
            Open
          </span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="p-2 space-y-2 border-b">
        {/* Challenge Title */}
        <h3 className="text-md font-bold">{challenge.title}</h3>

        {/* Skills Section */}
        <div className="space-y-2">
          <div className="font-bold">Skills Needed: </div>
          <div className="flex flex-wrap items-center gap-1">
            {challenge.skills.map((skill, index) => (
              <span
                key={index}
                className="text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-1">
          <div className="flex">
            <span className="font-bold">Seniority Level: </span>
            <span className="text-gray-600 pl-1">({challenge.seniority})</span>
          </div>
          <div className="flex">
            <span className="font-bold">Timeline: </span>
            <span className="text-gray-600 pl-1">{challenge.timeline}</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="p-3">
        <Link to={`/dashboard/challenge/${challenge.id}`}>
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4"
          >
            View Challenge
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard;
