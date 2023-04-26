import React from "react";
import { IoMdNotificationsOutline, IoMdPerson } from "react-icons/io";

const Notification = () => {
  return (
    <div className="pt-3 w-full flex justify-center items-center">
      <div className="bg-lightGrey rounded-full p-2 cursor-pointer">
        <IoMdNotificationsOutline size={25} />
      </div>
      <div className="bg-lightGrey p-2 rounded-full flex justify-center items-center ms-5 cursor-pointer">
        <IoMdPerson size={25} />
      </div>
    </div>
  );
};

export default Notification;
