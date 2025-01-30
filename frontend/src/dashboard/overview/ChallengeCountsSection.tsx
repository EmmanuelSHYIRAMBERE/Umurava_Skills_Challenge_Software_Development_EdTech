import OverviewChallengeStatusCountCard from "@/dashboard/overview/OverviewChallengeStatusCountCard";
import { ChallengeCount } from "@/types/challenge";

const challengeCounts: ChallengeCount[] = [
  { status: "Completed", count: 5 },
  { status: "Open", count: 200 },
  { status: "Ongoing", count: 200 },
];

export default function ChallengeCountsSection() {
  return (
    <div className="grid grid-cols-3 gap-8 mb-2">
      {challengeCounts.map((challengeCounts: ChallengeCount, index) => (
        <OverviewChallengeStatusCountCard
          key={index}
          challengeCounts={challengeCounts}
        />
      ))}
    </div>
  );
}
