import React from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/endpoints";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Trailer = ({ id, type, apiKey }) => {
  const { data, isLoading, isError } = useQuery(["details-video", id], () =>
    api.fetchDetailsVideo(apiKey, type, id, "/videos")
  );

  if (isLoading) return "";
  if (isError) return "";
  const trailerVideo = data.data.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  let trailerThumnail = "";
  let trailerLink = "";
  if (trailerVideo?.key) {
    trailerThumnail = `https://img.youtube.com/vi/${trailerVideo.key}/maxresdefault.jpg`;
    trailerLink = `https://www.youtube.com/watch?v=${trailerVideo.key}`;
  } else {
    trailerThumnail = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg`;
    trailerLink = `https://www.youtube.com`;
  }

  return (
    <div className="sm:w-[80%] md:w-full sm:h-[20vh] md:h-[45vh] bg-red relative flex justify-center items-center mt-7">
      <img
        src={trailerThumnail}
        alt="Trailer Thumnail Not Found"
        className="absolute left-0 top-0 w-full h-full object-cover object-center z-[5] rounded-xl"
      />
      <Link
        to={trailerLink}
        target="_blank"
        className="relative z-10 flex justify-center items-center flex-col"
      >
        <BsFillPlayFill
          size={60}
          className="relative z-[10] text-white bg-[#e3f2fd] rounded-full p-2 bg-opacity-[.3] text-center cursor-pointer"
        />
        <h1 className="relative z-10 text-white font-[100] text-[20px] my-1">
          Watch Trailer
        </h1>
      </Link>
    </div>
  );
};

export default Trailer;
