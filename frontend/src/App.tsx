import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ChallengeAndHackathons from "./pages/ChallengeAndHackathons";
import ChallengeDetails from "./pages/ChallengeDetails";
import Institution from "./pages/Institution";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./constansts/NotFound";
import Overview from "./dashboard/Dashboard";
import Community from "./dashboard/Community";
import Helpcenter from "./dashboard/Helpcenter";
import Settings from "./dashboard/Settings";
import Login from "./pages/Login";

import DashboardLayout from "./layout/DashboardLayout";
import AdminView from "./admin/pag/overview/AdminView";
import AdChallenge from "./admin/pag/challenge/AdChallenge";
import AdCommunity from "./admin/pag/community/AdCommunity";
import AdHelpCenter from "./admin/pag/helpcenter/AdHelpCenter";
import AdSettings from "./admin/pag/settings/AdSettings";
import CreateChallengeForm from "./admin/pag/challenge/CreateChallengeForm";
import ProjectBrief from "./admin/pag/challenge/ManagerChalleng";
import MyProfile from "./admin/pag/settings/MyProfile";
import ProtectedRoute from "./constansts/ProtectedRoute";
import ErrorBoundary from "./constansts/ErrBoundary";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "challenge",
          element: <ChallengeAndHackathons />,
        },
        {
          path: "learning",
          element: <Institution />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute allowedRoles={["user"]}>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Overview />,
        },
        {
          path: "challenge-and-hackathons",
          children: [
            {
              path: "",
              element: <ChallengeAndHackathons />,
            },
            {
              path: ":id",
              element: <ChallengeDetails />,
            },
          ],
        },
        {
          path: "community",
          element: <Community />,
        },
        {
          path: "help-center",
          element: <Helpcenter />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },

    {
      path: "admin",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "", element: <AdminView /> },
        {
          path: "challenges",
          element: <AdChallenge />,
        },
        {
          path: "challenges/create",
          element: <CreateChallengeForm />,
        },
        {
          path: "manage-challenge",
          element: <ProjectBrief />,
        },
        {
          path: "community",
          element: <AdCommunity />,
        },
        {
          path: "help-center",
          element: <AdHelpCenter />,
        },
        {
          path: "settings",
          element: <AdSettings />,
        },
        {
          path: "profile",
          element: <MyProfile />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
      errorElement: <ErrorBoundary />,
    },
  ]);

  return <RouterProvider router={router} />;
}
