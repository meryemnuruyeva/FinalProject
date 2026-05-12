import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import CreateDesign from "../pages/CreateDesign";
import Explore from "../pages/Explore";
import DesignDetail from "../pages/DesignDetail";
import VideoPage from "../pages/VideoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "explore", element: <Explore /> },
      { path: "design/:designId", element: <DesignDetail /> },
      { path: "video", element: <VideoPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "profile", element: <Profile /> },
      { path: "create", element: <CreateDesign /> }
    ]
  }
]);