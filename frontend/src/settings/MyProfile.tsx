import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Bell, Phone, Mail, User2, LucideIcon } from "lucide-react";

interface UserData {
  name: string;
  email: string;
  phone: string;
  emailNotifications: boolean;
}

interface InputFieldProps {
  icon: LucideIcon;
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileSection: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    emailNotifications: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "success" | "error"
  >("idle");

  useEffect(() => {
    fetchUserData();
  }, []);

 const fetchUserData = async (): Promise<void> => {
   try {
     setIsLoading(true);
     const user = localStorage.getItem("user")
       ? JSON.parse(localStorage.getItem("user")!)
       : null;

     // Ensure all properties are defined
     setUserData({
       name: user?.name || "",
       email: user?.email || "",
       phone: user?.phone || "",
       emailNotifications: user?.emailNotifications || false,
     });
   } catch (error) {
     console.error("Error fetching user data:", error);
   } finally {
     setIsLoading(false);
   }
 };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setSaveStatus("saving");

    try {
      await fetch("/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      setSaveStatus("success");
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch (error) {
      console.error("Error saving user data:", error);
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 3000);
    }
  };

  const InputField: React.FC<InputFieldProps> = ({
    icon: Icon,
    label,
    name,
    type = "text",
    value,
    onChange,
  }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          name={name}
          className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 w-full">
      <Card className="backdrop-blur-lg bg-white/90 border border-gray-100 w-full">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            My Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-inner">
                <User2 className="w-16 h-16 text-blue-600" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {userData.name || "Your Name"}
                </h3>
                <p className="text-gray-500">
                  {userData.email || "your.email@example.com"}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="font-semibold text-xl text-gray-800 border-b pb-2">
                  Personal Information
                </h4>
                <div className="space-y-6">
                  <InputField
                    icon={User}
                    label="Full Name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                  />
                  <InputField
                    icon={Mail}
                    label="Email"
                    name="email"
                    type="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                  <InputField
                    icon={Phone}
                    label="Phone Number"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-semibold text-xl text-gray-800 border-b pb-2">
                  Preferences
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-200">
                    <span className="flex items-center space-x-3">
                      <Bell className="w-6 h-6 text-gray-600" />
                      <span className="text-gray-700 text-lg">
                        Email Notifications
                      </span>
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="emailNotifications"
                        className="sr-only peer"
                        checked={userData.emailNotifications}
                        onChange={handleChange}
                      />
                      <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-8 border-t">
              <button
                type="submit"
                disabled={isLoading || saveStatus === "saving"}
                className={`px-8 py-3 rounded-lg font-semibold text-white text-lg transition duration-200 ${
                  saveStatus === "saving"
                    ? "bg-blue-400 cursor-wait"
                    : saveStatus === "success"
                    ? "bg-green-500 hover:bg-green-600"
                    : saveStatus === "error"
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {saveStatus === "saving"
                  ? "Saving..."
                  : saveStatus === "success"
                  ? "Saved!"
                  : saveStatus === "error"
                  ? "Error!"
                  : "Save Changes"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
