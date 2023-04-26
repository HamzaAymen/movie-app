import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const CategoriesTypes = () => {
  return (
    <div className="w-10/12 mt-5">
      <h1 className="text-2xl mb-1">Categories</h1>
      <div className="bg-lightGrey rounded-md p-1">
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <Link to="/movies/romance">Romance</Link>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <Link to="/movies/war">War</Link>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <Link to="/movies/animation">Animated</Link>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <Link to="/movies/comedy">Comedy</Link>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <Link to="/movies/crime">Crime</Link>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-3 py-2 px-3">
          <Link to="/movies/horror">Horror</Link>
          <AiOutlineArrowRight
            size={20}
            className="text-lightBlue cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesTypes;
