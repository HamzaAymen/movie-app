import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Input = () => {
  return (
    <div className="flex flex-col justify-center items-center basis-[30%] h-[100vh] bg-loadingGrey text-white">
      <div className="text-center mb-[25px]">
        <h1 className="text-[20px]">Create an account </h1>
        <p className="font-[100] text-[15px]">
          Let’s get started with your 30 days free trial.
        </p>
      </div>
      <div className="w-[60%] flex flex-col [&>*]:mb-[10px]">
        <input
          type="text"
          className="bg-transparent border-b border-white my-[10px] p-[5px]"
          placeholder="Name"
        />
        <input
          type="text"
          className="bg-transparent border-b border-white my-[10px] p-[5px]"
          placeholder="Email"
        />
        <input
          type="password"
          className="bg-transparent border-b border-white my-[10px] p-[5px]"
          placeholder="Password"
        />
      </div>
      <div className="flex flex-col [&>*]:mb-[10px] mt-[20px] justify-center items-center">
        <Link
          to="/"
          className="w-[220px] text-center hover:text-white border-2 border-transparent bg-white hover:bg-transparent hover:border-2 hover:border-gray-300 text-black rounded-lg px-4 py-2 font-[600] transition"
        >
          Create account
        </Link>
        <button className="w-[220px] hover:bg-white hover:text-black flex justify-center items-center bg-none border-2 border-gray-300 text-white rounded-lg px-2 py-2 font-[600] transition">
          <FcGoogle />
          <p className="ms-[5px]">Sign up with Google</p>
        </button>
        <p className="font-light text-[15px] text-center">
          Already have an account ?
          <Link to="/signin" className="hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Input;
