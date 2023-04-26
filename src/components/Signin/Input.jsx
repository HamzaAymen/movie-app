import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Input = () => {
  return (
    <div className="bg-loadingGrey h-full flex flex-col justify-center items-center basis-[80%] text-white">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-[30px]">Welcome back, Olivia</h1>
        <p className="font-[100] text-[15px]">
          Welcome back! Please enter your details.
        </p>
        <button className="w-[250px] hover:bg-white hover:text-black flex justify-center items-center bg-none border-2 border-gray-300 text-white rounded-lg mt-[30px] px-2 py-2 font-[600] transition">
          <FcGoogle />
          <p className="ms-[5px] font-[400]">Log in with Google</p>
        </button>
      </div>

      {/* Inputs */}
      <div className="flex flex-col justify-center items-center bg">
        <div className="flex justify-center items-center">
          <div className="border-t border-gray-400 w-[100px] my-8"></div>
          <div className="my-8 mx-2 text-gray-500 font-bold tracking-wider">
            or
          </div>
          <div className="border-t border-gray-400 w-[100px] my-8"></div>
        </div>
        <input
          type="text"
          className="w-[310px] bg-transparent border-b my-[10px] border-white p-[5px]"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-[310px] bg-transparent border-b my-[10px] border-white p-[5px]"
          placeholder="Password"
        />

        <div className="flex justify-between items-center">
          <div>
            <input
              className="bg-transparent border-gray-400 rounded focus:ring-1 focus:ring-gray-400 focus:outline-none"
              type="checkbox"
              name="remember-me"
            />
            <label
              htmlFor="remember-me"
              className="text-[15px] font-light ml-2 text-gray-500"
            >
              Remember me for 30 days
            </label>
          </div>
          <button className="ms-[25px] underline font-[100] text-[10px]">
            Forget Password?
          </button>
        </div>
        <Link
          to="/"
          className="w-[220px] mt-5 hover:text-white border-2 border-transparent bg-white hover:bg-transparent hover:border-2 hover:border-gray-300 text-black rounded-lg px-4 py-2 font-[600] transition text-center"
        >
          Login
        </Link>
        <p className="mt-2 font-light text-[15px] text-center">
          Don't Have An Account?
          <Link to="/signup" className="ms-2 hover:underline">
            Sign up For Free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Input;
