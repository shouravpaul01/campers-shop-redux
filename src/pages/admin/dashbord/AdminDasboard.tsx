import { useState } from "react";
import Product from "../product/Product";
import Category from "../category/Category";
import { BiSolidCategory } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaCubesStacked } from "react-icons/fa6";
import Dashboard from "./Dashboard";

const AdminDasboard = () => {
  const [tabActive, setTabActive] = useState<string>("dashboard");
  return (
    <div className="my-container min-h-screen">
      <div className="pt-8 ">
        <div className="join">
          <button
            className={`btn join-item ${tabActive =="dashboard" ? "btn-deepgreen":"btn-outline-deepgreen "}`}
            onClick={() => setTabActive("dashboard")}
          >
           <FaHome /> Dashboard
          </button>
          <button
            className={`btn join-item ${tabActive =="category" ? "btn-deepgreen":"btn-outline-deepgreen "}`}
            onClick={() => setTabActive("category")}
          >
           <BiSolidCategory /> Category
          </button>
          <button
            className={`btn join-item ${tabActive =="product" ? "btn-deepgreen":"btn-outline-deepgreen "}`}
            onClick={() => setTabActive("product")}
          >
           <FaCubesStacked /> Product
          </button>
        </div>
      </div>
      <div className="my-8">
        {tabActive=="dashboard" && <Dashboard/>}
        {tabActive=="category" && <Category/>}
        {tabActive=="product" && <Product/>}
      </div>
    </div>
  );
};

export default AdminDasboard;
