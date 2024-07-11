import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
