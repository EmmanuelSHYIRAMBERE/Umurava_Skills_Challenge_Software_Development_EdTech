import ChallengeCountsSection from "./overview/ChallengeCountsSection";
import RecentChallengesSection from "./overview/RecentChallengesSection";
import WelcomeSection from "./overview/WelcomeSection";

export default function Overview() {
  return (
    <div className="grid">
      <WelcomeSection />
      <ChallengeCountsSection />
      <RecentChallengesSection />
    </div>
  );
}
