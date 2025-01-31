import { ChallengeHeader } from "@/dashboard/challenge/Header/ChallengeHeader";
import { KeyInstructions } from "@/dashboard/challenge/KeyInstructions/KeyInstructions";
import { ProjectCard } from "@/dashboard/challenge/ProjectCard/ProjectCard";

const ChallengeDetails = () => {
  return (
    <div className="container bg-white mx-auto">
      <ChallengeHeader />
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
