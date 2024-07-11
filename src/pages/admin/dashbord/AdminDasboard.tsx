import { useState } from "react";
import Product from "../product/Product";
import Category from "../category/Category";

const AdminDasboard = () => {
  const [tabActive, setTabActive] = useState<string>("dashboard");
  return (
    <div className="my-container">
      <div className="my-4 ">
        <div className="join">
          <button
            className={`btn join-item ${tabActive =="dashboard" ? "btn-success":"btn-outline btn-success "}`}
            onClick={() => setTabActive("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`btn join-item ${tabActive =="category" ? "btn-success":"btn-outline btn-success "}`}
            onClick={() => setTabActive("category")}
          >
            Category
          </button>
          <button
            className={`btn join-item ${tabActive =="product" ? "btn-success":"btn-outline btn-success "}`}
            onClick={() => setTabActive("product")}
          >
            Product
          </button>
        </div>
      </div>
      <div>
        {tabActive=="dasboard" && <p>dd</p>}
        {tabActive=="category" && <Category/>}
        {tabActive=="product" && <Product/>}
      </div>
    </div>
  );
};

export default AdminDasboard;
