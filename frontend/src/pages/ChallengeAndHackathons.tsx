import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ChallengeCard from "@/components/reusable/ChallengeCard";
import type { Challenge, ChallengeStatus } from "@/types/challenge";
import ChallengeCountStatusCard from "@/dashboard/challenge/ChallengeCountStatusCard";
import { Oval } from "react-loader-spinner";
import { SERVER_BASE_URL } from "@/constansts/constants";
import axios from "axios";

export default function ChallengeAndHackathons() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setFilter] = React.useState<ChallengeStatus>("all");
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `${SERVER_BASE_URL}/api/v1/challenges`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
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

  const filteredChallenges = React.useMemo(() => {
    if (filter === "all") return challenges;
    return challenges.filter(
      (challenge) => challenge.status.toLowerCase() === filter
    );
  }, [filter, challenges]);

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

  const getChallengeCount = (status: ChallengeStatus) => {
    if (status === "all") return challenges.length;
    return challenges.filter(
      (challenge) => challenge.status.toLowerCase() === status
    ).length;
  };

  return (
    <div className="container px-8 ml-8">
      <div className="mb-4">
        <h1 className="text-lg font-bold">Challenges</h1>
        <p className="text-gray-600">
          Join a challenge or a hackathon to gain valuable work experience
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mb-3">
        {(["all", "completed", "open", "ongoing"] as ChallengeStatus[]).map(
          (status) => (
            <ChallengeCountStatusCard
              key={status}
              status={status}
              count={getChallengeCount(status)}
              isActive={filter === status}
              onClick={() => setFilter(status)}
            />
          )
        )}
      </div>

      {filteredChallenges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard key={challenge._id} challenge={challenge} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-50 rounded-lg">
          <div className="text-gray-500 text-xl mb-2">
            No Challenges Available
          </div>
          <p className="text-gray-400">
            {filter === "all"
              ? "There are currently no challenges available."
              : `There are no ${filter} challenges at the moment.`}
          </p>
        </div>
      )}

      {filteredChallenges.length > 0 && (
        <div className="flex items-center justify-between gap-2 px-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === 2}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
