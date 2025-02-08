import React from "react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/White Logo.png";
import { Challenge } from "@/types/challenge";
import { Link } from "react-router-dom";

const HomeChallengeCard: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="bg-white  w-full max-w-md px-4 pt-4 ">
        {/* Header Section */}
        <div className="relative">
          <div className="bg-blue-600 rounded-lg p-2 h-40 w-full relative overflow-hidden group hover:shadow-md hover:scale-105 transition duration-2000 flex justify-center items-center">
            <img src={logo} alt="Logo" className="w-48" />
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-4 py-1 rounded-md text-sm">
              {challenge.status}
            </span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="pb-2 space-y-2 ">
          {/* Challenge Title */}
          <h3 className="text-md font-bold font-sans pt-1 pb-3">
            {challenge.title}
          </h3>

          {/* Skills Section */}
          <div className="space-y-2">
            <div className="font-sans font-bold text-xs">Skills Needed: </div>
            <div className="flex flex-wrap items-center gap-1">
              {challenge.skillsNeeded.map((skill, index) => (
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
          <div className="space-y-1 text-xs">
            <div className="flex">
              <span className="font-bold ">Seniority Level: </span>
              <span className="text-gray-600 pl-1">
                ({challenge.seniority})
              </span>
            </div>
            <div className="flex">
              <span className="font-bold">Timeline: </span>
              <span className="text-gray-600 pl-1">{challenge.duration}</span>
            </div>
          </div>
        </div>

        {/* Footer Section */}
      </div>
      <div className="p-3 border-t border-gray-100">
        <Link to={`/challenge/${challenge._id}`}>
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

export default HomeChallengeCard;
