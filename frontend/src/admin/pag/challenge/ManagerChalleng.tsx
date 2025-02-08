
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import log from "../../../assets/White Logo.png";
import { Mail, Palette, Calendar, DollarSign, ChevronLeft } from "lucide-react";
import ParticipantsList from "./ParticipantList";
import axios from "axios";
import { SERVER_BASE_URL } from "@/constansts/constants";
import { useEffect, useState } from "react";

interface ProjectData {
  title: string;
  description: string;
  tasks: string;
  deliverables: string;
  additionalDeliverables: string;
  note: string;
  keyInstructions: string;
  contactEmail: string;
  category: string;
  duration: string;
  moneyPrize: string;
}
const ProjectBrief = () => {
    const [projectData, setProjectData] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const { _id } = useParams<{ _id: string }>(); 

    useEffect(() => {
      const fetchProjectData = async () => {
        const token = localStorage.getItem("token");
        try {
           if (!_id) {
             setError("No ID provided.");
             setLoading(false);
             return;
           }
          const response = await axios.get(
            `${SERVER_BASE_URL}/api/v1/challenges/${_id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("response.data.challenge",response.data.challenge);
          setProjectData(response.data.challenge);
        } catch (err) {
          setError("Failed to fetch project data.");
          console.log("error",err)
        } finally {
          setLoading(false);
        }
      };

      fetchProjectData();
    }, [_id]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    if (!projectData) {
      return <div>No challenge data available.</div>;
    }
  return (
    <>
      <div className="border-b border-t p-4 ml-8 mb-6">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>
          <span className="text-gray-400">/</span>
          <Link
            to="/admin/challenges"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Challenges & Hackathons
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            to=""
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Design a Dashboard for Sokofund
          </Link>
        </div>
      </div>
      <div className="flex px-8 ml-8">
        <section className="max-w-2xl pr-6">
          <Card className="overflow-hidden">
            {/* Header Image */}
            <div className="bg-blue-600 p-14 flex justify-center items-center">
              <img src={log} alt="log" />
            </div>

            <CardContent className="p-8">
              {/* Project Title */}
              <h2 className="text-2xl font-bold mb-6">
                Project Brief : {projectData.title}
              </h2>

              {/* Project Description */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                A Fintech company that is developing a Digital Financial
                Platform designed for businesses and their workforce in Africa
                is partnering with Umurava to run a Skills Challenge for Product
                Design. This Fintech Company offers Payroll Management System to
                Employers and Embedded Financial services and products to
                Employees and Gig Workers across Africa.
              </p>

              {/* Tasks Section */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold mb-4">Tasks:</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">
                      Product Requirements
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>UX research to understand Project Requirements</li>
                      <li>Understanding User Needs</li>
                      <li>Understanding Business Goals</li>
                      <li>Determine interaction between users</li>
                      <li>Requirements Catalog</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h4 className="text-lg font-semibold mb-3">
                    Product Design:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>User Interface Design for each step</li>
                    <li>
                      Creating wireframes to outline the basic structure and
                      layout of the web and mobile app.
                    </li>
                    <li>
                      Designing visually appealing and user-friendly interfaces
                      for the web and mobile apps focusing on usability and user
                      experience.
                    </li>
                    <li>
                      Ensuring the web application works seamlessly across web,
                      mobile, and tablet devices.
                    </li>
                    <li>
                      Provide a feedback session for in-development guidance
                    </li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold mb-3">Deliverables:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Requirements Catalog and User Interaction Diagram</li>
                    <li>User Interface Mockups</li>
                    <li>Payroll and HR System Design Completed</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold mb-3">
                    Additional Deliverables:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      The Product Designer will provide all documents and
                      deliverables to the client before the review meetings
                    </li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold mb-3">NOTE:</h4>
                  <p className="text-gray-700">
                    Find Product Requirements Summary and Features Description
                    for Saway Pay{" "}
                    <Link
                      to="/here"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      HERE
                    </Link>
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </section>
        <div className="flex flex-col">
          <section className="mb-6">
            <Card className="max-w-md p-6">
              <h2 className="text-xl font-bold mb-4">Key Instructions:</h2>
              <p className="text-gray-600 mb-6">
                You are free to schedule the clarification call with the team
                via this
              </p>

              <div className="space-y-4">
                {/* Email Contact */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">talent@umurava.africa</div>
                    <div className="text-sm text-gray-500">Contact Email</div>
                  </div>
                </div>

                {/* Challenge Category */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Palette className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Web design</div>
                    <div className="text-sm text-gray-500">
                      Challenge Category
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">7 Days</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                </div>

                {/* Prize */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">$150 - $400</div>
                    <div className="text-sm text-gray-500">Money Prize</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete
                </button>
                <button
                  className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => console.log("Edit clicked")}
                >
                  Edit
                </button>
              </div>
            </Card>
          </section>
          <section>
            <ParticipantsList />
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectBrief;
