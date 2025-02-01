import { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { SERVER_BASE_URL } from "@/constansts/constants";

interface FormData {
  title: string;
  deadline: string;
  duration: string;
  prize: string;
  email: string;
  description: string;
  brief: string;
  tasks: string;
}

interface TouchedState {
  [key: string]: boolean;
}

const CreateChallengeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    title: "",
    deadline: "",
    duration: "",
    prize: "",
    email: "",
    description: "",
    brief: "",
    tasks: "",
  });

  const [touched, setTouched] = useState<TouchedState>({
    title: false,
    deadline: false,
    duration: false,
    prize: false,
    email: false,
    description: false,
    brief: false,
    tasks: false,
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allTouched = Object.keys(touched).reduce<TouchedState>((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (isValid) {
      setIsSubmitting(true);
      setApiError("");

      try {
        const response = await axios.post(
          `${SERVER_BASE_URL}/api/v1/challenges`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Challenge created successfully:", response.data);
        navigate("/admin/challenges");
      } catch (error) {
        const axiosError = error as AxiosError<{ message: string }>;
        console.error("Error creating challenge:", error);
        setApiError(
          axiosError.response?.data?.message ||
            "Failed to create challenge. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getInputClassName = (fieldName: keyof FormData): string => {
    const baseClasses =
      "w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
    return touched[fieldName] && !formData[fieldName]
      ? `${baseClasses} border-red-500`
      : baseClasses;
  };
  return (
    <div className="w-full">
      {/* Navigation Header */}
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
            Create New Challenge
          </Link>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex justify-center px-6">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <h1 className="text-2xl font-semibold">Create New Challenge</h1>
            <p className="text-gray-500 text-sm">
              Fill out these details to build your broadcast
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Challenge/Hackathon Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Title"
                  className={getInputClassName("title")}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClassName("deadline")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Duration"
                    className={getInputClassName("duration")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Money Prize
                  </label>
                  <input
                    type="text"
                    name="prize"
                    value={formData.prize}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Prize"
                    className={getInputClassName("prize")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                    className={getInputClassName("email")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter text here..."
                  className={getInputClassName("description") + " h-32"}
                  maxLength={250}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Keep this simple of 250 character
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Brief
                </label>
                <textarea
                  name="brief"
                  value={formData.brief}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter text here..."
                  className={getInputClassName("brief") + " h-24"}
                  maxLength={50}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Keep this simple of 50 character
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description & Tasks
                </label>
                <textarea
                  name="tasks"
                  value={formData.tasks}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter text here..."
                  className={getInputClassName("tasks") + " h-40"}
                  maxLength={500}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Keep this simple of 500 character
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Creating..." : "Create Challenge"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      {apiError && <div className="text-red-500 text-sm">{apiError}</div>}
    </div>
  );
};

export default CreateChallengeForm;
