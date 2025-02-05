import { KeyInstructions } from "@/dashboard/challenge/KeyInstructions/KeyInstructions";
import { ProjectCard } from "@/dashboard/challenge/ProjectCard/ProjectCard";
import { ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ChallengeDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="container bg-white mx-auto  px-20 ">
      <div className="border-b border-t p-4 mb-6">
        <div className=" mx-auto flex items-center space-x-2 text-sm">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>
          <span className="text-gray-400">/</span>
          <Link
            to="/admin/challenges"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Challenges & Hackathons
          </Link>
          <span className="text-gray-400">/</span>
       
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 pt-1">
        <div className="lg:col-span-2">
          <ProjectCard />
        </div>
        <div>
          <KeyInstructions />
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
