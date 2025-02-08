import ChallengeCard from "@/components/reusable/ChallengeCard";
import { SERVER_BASE_URL } from "@/constansts/constants";
import { Challenge } from "@/types/challenge";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";



export default function RecentChallengesSection() {
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchChallenges = async () => {
        const token=localStorage.getItem("token")
        console.log("tokenss",token)
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
    <div className="grid grid-cols-1 gap-1 pt-3">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-lg font-bold">Recent Challenges</h1>
        {/* Add  a blue "See all* and a blue forward icon linkable to the challenges page*/}
        <div className="flex items-center">
          <span className="text-blue-600 hover:underline cursor-pointer">
            See all
          </span>
          <ChevronRight className="w-5 h-5 ml-2 text-blue-600" />
        </div>
      </div>
      {challenges.length === 0 ? (
        <div>No available challenges.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge: Challenge) => (
            <ChallengeCard key={challenge._id} challenge={challenge} />
          ))}
        </div>
      )}
    </div>
  );
}
