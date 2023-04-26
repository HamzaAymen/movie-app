import React from "react";

const Processing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-loadingGrey">
      <div
        className="w-12 h-12 border-4 border-t-4 rounded-full border-gray-200 mb-4 animate-spin"
        style={{ borderColor: "#3DD2CC" }}
      ></div>
      <p className="text-gray-300">Processing..</p>
    </div>
  );
};

export default Processing;
