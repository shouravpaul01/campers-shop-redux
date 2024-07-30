import {
  FaBars,
  FaCartShopping,
  FaCircleUser,
  FaHeart,
  FaRegCircleUser,
  FaRegHeart,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import campers_icon from "../../../public/campers-icon.png";
import InputSearch from "../ui/InputSearch";
import { useGetAllActiveCategoriesQuery } from "../../redux/features/category/categoryApi";
import { TCategory } from "../../types/category.type";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useAppSelector } from "../../redux/hook";

const Navbar = () => {
  const [tabMobileMenuItem, setTabMobileMenuItem] = useState("categories");
  const [searchInputValue, setSearchInputValue] = useState("");
  const { data: activeCategories } = useGetAllActiveCategoriesQuery(undefined);
  const { cart } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    navigate(`/products?search=${encodeURIComponent(searchInputValue)}`); 
  };
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div>
          {/* Navbar start */}
          <div className="bg-slate-100 py-2 text-sm hidden md:block">
            <div className="my-container  md:flex items-center justify-between  ">
              <div className="flex  gap-3">
                <p className="flex items-center gap-1">
                  <CiLocationOn className="text-deepgreen" /> : Dhaka
                </p>
                <p className="flex items-center gap-1">
                  <IoCallOutline className="text-deepgreen" /> : +0880100000000
                </p>
              </div>
              <div>
                <ul className="flex gap-2">
                  <li>About Us</li>|<li>Contact Us</li>|<li>Login</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navbar middle */}
          <div className="bg-deepgreen">
            <div className="navbar justify-between  my-container h-16">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost text-white text-xl"
                >
                  <FaBars />
                </label>
              </div>
              <Link to={""} className="flex justify-end items-center space-x-2 font-bold text-2xl text-white text-end">
                <img
                  src={campers_icon}
                  alt="campers_icon"
                  className="w-14 h-14"
                />
                <p className="text-end ">
                  Cambers<span className="text-warning ps-2">Shop</span>{" "}
                </p>
              </Link>
              <div className="hidden flex-none lg:block">
                <div className="w-96">
                  <form onSubmit={handleSearchSubmit} className="w-96">
                    <InputSearch
                      className="input-sm h-9"
                      setSearchValue={setSearchInputValue}
                      value={searchInputValue} 
                      onChange={(e) => setSearchInputValue(e.target.value)} 
                    />
                  </form>
                  
                </div>
              </div>
              <div className=" flex-none ">
                <ul className="menu menu-horizontal text-xl text-white">
                  <li className="hidden lg:block">
                    <div className="indicator">
                      <span className="indicator-item badge w-5 top-1 right-2 badge-secondary">
                        0
                      </span>
                      <button>
                        <FaHeart />
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="indicator">
                      {cart?.length > 0 && (
                        <span className="indicator-item badge w-5 top-1 right-2 badge-secondary">
                          {cart?.length}
                        </span>
                      )}
                      <Link to={"/cart"}>
                        <FaCartShopping />
                      </Link>
                    </div>
                  </li>
                  <li className="hidden lg:block">
                    <Link to={"/admin-dashboard"}>
                      <FaCircleUser />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navbar end */}
          <div className="bg-white border-b border-black border-opacity-50 py-2 hidden md:block">
            <ul className="my-container flex items-center space-x-4">
              <li>
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center nav-item-hover"
                  >
                    Categories <MdKeyboardArrowDown className="ml-1" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content top-9 main-menu bg-slate-100 rounded-md z-[1] w-52 p-2 shadow "
                  >
                    {activeCategories?.data?.map(
                      (category: TCategory, index: number) => (
                        <li className="menu-item" key={index}>
                          <a>{category.name}</a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/products" className="nav-item-hover">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-item-hover">
                  About
                </Link>
              </li>
              <li>
                <Link to="/admin-dashboard" className="nav-item-hover">
                  Product-Management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-white min-h-full w-80 z-50 p-4">
          <div>
            <ul className="menu menu-horizontal text-xl text-black">
              <li>
                <div className="indicator">
                  <span className="indicator-item badge w-5 top-1 right-2 badge-secondary">
                    0
                  </span>
                  <button>
                    <FaRegHeart />
                  </button>
                </div>
              </li>

              <li>
                <Link to={"/admin-dasboard"}>
                  <FaRegCircleUser />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full ">
          <form onSubmit={handleSearchSubmit} >
              <InputSearch
                className="input-sm h-9"
                setSearchValue={setSearchInputValue}
                value={searchInputValue} 
                onChange={(e) => setSearchInputValue(e.target.value)} 
              />
            </form>
          </div>
          <div>
            <div className="flex justify-center items-center gap-3 border-b py-4">
              <button
                className={`text-base font-extrabold  hover:text-deepgreen ${
                  tabMobileMenuItem == "categories"
                    ? "text-deepgreen"
                    : "text-gray-400"
                }`}
                onClick={() => setTabMobileMenuItem("categories")}
              >
                Categories
              </button>
              |
              <button
                className={`text-base font-extrabold  hover:text-deepgreen ${
                  tabMobileMenuItem == "main-menu"
                    ? "text-deepgreen"
                    : "text-gray-400"
                }`}
                onClick={() => setTabMobileMenuItem("main-menu")}
              >
                Main Menu
              </button>
            </div>
            <ul className="main-menu">
              {tabMobileMenuItem == "categories" && (
                <>
                  {activeCategories?.data?.map(
                    (category: TCategory, index: number) => (
                      <li className="menu-item" key={index}>
                        <a>{category.name}</a>
                      </li>
                    )
                  )}
                </>
              )}
              {tabMobileMenuItem == "main-menu" && (
                <>
                  <li className="menu-item">
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/about">About</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
