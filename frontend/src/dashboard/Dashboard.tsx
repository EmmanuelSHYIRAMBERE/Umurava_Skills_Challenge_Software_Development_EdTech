import ChallengeCountsSection from "./overview/ChallengeCountsSection";
import RecentChallengesSection from "./overview/RecentChallengesSection";
import WelcomeSection from "./overview/WelcomeSection";

export default function Overview() {
  return (
    <div>
      <WelcomeSection />
      <ChallengeCountsSection />
      <RecentChallengesSection />
    </div>
  );
}
