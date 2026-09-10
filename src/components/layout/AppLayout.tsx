import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <Sidebar />

      <div className="ml-64">
        <Navbar />

        <main className="min-h-screen pt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;