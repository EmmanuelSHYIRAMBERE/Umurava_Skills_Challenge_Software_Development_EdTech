// src/components/SettingsPage.js
import React, { useState } from "react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Details");

  const tabs = [
    "Details",
    "Personal",
    "Account",
    "Profile",
    "Security",
    "Appearance",
    "API",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Details":
        return <DetailsTab />;
      case "Personal":
        return <div>Personal Content</div>;
      case "Account":
        return <div>Account Content</div>;
      case "Profile":
        return <div>Profile Content</div>;
      case "Security":
        return <div>Security Content</div>;
      case "Appearance":
        return <div>Appearance Content</div>;
      case "API":
        return <div>API Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded text-sm font-medium ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">{renderContent()}</div>
    </div>
  );
};

const DetailsTab = () => {
  const [publicProfile, setPublicProfile] = useState("slothUI Official");
  const [bioDescription, setBioDescription] = useState(
    "slothUI is the one and only design system for intelligent, lazy gen Z people. It's the most perfect design tool for procrastinators."
  );
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Profile Details</h2>
      <p className="mb-4 text-gray-600">
        You can change your profile details here seamlessly.
      </p>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Public Profile</label>
        <input
          type="text"
          value={publicProfile}
          onChange={(e) => setPublicProfile(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-2 text-gray-500">
          <a
            href="https://slothui.com/X_AE_A-22"
            className="text-blue-500 hover:underline"
          >
            https://slothui.com/X_AE_A-22
          </a>
          <span className="ml-2 text-gray-500">View Details</span>
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Bio Description</label>
        <textarea
          value={bioDescription}
          onChange={(e) => setBioDescription(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={300}
          rows="4"
        ></textarea>
        <p className="mt-2 text-gray-500">{bioDescription.length}/300</p>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Profile Picture</label>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            {profilePicture ? (
              <img
                src={URL.createObjectURL(profilePicture)}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500">Upload</span>
            )}
          </div>
          <div>
            <input
              type="file"
              accept=".svg, .jpg, .png"
              onChange={handleProfilePictureChange}
              className="hidden"
              id="profilePicture"
            />
            <label
              htmlFor="profilePicture"
              className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
            >
              Upload Picture
            </label>
            <p className="mt-2 text-gray-500">
              Supported Format: SVG, JPG, PNG (10mb each)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
