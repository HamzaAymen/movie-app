import React from "react";
import Trailer from "../components/Details/Trailer";
import Info from "../components/Details/Info";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const apiKey = useSelector((state) => state.movie.apikey);
  const { id, type } = useParams();
  return (
    <div className="bg-loadingGrey sm:w-full md:w-[85%] min-h-[100vh]  flex flex-wrap justify-center items-center">
      <Trailer id={id} type={type} apiKey={apiKey} />
      <Info id={id} type={type} apiKey={apiKey} />
    </div>
  );
};

export default Details;
