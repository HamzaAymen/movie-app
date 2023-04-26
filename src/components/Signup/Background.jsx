import React from "react";

const Background = () => {
  return (
    // Background
    <div className="bg-loadingGrey w-[100vw] h-[100vh] relative basis-[70%]  flex flex-col justify-center items-start p-[50px]">
      <img
        src="https://images.justwatch.com/poster/302364409/s592/avatar-the-deep-dive-a-special-edition-of-20-20.webp"
        className="object-cover w-full h-full absolute left-0 top-0 z-[5]"
      />
      <div className="absolute z-10 bg-neutral-950 opacity-[.4] h-full w-full top-0 left-0"></div>

      {/* Content */}
      <div className="relative z-20 text-white [&>p]:font-[100] [&>p]:mb-[10px]">
        <h1 className="text-[20px] font-medium mb-[10px]">
          Benefits of your free IMDb account
        </h1>
        <h2>Personalized Recommendations</h2>
        <p>Discover shows you'll love.</p>
        <h2>Your Ratings</h2>
        <p>Rate and remember everything you've seen.</p>
        <h2>Contribute to IMDb</h2>
        <p>
          Add data that will be seen by millions of people and get cool badges.
        </p>
      </div>
    </div>
  );
};

export default Background;
