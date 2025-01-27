import ChallengeCardStatus from "@/components/reusable/ChallengeCardStatus";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChallengeCount } from "@/types/challenge";

const challengeCounts: ChallengeCount[] = [
  { status: "Completed", count: 5 },
  { status: "Open", count: 200 },
  { status: "Ongoing", count: 200 },
];

export default function ChallengeCountsSection() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Build Work Experience through Skills Challenges</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full grid grid-cols-3 gap-4">
          <ChallengeCardStatus challenges={challengeCounts} />
        </div>
      </CardContent>
    </Card>
  );
}
