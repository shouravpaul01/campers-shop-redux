import { Outlet } from "react-router-dom";
import AdminDashboardNavbar from "../header/AdminDashboardNavbar";
import AdminDashboardSideBar from "../sidebar/AdminDashboardSideBar";
import { useState } from "react";


export default function AdminDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  console.log(sidebarOpen, "sss");
  return (
    
    <div className={`drawer lg:drawer-open ${sidebarOpen ? "" : ""} `}>
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="drawer-content flex flex-col overflow-y-hidden">
        {/* Page content here */}
        <AdminDashboardNavbar toggleSidebar={toggleSidebar} />

        <main className="p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
      <div className={`drawer-side  `}>
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
       <AdminDashboardSideBar sidebarOpen={sidebarOpen}/>
      </div>
    </div>
  );
}
