import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import moment from "moment";

// Change title to name
// Change relase_date to first_air_date
// remove time

const Titlle = ({ information, type }) => {
  let duration;
  let hours;
  let mins;
  if (type === "movie") {
    duration = moment.duration(information.runtime, "minutes");
    hours = Math.floor(duration.asHours());
    mins = Math.round(duration.asMinutes()) % 60;
  }
  return (
    <div className="flex md:justify-start flex-wrap sm:justify-between items-center text-white w-full md:m-2  [&>*]:me-2  md:text-[15px] font-[600]">
      {type === "movie" && (
        <div className="flex  sm:justify-between flex-wrap md:justify-start items-center md:[&>*]:me-2 text-center w-[400px]">
          <p>{information.title}</p>
          <p>•</p>
          <p>{information.release_date.substring(0, 4)}</p>
          <p>•</p>
          <p>PG-13</p>
          <p>•</p>
          <p>
            {hours}
            h: {mins}m
          </p>
        </div>
      )}
      {type === "tv" && (
        <div className="flex  justify-start items-center [&>*]:me-2 text-center">
          <p>{information.original_name}</p>
          <p>•</p>
          <p>{information.first_air_date.substring(0, 4)}</p>
          <p>•</p>
          <p>PG-13</p>
        </div>
      )}

      <div className="flex ">
        {information.genres.slice(0, 2).map((genre) => {
          return (
            <p
              key={Math.random()}
              className="text-[14px] me-1 border-2 border-milkey rounded-full p-1 cursor-pointer flex justify-center items-center"
            >
              {genre.name}
            </p>
          );
        })}
      </div>
      <div className="flex justify-center items-center ms-4  ">
        <AiOutlineHeart className="text-[20px] me-1 cursor-pointer" />
        <AiOutlineShareAlt className="text-[20px] me-1 cursor-pointer" />
        <BsBookmark className="text-[20px] me-1 cursor-pointer" />
        <AiFillStar className="text-yellow-400 text-[20px]" />
        <p>{information.vote_average.toString().substring(0, 3)} / 10</p>
      </div>
    </div>
  );
};

export default Titlle;
