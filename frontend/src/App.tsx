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
import ChallengeDetails from "./dashboard/challenge/ChallengeDetails";

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
      ],
    },
    {
      path: "dashboard",
      element: <AdminLayout />,
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
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
