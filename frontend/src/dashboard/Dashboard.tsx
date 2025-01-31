import ChallengeCountsSection from "./overview/ChallengeCountsSection";
import RecentChallengesSection from "./overview/RecentChallengesSection";
import WelcomeSection from "./overview/WelcomeSection";

export default function Overview() {
  return (
    <div className="grid px-8  ml-8 mt-4">
      <WelcomeSection />
      <ChallengeCountsSection />
      <RecentChallengesSection />
    </div>
  );
}
