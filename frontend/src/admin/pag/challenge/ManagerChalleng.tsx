
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import log from "../../../assets/White Logo.png";
import { Mail, Palette, Calendar, DollarSign, ChevronLeft } from "lucide-react";
import ParticipantsList from "./ParticipantList";
import axios from "axios";
import { SERVER_BASE_URL } from "@/constansts/constants";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import { Toaster } from "@/components/ui/toaster";
interface SubTask {
  title: string;
}

interface Task {
  title: string;
  subtasks: SubTask[];
}
interface ProjectData {
  title: string;
  projectDescription: string;
  tasks: Task[]; // Changed from string to Task[]
  projectBrief: string;
  deliverables: string;
  additionalDeliverables: string;
  note: string;
  keyInstructions: string;
  contactEmail: string;
  category: string;
  duration: string;
  moneyPrize: string;
  type: string;
  deadline:Date;
}
const ProjectBrief = () => {
    const [projectData, setProjectData] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [showConfirmation, setShowConfirmation] = useState(false);
      const [isLoading, setIsLoading] = useState(false);

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
          console.log("setProjectData----", response.data.challenge);
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

const handleDelete = async () => {
  setIsLoading(true);
  const token = localStorage.getItem("token");
  const loadingToast = toast.loading("Deleting project...");

  try {
    await axios.delete(`${SERVER_BASE_URL}/api/v1/challenges/${_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    toast.dismiss(loadingToast);
    toast.success("Project deleted successfully!");
    // Navigate back to challenges list after successful deletion
    navigate("/admin/challenges");
  } catch (err) {
    toast.dismiss(loadingToast);
    toast.error("Failed to delete project. Please try again.");
    setError("Failed to delete project.");
    console.log("error", err);
  } finally {
    setIsLoading(false);
  }
}
const confirmLogout = () => {
  setShowConfirmation(true);
};

const cancelLogout = () => {
  setShowConfirmation(false);
};
    if (loading) {
       return (
         <div className="flex items-center justify-center h-screen">
           <Oval color="#00BFFF" height={40} width={40} />
         </div>
       );
     }

    if (error) {
      return (
        <div className="flex items-center justify-center h-screen text-red-600">
          {error}
        </div>
      );
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
            {projectData.title}
          </Link>
        </div>
      </div>
      <Toaster />
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
                Project Brief : {projectData.projectBrief}
              </h2>

              {/* Project Description */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                {projectData.projectDescription}
              </p>

              {/* Tasks Section */}
              <div className="space-y-8">
                {projectData.tasks.map((task, index) => (
                  <section key={index}>
                    <h4 className="text-lg font-semibold mb-3">
                      {task.title}:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {task.subtasks.map((subtask, subtaskIndex) => (
                        <li key={subtaskIndex}>{subtask.title}</li>
                      ))}
                    </ul>
                  </section>
                ))}

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
                {projectData.keyInstructions}
              </p>

              <div className="space-y-4">
                {/* Email Contact */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">
                      {projectData.contactEmail}
                    </div>
                    <div className="text-sm text-gray-500">Contact Email</div>
                  </div>
                </div>

                {/* Challenge Category */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Palette className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{projectData.type}</div>
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
                    <div className="font-medium">{projectData.duration}</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                </div>

                {/* Prize */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">${projectData.moneyPrize}</div>
                    <div className="text-sm text-gray-500">Money Prize</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  onClick={confirmLogout}
                >
                  Delete
                </button>
                <button
                  className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() =>
                    navigate(`/admin/challenges/edit/${_id}`, {
                      state: {
                        challengeData: {
                          ...projectData,
                          deadline: new Date(projectData.deadline)
                            .toISOString()
                            .split("T")[0], // Format date for input
                        },
                      },
                    })
                  }
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
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-blue-500">
              Are you sure you want to delete this challenge?
            </p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-gray-300 rounded"
                onClick={cancelLogout}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleDelete}
                disabled={isLoading}
              >
                {isLoading ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectBrief;
