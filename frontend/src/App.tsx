import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ChallengeAndHackathons from "./pages/ChallengeAndHackathons";
import ChallengeDetails from "./pages/ChallengeDetails";
import Institution from "./pages/Institution";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./constansts/NotFound";
import TalentDashboardLayout from "./layout/TalentDashboardLayout";
import Overview from "./dashboard/Dashboard";
import Community from "./dashboard/Community";
import Helpcenter from "./dashboard/Helpcenter";
import Settings from "./dashboard/Settings";

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
      ],
    },
    {
      path: "dashboard",
      element: <TalentDashboardLayout />,
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
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
