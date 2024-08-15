import React from "react";
import loginIcons from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false) 

  const [data, setData] = useState({
    name:"",
    email: "",
    password: "",
    confirmPassword:"",
    profilePic:""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log("Login data: ", data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="signup">
      <div className="mx-auto container p-4 rounded-md">
        <div className="bg-white  p-4 w-full max-w-sm mx-auto rounded-md">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form className="pt-6 flex flex-col gap-4" onSubmit={handleSubmit}>

            {/* userName Field */}
            <div className="grid">
              <label>Name: </label>
              <div className="bg-slate-100 p-2 rounded-md">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={data.name}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                ></input>
              </div>
            </div>

            {/* email Field */}
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-100 p-2 rounded-md">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                ></input>
              </div>
            </div>

            {/* password Field */}
            <div className="grid">
              <label>Password: </label>
              <div className="bg-slate-100 p-2 flex rounded-md">
                {" "}
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                ></input>
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowpassword((prev) => !prev)}
                >
                  {" "}
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="grid">
              <label>Confirm Password: </label>
              <div className="bg-slate-100 p-2 flex rounded-md">
                {" "}
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                ></input>
                
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {" "}
                  <span>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4">
              Sign Up
            </button>
          </form>
          <p className="my-4 text-red-600 hover:text-red-700 hover:underline cursor-pointer">
            Have an account already? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
