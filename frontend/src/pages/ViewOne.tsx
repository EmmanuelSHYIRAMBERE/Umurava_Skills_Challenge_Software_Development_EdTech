import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SERVER_BASE_URL } from "@/constansts/constants";
import { Oval } from "react-loader-spinner"; // Import the loading spinner
import type { Challenge } from "@/types/challenge";
import { Card } from "@/components/ui/card";
import { LogoCard } from "@/dashboard/challenge/ProjectCard/LogoCard";
import { ListSection } from "@/dashboard/challenge/ProjectCard/ListSection";
import { Calendar, DollarSign, Globe, Mail } from "lucide-react";
import { InstructionCard } from "@/dashboard/challenge/KeyInstructions/InstructionCard";
import { Button } from "@/components/ui/button";

const ViewOne: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const requirements = [
    "UX research to understand Project Requirements",
    "Understanding User Needs",
    "Understanding Business Goals",
    "Interview Stakeholders and potential users",
    "Requirements Catalog",
  ];

  const productDesign = [
    "User interface Design for each step",
    "Creating wireframes to outline the basic structure and layout of the web app",
    "Developing highly appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience",
    "Ensuring the web application works seamlessly across web, mobile, and tablet devices",
    "Provide a feedback session for in-development guidance",
  ];

  const deliverables = [
    "User interface Design and User Interaction Diagram",
    "User Interface Mockups",
    "Payroll and HR System design Completed",
  ];
  const instructions = [
    {
      icon: <Mail className="text-blue-600" />,
      title: "talent@umurava.africa",
      subtitle: "Contact Email",
    },
    {
      icon: <Globe className="text-blue-600" />,
      title: "Web design",
      subtitle: "Challenge Category",
    },
    {
      icon: <Calendar className="text-blue-600" />,
      title: `${challenge?.duration} days`,
      subtitle: "Duration",
    },
    {
      icon: <DollarSign className="text-blue-600" />,
      title: challenge?.moneyPrize
        ? `${challenge.moneyPrize}`
        : "Not Specified",
      subtitle: "Money Prize",
    },
  ];

  useEffect(() => {
    const fetchChallengeDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${SERVER_BASE_URL}/api/v1/challenges/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("response", response);
        setChallenge(response.data.challenge);
      } catch (error) {
        console.error("Error fetching challenge details:", error);
        setError("Failed to fetch challenge details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChallengeDetails();
  }, [id]);

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

  if (!challenge) {
    return <div>Challenge not found.</div>;
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-3 p-8  max-w-6xl mx-auto ">
        <div className="lg:col-span-2">
          <Card className="p-3 space-y-3">
            <LogoCard />

            <div className="space-y-2">
              <h2 className="font-bold text-xl">
                Project Brief - {challenge.title}
              </h2>
              <p className="text-gray-700">
                {challenge.description || "No description available."}
              </p>

              <ListSection title="Tasks" items={requirements} />
              <ListSection title="Product Design" items={productDesign} />
              <ListSection title="Deliverables" items={deliverables} />

              <div className="space-y-2">
                <h3 className="font-bold text-lg">NOTE:</h3>
                <p className="text-gray-700">
                  Fill a Product Requirements Summary and Features Description
                  for every UX/UI SKS
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-xl mb-4">Key Instructions:</h2>
              <div className="space-y-4">
                {instructions.map((instruction, index) => (
                  <InstructionCard key={index} {...instruction} />
                ))}
              </div>
            </div>
            <Button className="w-full" size="lg">
              Submit your work
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOne;
