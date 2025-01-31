import ChallengeStatusCountCard from "@/components/reusable/ChallengeStatusCountCard";
import { ChallengeCount } from "@/types/challenge";

const challengeCounts: ChallengeCount[] = [
  { status: "Completed", count: 5 },
  { status: "Open", count: 200 },
  { status: "Ongoing", count: 200 },
];

export default function ChallengeCountsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {challengeCounts.map((challengeCounts: ChallengeCount, index) => (
        <ChallengeStatusCountCard
          key={index}
          challengeCounts={challengeCounts}
        />
      ))}
    </div>
  );
}
