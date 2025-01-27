import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ChallengeCard from "@/components/reusable/ChallengeCard";

interface RecentChallenge {
  id: string;
  title: string;
  skills: string[];
  seniority: "Junior" | "Intermediate" | "Senior";
  timeline: string;
}

const recentChallenges: RecentChallenge[] = [
  {
    id: "1",
    title: "Design a Dashboard for SokoFund, Fintech Product",
    skills: ["UI Design", "User Research"],
    seniority: "Junior",
    timeline: "15 Days",
  },
  {
    id: "2",
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    skills: ["UI Design", "User Research"],
    seniority: "Intermediate",
    timeline: "15 Days",
  },
  {
    id: "3",
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    skills: ["UI Design", "User Research"],
    seniority: "Senior",
    timeline: "15 Days",
  },
];

export default function RecentChallengesSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Challenges</CardTitle>
        {/* Add  a blue "See all* and a blue forward icon linkable to the challenges page*/}
        <div className="flex items-center space-x-2">
          <span className="text-blue-500 hover:underline cursor-pointer">
            See all
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {recentChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
