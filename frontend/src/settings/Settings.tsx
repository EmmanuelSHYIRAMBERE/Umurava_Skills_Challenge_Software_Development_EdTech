// src/HelpCenter.tsx
import { useState } from "react";
import { User, Settings } from "lucide-react";
import ProfileSection from "./MyProfile";
import SettingsSection from "./SettingSection";
const HelpCenter = () => {
  
  const [activeTab, setActiveTab] = useState("profile");

  const profileTabs = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen  flex flex-col px-8 ml-8">
      {/* Navigation Tabs */}
      <div className=" sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex space-x-8">
            {profileTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-4 border-b-2 ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow max-w-6xl mx-auto px-4 py-12">
        {activeTab === "profile" && <ProfileSection />}
        {activeTab === "settings" && <SettingsSection />}
      </div>
    </div>
  );
};

export default HelpCenter;
