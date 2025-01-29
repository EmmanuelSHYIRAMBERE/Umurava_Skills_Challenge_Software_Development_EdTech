import ChallengeCountsSection from "./overview/ChallengeCountsSection";
import RecentChallengesSection from "./overview/RecentChallengesSection";
import WelcomeSection from "./overview/WelcomeSection";

export default function Overview() {
  return (
    <div className="p-4 grid gap-2">
      <WelcomeSection />
      <ChallengeCountsSection />
      <RecentChallengesSection />
    </div>
  );
}
