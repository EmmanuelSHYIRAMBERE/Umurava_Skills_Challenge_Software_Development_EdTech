import  { useEffect, useState } from "react";
import axios from "axios";
import OverviewChallengeStatusCountCard from "@/dashboard/overview/OverviewChallengeStatusCountCard";
import { ChallengeCount } from "@/types/challenge";
import { SERVER_BASE_URL } from "@/constansts/constants";
interface Challenge {
  status: string;
 
}

interface StatusCounts {
  Completed: number;
  Open: number;
  Ongoing: number;
}
const ChallengeCountsSection = () => {
  const [challengeCounts, setChallengeCounts] = useState<ChallengeCount[]>([
    { status: "Completed", count: 0 },
    { status: "Open", count: 0 },
    { status: "Ongoing", count: 0 },
  ]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      const token = localStorage.getItem("token");
      console.log("tokenss", token);

      if (!token) {
        console.error("No token found in localStorage.");
        setError("Authentication token is missing.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get<{ challenges: Challenge[] }>(
          `${SERVER_BASE_URL}/api/v1/challenges`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const challenges = response.data.challenges;

        // Count challenges based on status
        const counts: StatusCounts = {
          Completed: 0,
          Open: 0,
          Ongoing: 0,
        };
        challenges.forEach((challenge) => {
          if (challenge.status) {
            const status = (challenge.status.charAt(0).toUpperCase() +
              challenge.status.slice(1)) as keyof StatusCounts;

            // Use type-safe check instead of hasOwnProperty
            if (status in counts) {
              counts[status]++;
            }
          }
        });

        // Update the state with the counts
        setChallengeCounts([
          { status: "Completed", count: counts.Completed },
          { status: "Open", count: counts.Open },
          { status: "Ongoing", count: counts.Ongoing },
        ]);
      } catch (error) {
        console.error("Error fetching challenges:", error);
        setError("Failed to fetch challenges. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-8 mb-2">
      {challengeCounts.map((challengeCount, index) => (
        <OverviewChallengeStatusCountCard
          key={index}
          challengeCounts={challengeCount}
        />
      ))}
    </div>
  );
};

export default ChallengeCountsSection;
