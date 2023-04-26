import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/navigation";
import MovieDetails from "./MovieDetails";
import Processing from "../Processing";
import api from "../../api/endpoints";

const MovieSlider = () => {
  const apiKey = useSelector((state) => state.movie.apikey);
  const { data, isError, isLoading } = useQuery(["trending-movies", 1], () =>
    api.fetchTrendingMovie(apiKey)
  );

  if (isLoading) return <Processing />;
  if (isError) return "";

  return (
    <div className="basis-[60%] h-full overflow-hidden">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        className="bg-loadingGrey h-full"
      >
        {data.data.results.map((movie) => {
          return (
            <SwiperSlide
              key={movie.id}
              className="relative flex justify-center items-end"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className="absolute w-full h-full object-fill"
              />
              <div className="absolute z-10 bg-neutral-950 opacity-[.6] h-full w-full top-0 left-0"></div>

              <MovieDetails movieId={movie.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
