import React from "react";
import Input from "../components/Signin/Input";
import MovieSlider from "../components/Signin/MovieSlider";

const Signin = () => {
  return (
    <div className="flex justify-between items-center h-[100vh] w-full">
      <Input />
      <MovieSlider />
    </div>
  );
};

export default Signin;
