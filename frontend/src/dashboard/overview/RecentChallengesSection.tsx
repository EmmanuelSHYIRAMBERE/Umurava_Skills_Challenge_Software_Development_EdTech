import ChallengeCard from "@/components/reusable/ChallengeCard";
import { Challenge } from "@/types/challenge";
import { ChevronRight } from "lucide-react";

const recentChallenges: Challenge[] = [
  {
    id: "1",
    title: "Design a Dashboard for SokoFund, Fintech Product",
    skills: ["UI Design", "User Research"],
    seniority: "Junior",
    status: "Ongoing",
    timeline: "15 Days",
  },
  {
    id: "2",
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    skills: ["UI Design", "User Research"],
    seniority: "Intermediate",
    status: "Open",
    timeline: "15 Days",
  },
  {
    id: "3",
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    skills: ["UI Design", "User Research"],
    seniority: "Senior",
    status: "Open",
    timeline: "15 Days",
  },
];

export default function RecentChallengesSection() {
  return (
    <div className="grid grid-cols-1 gap-1 pt-3">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-lg font-bold">Recent Challenges</h1>
        {/* Add  a blue "See all* and a blue forward icon linkable to the challenges page*/}
        <div className="flex items-center">
          <span className="text-blue-600 hover:underline cursor-pointer">
            See all
          </span>
          <ChevronRight className="w-5 h-5 ml-2 text-blue-600" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentChallenges.map((challenge: Challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
