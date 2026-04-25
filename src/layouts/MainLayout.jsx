import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;