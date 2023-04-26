import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const SimilarInterface = ({
  apiKey,
  queryTitle,
  title,
  queryFn,
  path,
  type,
  id,
}) => {
  const { data, isError, isLoading } = useQuery([queryTitle], () =>
    queryFn(apiKey, type, id)
  );
  if (isLoading) return "";
  if (isError) return "";
  let smiliarInterface = data.data.results.slice(0, 4);
  return (
    <div className=" w-full my-5">
      <p className="text-white text-[20px] mb-2">
        Similar {type.charAt(0).toUpperCase() + type.slice(1)}'s :
      </p>
      {/* Trending */}
      <div className="w-full overflow-hidden flex justify-between items-center">
        {smiliarInterface.map((show) => {
          return (
            <Link to={`/details/${type}/${show.id}`} key={show.id}>
              <div className="w-full h-[200px]">
                <img
                  src={
                    show.poster_path
                      ? `https://image.tmdb.org/t/p/original/${show.poster_path}`
                      : `https://via.placeholder.com/500x750.png?text=No+Poster+Available`
                  }
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

export default SimilarInterface;
