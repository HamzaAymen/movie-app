import React from "react";
import Notification from "./Categories/Notification";
import CategoriesTypes from "./Categories/CategoriesTypes";
import Services from "./Categories/Services";

const Categories = () => {
  return (
    <div>
      <div className="fixed right-0 top-0 w-[20%] overflow-y-scroll scrollbar-hide sm:hidden lg:flex flex-col md:n justify-ceneter items-center h-[100vh] text-milkey">
        <Notification />
        <CategoriesTypes />
        <Services />
      </div>
    </div>
  );
};

export default Categories;
