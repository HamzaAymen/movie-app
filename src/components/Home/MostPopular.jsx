import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdInformationCircle } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";

const fetchPopularMovie = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/movie/popular`, {
    params: {
      api_key,
      page,
      with_original_language: "en",
    },
  });
};

const MostPopular = () => {
  const apiKey = useSelector((state) => state.movie.apikey);
  const { data, isError, isLoading } = useQuery(["trending-movies", 1], () =>
    fetchPopularMovie(apiKey)
  );
  if (isLoading) return "";
  if (isError) return "";
  return (
    <div className="w-full h-[300px] mt-[20px] flex justify-center items-center  overflow-hidden">
      <div className="w-full h-full rounded-lg relative flex justify-end items-end">
        <img
          src={`https://image.tmdb.org/t/p/original${data.data.results[0].backdrop_path}`}
          className="w-full h-full object-cover rounded-lg absolute"
        />
        <div className="absolute z-10  bg-neutral-950 opacity-[.6] h-full w-full top-0 left-0 rounded-lg"></div>
        <button className="w-[70px] me-[10px] mb-[10px] text-[13px] relative p-[5px] rounded-md z-20 text-milkey flex justify-center items-center bg-cover bg-center backdrop-blur-sm bg-white bg-opacity-[.19]">
          <BsFillPlayFill size={20} /> Play
        </button>
        <button className="w-[90px] me-[10px] mb-[10px] text-[13px]  relative p-[5px] rounded-md z-20 text-milkey flex justify-center items-center bg-cover bg-center backdrop-blur-sm bg-white bg-opacity-[.19]">
          <Link
            to={`/details/movie/${data.data.results[0].id}`}
            className="flex justify-center items-center relative z-20"
          >
            <IoMdInformationCircle size={15} /> Info
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MostPopular;
