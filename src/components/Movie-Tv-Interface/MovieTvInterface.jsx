import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const MovieTvInterface = ({
  apiKey,
  queryTitle,
  title,
  queryFn,
  path,
  type,
}) => {
  const { data, isError, isLoading } = useQuery([queryTitle, 1], () =>
    queryFn(apiKey)
  );
  if (isLoading) return "";
  if (isError) return "";
  let MovieTvInterface = data.data.results.slice(0, 4);
  return (
    <div className=" w-full my-5">
      {/* Title */}
      <div className="flex justify-between items-center my-[15px]">
        <h1 className="text-milkey font-[700] text-[20px]">{title}</h1>
        <Link to={path} className="text-milkey hover:underline">
          See all
        </Link>
      </div>

      {/* Trending */}
      <div className="w-full overflow-hidden flex justify-between items-center">
        {MovieTvInterface.map((movie) => {
          return (
            <Link to={`/details/${type}/${movie.id}`} key={movie.id}>
              <div className="w-full h-[200px]">
                <img
                  src={`${
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : `https://via.placeholder.com/500x750.png?text=No+Poster+Available`
                  }
                  `}
                  className="object-contain w-full h-full rounded-xl"
                  alt=""
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MovieTvInterface;
