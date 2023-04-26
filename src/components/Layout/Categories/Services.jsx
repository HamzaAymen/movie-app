import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
  return (
    <div className="w-10/12 my-5">
      <h1 className="text-2xl mb-1">Services</h1>
      <div className="bg-lightGrey rounded-md p-1">
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <p>Netflix</p>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <p>Prime Video</p>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <p>Diseny +</p>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <p>HBO max</p>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <p>Hulu</p>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <p>Starz</p>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
