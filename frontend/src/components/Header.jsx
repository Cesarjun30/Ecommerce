import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom" 
const Header = () => {
  return (
    <header className=" bg-white h-16 shadow-md">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div>
        <Link to={"/"}>
          <Logo w={90} h={50} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 border-red-600">
          <input
            type="text"
            placeholder="Search products here... "
            className="w-full outline-none "
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white cursor-pointer">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>

          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white rounded-full h-5 w-5 p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-xs">0</p>
            </div>
          </div>

          <div>
          <Link to={"/login"}>
            <button className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700 hover:" >Login </button>
            </Link>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
