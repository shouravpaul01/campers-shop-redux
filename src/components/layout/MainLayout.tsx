import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../ui/Container";

const MainLayout = () => {
  return (
    <div className="">
      <Container>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </Container>
    </div>
  );
};

export default MainLayout;
