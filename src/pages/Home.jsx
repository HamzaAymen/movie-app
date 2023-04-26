import React from "react";
import Input from "../components/Home/Input";
import MostPopular from "../components/Home/MostPopular";
import MovieTvInterface from "../components/Movie-Tv-Interface/MovieTvInterface";
import { useSelector } from "react-redux";
import api from "../api/endpoints";
import { homeMovieTvInterface } from "../fullpageDetails";

const Home = () => {
  const apiKey = useSelector((state) => state.movie.apikey);

  return (
    <div className="bg-loadingGrey w-[85%] ">
      <Input />
      <MostPopular />
      {homeMovieTvInterface.map((fullpageShow, idx) => {
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

export default Home;
