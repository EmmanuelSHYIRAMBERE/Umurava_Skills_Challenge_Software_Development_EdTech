import React, { useState } from "react";

const MyProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software Developer with a passion for building scalable web applications.",
    location: "New York, USA",
    website: "https://johndoe.com",
    twitter: "@johndoe",
    linkedin: "linkedin.com/in/johndoe",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can add logic to save the user data to your backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Optionally, you can revert the user data to its original state
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        My Profile
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Bio
            </label>
            {isEditing ? (
              <textarea
                name="bio"
                value={user.bio}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            ) : (
              <p className="text-gray-600">{user.bio}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={user.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-600">{user.location}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Website
            </label>
            {isEditing ? (
              <input
                type="text"
                name="website"
                value={user.website}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <a
                href={user.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {user.website}
              </a>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Twitter
            </label>
            {isEditing ? (
              <input
                type="text"
                name="twitter"
                value={user.twitter}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <a
                href={`https://twitter.com/${user.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {user.twitter}
              </a>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              LinkedIn
            </label>
            {isEditing ? (
              <input
                type="text"
                name="linkedin"
                value={user.linkedin}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <a
                href={`https://linkedin.com/in/${user.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {user.linkedin}
              </a>
            )}
          </div>
        </div>
        {isEditing ? (
          <div className="flex justify-end mt-6 space-x-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleEdit}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
