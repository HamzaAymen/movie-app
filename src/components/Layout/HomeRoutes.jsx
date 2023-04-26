import React, { useState } from "react";
import Logo from "../../imgs/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie, BiTv } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Ticket from "./Ticket";

const HomeRoutes = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div className="bg-lightGrey fixed left-0 top-0 sm:hidden  md:w-[17%] md:flex flex-col justify-between items-center py-[15px] h-[100vh] rounded-se-[10px] rounded-ee-[10px]">
        <Link to="/">
          <img src={Logo} className="w-[100px]" />
        </Link>
        {/* Navigation */}
        <div className="w-full">
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "bg-[#2C6967] text-lightBlue border-e-[5px] border-lightBlue flex justify-center p-[12px] items-center"
                : "text-[#676766] flex justify-center items-center p-[12px] mb-[5px]"
            }
          >
            <AiOutlineHome className="me-[7px]" size={20} />
            <p className="w-[100px] font-[600]">Home</p>
          </NavLink>
          <NavLink
            to="movies"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2C6967] text-lightBlue border-e-[5px] border-lightBlue flex justify-center p-[12px] items-center"
                : "text-[#676766] flex justify-center items-center p-[12px] mb-[5px]"
            }
          >
            <BiCameraMovie className="me-[7px]" size={20} />{" "}
            <p className="w-[100px] font-[600]">Movies</p>
          </NavLink>
          <NavLink
            to="tv-series"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2C6967] text-lightBlue border-e-[5px] border-lightBlue flex justify-center p-[12px] items-center"
                : "text-[#676766] flex justify-center items-center p-[12px] mb-[5px]"
            }
          >
            <BiTv className="me-[7px]" size={20} />
            <p className="w-[100px] font-[600]">TV Series</p>
          </NavLink>
          <NavLink
            to="up-coming"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2C6967] text-lightBlue border-e-[5px] border-lightBlue flex justify-center p-[12px] items-center"
                : "text-[#676766] flex justify-center items-center p-[12px] mb-[5px]"
            }
          >
            <BsCalendar3 className="me-[7px]" size={15} />
            <p className="w-[100px] font-[600]">Upcoming</p>
          </NavLink>
        </div>
        {/* Ticket */}
        <Ticket />
        {/* Logout */}
        <div className="text-[#676766] font-[600] flex items-center cursor-pointer">
          <Link to="/signup" className="flex items-center">
            <FiLogOut className="me-1" /> Logout
          </Link>
        </div>
      </div>
      {/* Navigation For Sm Screen */}
      <GiHamburgerMenu
        className={`text-lightBlue text-[25px] my-3 fixed top-0 left-1 z-50  sm:flex md:hidden`}
        onClick={() => setShowNav(!showNav)}
      />

      <div
        className={`bg-lightGrey fixed left-1 top-[30px] my-3 z-50 ${
          showNav ? `sm:flex` : `sm:hidden`
        }  md:hidden flex-col justify-between items-center  `}
      >
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "bg-[#2C6967] text-lightBlue border-e-[5px] border-lightBlue flex justify-center p-[12px] items-center"
              : "text-[#676766] flex justify-center items-center p-[12px] mb-[5px]"
          }
        >
          <AiOutlineHome className="me-[7px]" size={20} />
          <p className="w-[100px] font-[600]">Home</p>
        </NavLink>
        <NavLink
          to="movies"
          className={({ isActive }) =>
            isActive
              ? "bg-[#2C6967] text-lightBlue border-e-[5px] border-lightBlue flex justify-center p-[12px] items-center"
              : "text-[#676766] flex justify-center items-center p-[12px] mb-[5px]"
          }
        >
          <BiCameraMovie className="me-[7px]" size={20} />{" "}
          <p className="w-[100px] font-[600]">Movies</p>
        </NavLink>
        <NavLink
          to="tv-series"
          className={({ isActive }) =>
            isActive
              ? "bg-[#2C6967] text-lightBlue border-e-[5px] border-lightBlue flex justify-center p-[12px] items-center"
              : "text-[#676766] flex justify-center items-center p-[12px] mb-[5px]"
          }
        >
          <BiTv className="me-[7px]" size={20} />
          <p className="w-[100px] font-[600]">TV Series</p>
        </NavLink>
        <NavLink
          to="up-coming"
          className={({ isActive }) =>
            isActive
              ? "bg-[#2C6967] text-lightBlue border-e-[5px] border-lightBlue flex justify-center p-[12px] items-center"
              : "text-[#676766] flex justify-center items-center p-[12px] mb-[5px]"
          }
        >
          <BsCalendar3 className="me-[7px]" size={15} />
          <p className="w-[100px] font-[600]">Upcoming</p>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeRoutes;
