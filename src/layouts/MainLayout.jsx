import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#16404D] to-[#0E2A33]">
      <Navbar />
      <main className="container mx-auto pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
