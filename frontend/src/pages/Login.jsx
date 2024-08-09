import React from "react";
import loginIcons from "../assets/signin.gif";
import {FaEye, FaEyeSlash} from "react-icons/fa"
import { useState } from "react";
import {Link} from "react-router-dom"

const Login = () => {
  const [showPassword, setShowpassword] = useState(false)
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form className="">
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-100 p-2">
                <input type="email" placeholder="Enter your email" className="w-full h-full outline-none bg-transparent">
                </input>
              </div>              
            </div>

            <div className="">
              <label>Password: </label>
             <div className="bg-slate-100 p-2 flex"> <input type={showPassword? "text" :"password"} placeholder="Enter your password" className="w-full h-full outline-none  bg-transparent"></input>
             <div className="cursor-pointer text-xl" onClick={() => setShowpassword((prev)=> !prev)}> <span>

              {
                showPassword ?( <FaEyeSlash/>) :( <FaEye/> )
              }
               </span></div></div>
               <Link to={"/forgot-password"} className="w-fit  block mt-4 ml-auto hover:underline hover:text-red-600">Forgot your Password?</Link>
            </div>

            <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
