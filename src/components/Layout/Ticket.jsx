import React from "react";
import { BsTicketFill } from "react-icons/bs";

const Ticket = () => {
  return (
    <div className="bg-[#191919] relative rounded-md w-[80%] px-[5px] h-[32%] pb-[5px] pt-[10px] flex flex-col justify-around items-center text-center">
      <p className="text-milkey text-[14px]">
        Play movie quizes and earn free ticket
      </p>
      <p className="text-[#666666] text-[12px]">50k people are playing now</p>
      <button className="bg-[#2C6967] text-lightBlue rounded-full p-[5px] w-[120px] text-[13px]">
        Start playing
      </button>
      <div className="bg-[#3DD2CC] bg-opacity-[50%] rounded-full w-[40px] h-[40px] top-[-30px] absolute flex justify-center items-center">
        <BsTicketFill className="text-lightBlue text-[20px]" />
      </div>
    </div>
  );
};

export default Ticket;
