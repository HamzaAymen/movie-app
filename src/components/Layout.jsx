import React from "react";
import { Outlet } from "react-router-dom";
import HomeRoutes from "./Layout/HomeRoutes";
import Categories from "./Layout/Categories";

const Layout = () => {
  return (
    <div className="flex justify-between items-center bg-loadingGrey sm:p-0 md:ps-[15%] lg:px-[15%]">
      <HomeRoutes />
      <Outlet />
      <Categories />
    </div>
  );
};

export default Layout;
