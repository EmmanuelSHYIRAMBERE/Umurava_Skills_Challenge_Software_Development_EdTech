import React, { useState } from "react";
import { Outlet } from "react-router-dom";


import { Menu, X } from "lucide-react";
import SuperSidebar from "@/admin/layout/SuperSidebar";
import SuperNavbar from "@/admin/layout/SuperNavbar";

const SuperLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
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
        <SuperSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with Mobile Toggle */}
        <div className="sticky top-0 z-30 ">
          <div className="flex items-center ">
            <button className="md:hidden p-2" onClick={toggleSidebar}>
              <Menu />
            </button>
            <SuperNavbar />
          </div>
        </div>

        {/* Content Outlet */}
        <main className="flex-grow  ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SuperLayout;

