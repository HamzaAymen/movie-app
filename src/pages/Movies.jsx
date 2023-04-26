import React from "react";
import MovieTvInterface from "../components/Movie-Tv-Interface/MovieTvInterface";
import { useSelector } from "react-redux";
import api from "../api/endpoints";
import { movieFullpage } from "../fullpageDetails";

const Movies = () => {
  const apiKey = useSelector((state) => state.movie.apikey);

  return (
    <div className="w-[85%]">
      {movieFullpage.map((fullpageShow, idx) => {
        return (
          <MovieTvInterface
            key={idx}
            apiKey={apiKey}
            queryTitle={fullpageShow.element.queryTitle}
            title={fullpageShow.element.title}
            queryFn={fullpageShow.element.queryFn}
            path={fullpageShow.element.path}
            type={fullpageShow.element.type}
          />
        );
      })}
    </div>
  );
};

export default Movies;
