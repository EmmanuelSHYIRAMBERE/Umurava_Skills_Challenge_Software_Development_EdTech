import { useState, useEffect } from "react";
import type { Challenge } from "@/types/challenge";
import { SERVER_BASE_URL } from "@/constansts/constants";
import { Oval } from "react-loader-spinner"; // Import the loading spinner
import HomeChallengeCard from "./comp/HomeChallengeCard";
import axios from "axios";

export default function HomeChallenge() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          `${SERVER_BASE_URL}/api/v1/challenges/open`
        );

        setChallenges(response.data.challenges);
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
    return (
      <div className="flex items-center justify-center h-screen">
        <Oval color="#00BFFF" height={40} width={40} />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 my-14">
      {challenges.length === 0 ? (
        <div>No available challenges.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {challenges.map((challenge) => (
            <HomeChallengeCard key={challenge._id} challenge={challenge} />
          ))}
        </div>
      )}
    </div>
  );
}
