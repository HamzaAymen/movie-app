import React from "react";
import Logo from "../imgs/logo.png";

const Loading = () => {
  return (
    <div className="w-full h-full bg-loadingGrey flex justify-center items-center">
      <img src={Logo} alt="" className="animate-spin spin-slower" />
    </div>
  );
};

export default Loading;
