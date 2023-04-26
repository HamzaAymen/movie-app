import React from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/endpoints";
import { useSelector } from "react-redux";
// Change person.job of director and write to known for department

const Description = ({ information, type, id }) => {
  const apiKey = useSelector((state) => state.movie.apikey);
  const { data, isLoading, isError } = useQuery(["credits", id], () =>
    api.fetchCredits(apiKey, type, id)
  );
  let director;
  let writers;
  let stars;
  if (isLoading) return "";
  if (isError) return "";
  const credits = data.data;

  if (type === "movie") {
    director = credits.crew.find((person) => person.job === "Director").name;
    writers = credits.crew
      .filter((person) => person.department === "Writing")
      .map((person) => person.name);
    stars = credits.cast.map((person) => person.name);
  }

  if (type === "tv") {
    director = credits.crew.find(
      (person) => person.known_for_department === "Directing"
    )?.name;
    writers = credits.crew
      .filter((person) => person.known_for_department === "Writing")
      .map((person) => person.name);
    stars = credits.cast.map((person) => person.name);
  }

  return (
    <div className="w-full text-milkey font-[500]  p-1">
      <p>{information.overview}</p>
      <div className="mt-3 border-b-[1px] pb-[5px] border-milkey">
        Director : <span className="ms-1 text-lightBlue">{director}</span>
      </div>
      <div className="mt-3 border-b-[1px] pb-[5px] border-milkey">
        Writers : <span className="ms-1 text-lightBlue">{writers[0]}</span>
      </div>
      <div className="mt-3 border-b-[1px] pb-[5px] border-milkey">
        Stars : <span className="ms-2 text-lightBlue">{stars[0]},</span>
        <span className="ms-2 text-lightBlue">{stars[1]},</span>
        <span className="ms-2 text-lightBlue">{stars[2]}</span>
      </div>
    </div>
  );
};

export default Description;
