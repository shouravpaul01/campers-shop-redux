import {
  FaArrowRightToBracket,
  FaBars,
  FaCartShopping,
  FaCircleUser,
  FaHeart,
  FaRegAddressBook,
  FaRegHeart,
} from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [isSticky, setIsSticky] = useState(false);
  const { data: activeCategories } = useGetAllActiveCategoriesQuery(undefined);
  const { cart } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchInputValue)}`);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar Start */}
        <div className={`bg-slate-100 py-2 text-sm hidden md:block`}>
          <div className="my-container md:flex items-center justify-between">
            <div className="flex gap-3">
              <p className="flex items-center gap-1">
                <CiLocationOn className="text-deepgreen" /> : Dhaka
              </p>
              <p className="flex items-center gap-1">
                <IoCallOutline className="text-deepgreen" /> : +0880100000000
              </p>
            </div>
            <div>
              <ul className="flex gap-2">
                <li><NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive ? "text-[#2D6F6D] font-bold" : "nav-item-hover"
                    }
                  >
                    About us
                  </NavLink></li>|<li>Contact Us</li>|
                <li>
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive ? "text-[#2D6F6D] font-bold" : "nav-item-hover"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`transition-transform duration-700 ease-in-out ${
            isSticky && "fixed top-0 left-0 w-full z-40 shadow-md"
          }`}
        >
          {/* Navbar Middle */}
          <div className="bg-deepgreen ">
            <div className="navbar justify-between my-container h-16">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost text-white text-xl"
                >
                  <FaBars />
                </label>
              </div>
              <Link
                to={""}
                className="flex justify-end items-center space-x-2 font-bold text-2xl text-white text-end"
              >
                <img
                  src={campers_icon}
                  alt="campers_icon"
                  className="w-14 h-14"
                />
                <p className="text-end">
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
              <div className="flex-none">
                <ul className="flex items-center justify-center gap-6 text-white">
                  <li className="hidden lg:block">
                    <div className="indicator text-xl">
                      <span className="indicator-item badge w-5 -right-2 badge-secondary">
                        0
                      </span>
                      <button>
                        <FaHeart />
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="indicator text-xl">
                      
                        <span className="indicator-item badge w-5 -left-8 md:left-2 top-[10px] md:top-0  badge-secondary">
                          {cart?.length}
                        </span>
                      
                      <Link to={"/cart"}>
                        <FaCartShopping />
                      </Link>
                    </div>
                  </li>
                  <li className="hidden lg:block">
                    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="flex items-center text-xl"
                      >
                        <FaCircleUser />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content mt-7 main-menu bg-white rounded-[4px] z-[1] w-56 p-2 shadow text-black"
                      >
                        <li>
                          <NavLink
                            to={"/login"}
                            className={({ isActive }) =>
                              isActive ? "menu-item-active" : "menu-item"
                            }
                          >
                            <FaArrowRightToBracket />
                            Login
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={"/register"}
                            className={({ isActive }) =>
                              isActive ? "menu-item-active" : "menu-item"
                            }
                          >
                            <FaRegAddressBook />
                            Register
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navbar End */}
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
                    className="dropdown-content top-[33px] main-menu bg-white rounded-[4px] z-[50] w-56 p-2 shadow "
                  >
                    {activeCategories?.data?.map(
                      (category: TCategory, index: number) => (
                        <li key={index}>
                          <Link to={"/products"} className="menu-item">
                            <img
                              src={category.icon}
                              alt={category.name}
                              className="w-4 h-4"
                            />
                            {category.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "text-[#2D6F6D] font-bold" : "nav-item-hover"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-[#2D6F6D] font-bold" : "nav-item-hover"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin-dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-[#2D6F6D] font-bold" : "nav-item-hover"
                  }
                >
                  Product-Management
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-white min-h-full w-80 p-4">
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
                <div className="dropdown dropdown-hover dropdown-bottom">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center text-xl"
                  >
                    <FaCircleUser />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  main-menu bg-slate-50 text-base rounded-[4px] z-[1] w-56 p-2 shadow text-black"
                  >
                    <li>
                      <NavLink
                        to={"/login"}
                        className={({ isActive }) =>
                          isActive ? "menu-item-active" : "menu-item"
                        }
                      >
                        <FaArrowRightToBracket />
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/register"}
                        className={({ isActive }) =>
                          isActive ? "menu-item-active" : "menu-item"
                        }
                      >
                        <FaRegAddressBook />
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full ">
            <form onSubmit={handleSearchSubmit}>
              <InputSearch
                className="input-sm input-bordered h-9"
                setSearchValue={setSearchInputValue}
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
              />
            </form>
          </div>
          <div>
            <div className="flex justify-center items-center gap-3 border-b py-4">
              <button
                className={`text-base font-extrabold hover:text-deepgreen ${
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
                className={`text-base font-extrabold hover:text-deepgreen ${
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
                        <Link
                          to={"/products"}
                          className="flex items-center gap-1"
                        >
                          <img
                            src={category.icon}
                            alt={category.name}
                            className="w-4 h-4"
                          />
                          {category.name}
                        </Link>
                      </li>
                    )
                  )}
                </>
              )}
              {tabMobileMenuItem == "main-menu" && (
                <>
                  <li >
                  <NavLink
                        to="/products"
                        className={({ isActive }) =>
                          isActive ? "menu-item-active" : "menu-item"
                        }
                      >
                        Products
                      </NavLink>
                  
                  </li>
                  <li>
                   <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "menu-item-active" : "menu-item"
                        }
                      >
                        About
                      </NavLink>
                    
                  </li>
                  <li>
                   <NavLink
                        to="/admin-dashboard"
                        className={({ isActive }) =>
                          isActive ? "menu-item-active" : "menu-item"
                        }
                      >
                        Product Management
                      </NavLink>
                    
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
