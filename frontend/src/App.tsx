import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Challenge from "./pages/Challenge";
import Institution from "./pages/Institution";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./constansts/NotFound";
import AdminLayout from "./layout/AdminLayout";
import Overview from "./dashboard/Dashboard";
import Community from "./dashboard/Community";
import Helpcenter from "./dashboard/Helpcenter";
import Settings from "./dashboard/Settings";
import Login from "./pages/Login";
import ChallengeDetails from "./dashboard/challenge/ChallengeDetails";
import SuperLayout from "./layout/SuperLayout";
import AdminView from "./admin/pag/overview/AdminView";
import AdChallenge from "./admin/pag/challenge/AdChallenge";
import AdCommunity from "./admin/pag/community/AdCommunity";
import AdHelpCenter from "./admin/pag/helpcenter/AdHelpCenter";
import AdSettings from "./admin/pag/settings/AdSettings";
import CreateChallengeForm from "./admin/pag/challenge/CreateChallengeForm";
import ProjectBrief from "./admin/pag/challenge/ManagerChalleng";
import MyProfile from "./admin/pag/settings/MyProfile";
import ProtectedRoute from "./constansts/ProtectedRoute";

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
          path: "available-challenge",
          element: <Challenge />,
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
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Overview />,
        },
        {
          path: "challenge",
          element: <Challenge />,
          children: [
            {
              // Take the challenge id as a parameter
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
        <ProtectedRoute allowedRoles={["admin","user"]}>
          <SuperLayout />
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
    },
  ]);

  return <RouterProvider router={router} />;
}
