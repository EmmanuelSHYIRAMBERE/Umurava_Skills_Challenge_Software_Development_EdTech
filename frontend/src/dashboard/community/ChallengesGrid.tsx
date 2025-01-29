import ChallengeCard from "@/components/reusable/ChallengeCard";
import { Challenge } from "@/types/challenge";

const ChallengesGrid: React.FC<{ challenges: Challenge[] }> = ({
  challenges,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {challenges.map((challenge, index) => (
        <ChallengeCard key={index} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengesGrid;
