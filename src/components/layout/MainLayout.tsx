import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../ui/Container";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-slate-50 ">
       <Navbar />
      <Container>
        <Outlet />
        <ToastContainer />
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
