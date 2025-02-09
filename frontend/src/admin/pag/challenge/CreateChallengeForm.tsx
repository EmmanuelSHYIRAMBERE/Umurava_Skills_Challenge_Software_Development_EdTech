import { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_BASE_URL } from "@/constansts/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SubTask {
  title: string;
}

interface Task {
  title: string;
  subtasks: SubTask[];
}
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
  tasks: Task[];
}

interface TouchedState {
  [key: string]: boolean;
}

const CreateChallengeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");
  const [skillInput, setSkillInput] = useState<string>("");
  const location = useLocation();
  const editData = location.state?.challengeData;
  const [formData, setFormData] = useState<FormData>({
    title: editData?.title || "",
    deadline: editData?.deadline || "",
    duration: editData?.duration || "",
    moneyPrize: editData?.moneyPrize || "",
    contactEmail: editData?.contactEmail || "",
    projectDescription: editData?.projectDescription || "",
    projectBrief: editData?.projectBrief || "",
    projectDescriptionTasks: editData?.projectDescriptionTasks || "",
    skillsNeeded: editData?.skillsNeeded || [],
    seniority: editData?.seniority || "",
    keyInstructions: editData?.keyInstructions || "",
    type: editData?.type || "Challenge",
    tasks: editData?.tasks || [
      {
        title: "",
        subtasks: [{ title: "" }],
      },
    ],
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

  // Add type definitions for the validation
  type FormFieldValue = string | string[] | Task[];

  // Helper function to check if value is string
  function isString(value: FormFieldValue): value is string {
    return typeof value === "string";
  }

  const validateForm = (data: FormData): boolean => {
    // Helper function to validate string fields with proper typing
    const isValidString = (value: FormFieldValue): boolean => {
      if (isString(value)) {
        return value.trim() !== "";
      }
      return false;
    };

    // Validate required string fields
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

    // Check each field and collect invalid ones
    const invalidFields = stringFields.filter((field) => {
      const value = data[field];
      return !isValidString(value);
    });

    if (invalidFields.length > 0) {
      console.log("Invalid fields:", invalidFields);
      const fieldNames = invalidFields
        .map((field) => field.replace(/([A-Z])/g, " $1").toLowerCase())
        .join(", ");
      toast.error(
        `Please fill in the following required fields: ${fieldNames}`
      );
      return false;
    }

    // Validate skills array
    if (!Array.isArray(data.skillsNeeded) || data.skillsNeeded.length === 0) {
      toast.error("Please add at least one skill");
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.contactEmail)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Validate date format
    if (isNaN(Date.parse(data.deadline))) {
      toast.error("Please enter a valid deadline date");
      return false;
    }

    return true;
  };

  // Update handleSubmit to handle the validation
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mark all fields as touched
      const allTouched = Object.keys(touched).reduce<TouchedState>(
        (acc, key) => {
          acc[key] = true;
          return acc;
        },
        {}
      );
      setTouched(allTouched);

      // Validate form
      if (!validateForm(formData)) {
        setIsSubmitting(false);
        return;
      }

      // Prepare the request data
      const requestData = {
        ...formData,
        deadline: new Date(formData.deadline).toISOString().split("T")[0],
      };

      const url = editData?._id
        ? `${SERVER_BASE_URL}/api/v1/challenges/${editData._id}`
        : `${SERVER_BASE_URL}/api/v1/challenges`;

      const method = editData ? "put" : "post";
console.log("sendi",requestData)
      const response = await axios({
        method,
        url,
        data: requestData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        toast.success(
          editData
            ? "Challenge updated successfully!"
            : "Challenge created successfully!"
        );
        setTimeout(() => {
          navigate("/admin/challenges");
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          "Failed to save challenge. Please try again.";
        setApiError(message);
        toast.error(message);
      } else {
        setApiError("An unexpected error occurred");
        toast.error("An unexpected error occurred");
      }
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
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
  const handleTaskChange = (taskIndex: number, value: string) => {
    setFormData((prev) => {
      const newTasks = [...prev.tasks];
      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        title: value,
      };
      return { ...prev, tasks: newTasks };
    });
  };

  const handleSubtaskChange = (
    taskIndex: number,
    subtaskIndex: number,
    value: string
  ) => {
    setFormData((prev) => {
      const newTasks = [...prev.tasks];
      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        subtasks: [
          ...newTasks[taskIndex].subtasks.slice(0, subtaskIndex),
          { title: value },
          ...newTasks[taskIndex].subtasks.slice(subtaskIndex + 1),
        ],
      };
      return { ...prev, tasks: newTasks };
    });
  };

  const addTask = () => {
    setFormData((prev) => ({
      ...prev,
      tasks: [...prev.tasks, { title: "", subtasks: [{ title: "" }] }],
    }));
  };

  const addSubtask = (taskIndex: number) => {
    setFormData((prev) => {
      const newTasks = [...prev.tasks];
      newTasks[taskIndex].subtasks.push({ title: "" });
      return { ...prev, tasks: newTasks };
    });
  };

  const removeTask = (taskIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((_, index) => index !== taskIndex),
    }));
  };

  const removeSubtask = (taskIndex: number, subtaskIndex: number) => {
    setFormData((prev) => {
      const newTasks = [...prev.tasks];
      newTasks[taskIndex].subtasks = newTasks[taskIndex].subtasks.filter(
        (_, index) => index !== subtaskIndex
      );
      return { ...prev, tasks: newTasks };
    });
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

  const isEditMode = Boolean(editData);
  const pageTitle = isEditMode ? "Edit Challenge" : "Create New Challenge";
  const submitButtonText = isEditMode ? "Update Challenge" : "Create Challenge";
  const loadingButtonText = isEditMode ? "Updating..." : "Creating...";

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
            {pageTitle}
          </Link>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex justify-center px-6">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <h1 className="text-2xl font-semibold">{pageTitle}</h1>
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
              <div className="space-y-4">
                <label className="block text-sm font-medium mb-2">
                  Tasks (Optional)
                </label>
                {formData.tasks.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className="border p-4 rounded-lg space-y-4"
                  >
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={task.title}
                        onChange={(e) =>
                          handleTaskChange(taskIndex, e.target.value)
                        }
                        placeholder="Task Title"
                        className="flex-1 p-2 border rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeTask(taskIndex)}
                        className="px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                      >
                        Remove Task
                      </button>
                    </div>

                    <div className="ml-4 space-y-2">
                      {task.subtasks.map((subtask, subtaskIndex) => (
                        <div key={subtaskIndex} className="flex gap-2">
                          <input
                            type="text"
                            value={subtask.title}
                            onChange={(e) =>
                              handleSubtaskChange(
                                taskIndex,
                                subtaskIndex,
                                e.target.value
                              )
                            }
                            placeholder="Subtask Title"
                            className="flex-1 p-2 border rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              removeSubtask(taskIndex, subtaskIndex)
                            }
                            className="px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addSubtask(taskIndex)}
                        className="mt-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                      >
                        Add Subtask
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTask}
                  className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                >
                  Add New Task
                </button>
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
                  {isSubmitting ? loadingButtonText : submitButtonText}
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
