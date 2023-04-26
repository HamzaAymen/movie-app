import React from "react";
import { AiFillStar } from "react-icons/ai";
import moment from "moment";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovieDetail = (apiKey, movieId) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
  );
};
const MovieDetails = ({ movieId }) => {
  const apiKey = useSelector((state) => state.movie.apikey);
  const { data, isLoading, isError } = useQuery(["details", movieId], () =>
    fetchMovieDetail(apiKey, movieId)
  );

  if (isLoading) return "";
  if (isError) return "";

  const duration = moment.duration(data.data.runtime, "minutes");
  const hours = Math.floor(duration.asHours());
  const mins = Math.round(duration.asMinutes()) % 60;

  return (
    <div className="flex justify-around items-center relative z-20 py-[10px] w-full text-white ">
      <div>
        <h1 className="text-[25px] font-[600]">{data.data.title}</h1>
        <div className="flex">
          <p>{data.data.release_date.substring(0, 4)}</p>
          <p>|PG-13</p>
          <p>
            |{hours}
            h: {mins}m
          </p>
        </div>
        <div className="flex">
          <p className="me-[10px]">Genres:</p>
          <p>{data.data.genres[0].name}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png`}
          className="w-[40px] me-[3px]"
        />
        <AiFillStar className="text-yellow-400" />
        <p>{data.data.vote_average.toString().substring(0, 3)} / 10</p>
      </div>
    </div>
  );
};

export default MovieDetails;
