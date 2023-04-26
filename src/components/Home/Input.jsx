import React from "react";

const Input = () => {
  return (
    <div className="flex justify-center items-center mt-[20px] ">
      <input
        type="text"
        placeholder="Search for movies, TV shows..."
        className="rounded-full bg-lightGrey w-[50%] py-[5px] px-[10px] text-milkey text-[14px]"
      />
    </div>
  );
};

export default Input;
