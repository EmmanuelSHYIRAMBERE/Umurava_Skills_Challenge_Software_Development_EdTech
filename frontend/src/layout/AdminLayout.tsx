import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/shared/Sidebar";
import Navbar from "@/shared/Navbar";
import { Menu, X } from "lucide-react";

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Responsive Handling */}
      <div
        className={`
        fixed z-40 top-0 left-0 h-screen 
        md:relative md:block 
        ${isSidebarOpen ? "block" : "hidden"}
        w-64 bg-gray-700 
        transition-transform duration-300 ease-in-out
      `}
      >
        <button
          className="md:hidden absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          <X className="text-white" />
        </button>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with Mobile Toggle */}
        <div className="sticky top-0 z-30 ">
          <div className="flex items-center">
            <button className="md:hidden p-2" onClick={toggleSidebar}>
              <Menu />
            </button>
            <Navbar />
          </div>
        </div>

        {/* Content Outlet */}
        <main className="flex-grow p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
