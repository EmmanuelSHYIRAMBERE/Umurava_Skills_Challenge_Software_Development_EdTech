import { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { SERVER_BASE_URL } from "@/constansts/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface FormData {
  title: string;
  deadline: string;
  duration: string;
  moneyPrize: string;
  contactEmail: string;
  projectDescription: string;
  projectBrief: string;
  projectDescriptionTasks: string;
  skillsNeeded: string[];
  seniority: string;
  keyInstructions: string;
  type: string;
}

interface TouchedState {
  [key: string]: boolean;
}

const CreateChallengeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");
  const [skillInput, setSkillInput] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    title: "",
    deadline: "",
    duration: "",
    moneyPrize: "",
    contactEmail: "",
    projectDescription: "",
    projectBrief: "",
    projectDescriptionTasks: "",
    skillsNeeded: [],
    seniority: "",
    keyInstructions: "",
    type: "Challenge",
  });

  const [touched, setTouched] = useState<TouchedState>({
    title: false,
    deadline: false,
    duration: false,
    moneyPrize: false,
    contactEmail: false,
    projectDescription: false,
    projectBrief: false,
    projectDescriptionTasks: false,
    seniority: false,
    keyInstructions: false,
    type: false,
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const validateForm = (data: FormData): boolean => {
    // Check string fields
    const stringFields: (keyof FormData)[] = [
      "title",
      "deadline",
      "duration",
      "moneyPrize",
      "contactEmail",
      "projectDescription",
      "projectBrief",
      "projectDescriptionTasks",
      "seniority",
      "keyInstructions",
      "type",
    ];

    const isStringFieldsValid = stringFields.every(
      (field) =>
        typeof data[field] === "string" && (data[field] as string).trim() !== ""
    );

    // Check skills array
    const isSkillsValid = data.skillsNeeded.length > 0;

    return isStringFieldsValid && isSkillsValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allTouched = Object.keys(touched).reduce<TouchedState>((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (validateForm(formData)) {
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
console.log("resssssss",response)
        toast.success("Challenge created successfully!");
         setTimeout(() => {
           navigate("/admin/challenges");
         }, 2000); 
      } catch (error) {
        const axiosError = error as AxiosError<{ message: string }>;
        const errorMessage =
          axiosError.response?.data?.message ||
          "Failed to create challenge. Please try again.";
        setApiError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleAddSkill = () => {
    if (skillInput.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        skillsNeeded: [...prev.skillsNeeded, skillInput.trim()],
      }));
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skillsNeeded: prev.skillsNeeded.filter(
        (skill) => skill !== skillToRemove
      ),
    }));
  };

  const getInputClassName = (fieldName: keyof FormData): string => {
    const baseClasses =
      "w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

    if (fieldName === "skillsNeeded") {
      return baseClasses;
    }

    return touched[fieldName] && !formData[fieldName]
      ? `${baseClasses} border-red-500`
      : baseClasses;
  };
  return (
    <div className="w-full">
      {/* Navigation Header */}
      <ToastContainer />
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
                    name="moneyPrize"
                    value={formData.moneyPrize}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="moneyPrize"
                    className={getInputClassName("moneyPrize")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Contact Email
                  </label>
                  <input
                    type="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="contact Email"
                    className={getInputClassName("contactEmail")}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Challenge Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName("type")}
                >
                  <option value="Challenge">Challenge</option>
                  <option value="Hackathon">Hackathon</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter text here..."
                  className={getInputClassName("projectDescription") + " h-32"}
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
                  name="projectBrief"
                  value={formData.projectBrief}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter text here..."
                  className={getInputClassName("projectBrief") + " h-24"}
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
                  name="projectDescriptionTasks"
                  value={formData.projectDescriptionTasks}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter text here..."
                  className={
                    getInputClassName("projectDescriptionTasks") + " h-40"
                  }
                  maxLength={500}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Keep this simple of 500 character
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Skills Needed
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Enter a skill"
                    className="flex-1 p-2 border rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.skillsNeeded.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center gap-1"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-blue-800 hover:text-blue-900"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Seniority Level
                </label>
                <select
                  name="seniority"
                  value={formData.seniority}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName("seniority")}
                >
                  <option value="">Select Seniority Level</option>
                  <option value="Junior">Junior</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Key Instructions
                </label>
                <textarea
                  name="keyInstructions"
                  value={formData.keyInstructions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter key instructions for the challenge..."
                  className={getInputClassName("keyInstructions") + " h-12"}
                  maxLength={100}
                />
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
