import {
  FaBars,
  FaCartShopping,
  FaCircleUser,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [dropdownSearchContent,setDropdownSearchContent]=useState(false)
    // const [searchInputValue,setSearchInputValue]=useState('')

    useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (!event.target.closest('.dropdown-toggle') && !event.target.closest('.dropdown-content')) {
        setDropdownSearchContent(false);
      }
    };

    if (dropdownSearchContent) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownSearchContent]);
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar md:justify-between bg-[#2E8B57] w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <FaBars />
            </label>
          </div>
          <div className="mx-2  px-2 font-bold text-2xl text-white ">Cambers<span className="text-warning ps-2">Shop</span> </div>
          <div className="hidden flex-none lg:block">
            <ul className="flex space-x-3">
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <Link to={""}>About</Link>
              </li>
            </ul>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link to={''} className="dropdown-toggle" onClick={()=>setDropdownSearchContent(!dropdownSearchContent)}> <FaMagnifyingGlass /></Link>
                
              </li>
              <li>
                <Link to={""}>
                  <FaCartShopping />
                </Link>
              </li>
              <li>
     
                <Link to={"/admin-dasboard"}>
                  <FaCircleUser />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {
            dropdownSearchContent && <div className="dropdown-content flex justify-center bg-[#90e0b3] p-4 absolute left-0 right-0 top-16">
                  
           <div className="w-[450px]">
           {/* <InputSearch setSearchValue={setSearchInputValue} /> */}
           </div>
         
        </div>
        }
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
