import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Fullpage = ({ apiKey, queryTitle, title, queryFn, path, type }) => {
  const [page, setPage] = useState(1);
  const { data, isError, isLoading } = useQuery([queryTitle, page], () =>
    queryFn(apiKey, page)
  );
  if (isLoading) return "";
  if (isError) return "";
  let topRated = data.data.results;
  return (
    <div className=" w-[85%] my-5 ">
      {/* Title */}
      <div className="flex justify-between items-center my-[15px]">
        <h1 className="text-milkey font-[700] text-[20px]">{title}</h1>
      </div>

      {/* Trending */}
      <div className="w-full overflow-hidden min-h-[100vh] flex justify-between items-center flex-wrap">
        {topRated.map((movie) => {
          return (
            <div className="w-1/4 h-[200px] mb-4" key={movie.id}>
              <Link
                to={`/details/${type}/${movie.id}`}
                className="w-full h-full"
              >
                <img
                  src={`${
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : `https://via.placeholder.com/500x750.png?text=No+Poster+Available`
                  }`}
                  className="object-contain w-full h-full rounded-xl"
                  alt=""
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-between items-center text-lightBlue">
        <button
          onClick={() => setPage((prev) => (prev = prev - 1))}
          disabled={page <= 1}
        >
          <AiOutlineArrowLeft
            size={30}
            className={`${
              page > 1 ? "cursor-pointer" : "cursor-default text-[#577D86]"
            } :`}
          />
        </button>
        <button
          onClick={() => setPage((prev) => (prev = prev + 1))}
          disabled={page >= data.data.total_pages}
        >
          <AiOutlineArrowRight
            size={30}
            className={`${
              page < data.data.total_pages
                ? "cursor-pointer"
                : "cursor-default text-[#577D86]"
            } :`}
          />
        </button>
      </div>
    </div>
  );
};

export default Fullpage;
