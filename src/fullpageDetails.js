import api from "./api/endpoints";
export const movieFullpage = [
  {
    path: "popular",
    element: {
      queryTitle: "popular-movies",
      title: "Most Popular Movies",
      queryFn: api.fetchTrendingMovie,
      path: "/movies/popular",
      type: "movie",
    },
  },
  {
    path: "top-rated",
    element: {
      queryTitle: "toprated-movies",
      title: "Top Rated Movies Of All Time",
      queryFn: api.fetchTopRatedMovies,
      path: "/movies/top-rated",
      type: "movie",
    },
  },
  {
    path: "horror",
    element: {
      queryTitle: "horror-movies",
      title: "Horror Movies",
      queryFn: api.fetchHorrorMovie,
      path: "/movies/horror",
      type: "movie",
    },
  },
  {
    path: "animation",
    element: {
      queryTitle: "animation-movies",
      title: "Animation Movies",
      queryFn: api.fetchAnimationMovie,
      path: "/movies/animation",
      type: "movie",
    },
  },
  {
    path: "war",
    element: {
      queryTitle: "war-movies",
      title: "War Movies",
      queryFn: api.fetchWarMovie,
      path: "/movies/war",
      type: "movie",
    },
  },
  {
    path: "romance",
    element: {
      queryTitle: "romance-movies",
      title: "Romance Movies",
      queryFn: api.fetchRomanceMovie,
      path: "/movies/romance",
      type: "movie",
    },
  },
  {
    path: "crime",
    element: {
      queryTitle: "crime-movies",
      title: "Crime Movies",
      queryFn: api.fetchCrimeMovie,
      path: "/movies/crime",
      type: "movie",
    },
  },
  {
    path: "comedy",
    element: {
      queryTitle: "comedy-movies",
      title: "Comedy Movies",
      queryFn: api.fetchComedyMovie,
      path: "/movies/comedy",
      type: "movie",
    },
  },
];

export const tvFullpage = [
  {
    path: "popular",
    element: {
      queryTitle: "popular-tvs",
      title: "Most Popular Tv Shows",
      queryFn: api.fetchPopularTv,
      path: "/tv-series/popular",
      type: "tv",
    },
  },
  {
    path: "top-rated",
    element: {
      queryTitle: "toprated-tvs",
      title: "Top Rated Tv Shows",
      queryFn: api.fetchTopRatedTv,
      path: "/tv-series/top-rated",
      type: "tv",
    },
  },
  {
    path: "comedy",
    element: {
      queryTitle: "comedy-tvs",
      title: "Comedy Tv Shows",
      queryFn: api.fetchComedyTv,
      path: "/tv-series/comedy",
      type: "tv",
    },
  },
  {
    path: "war",
    element: {
      queryTitle: "war-tvs",
      title: "War Tv Shows",
      queryFn: api.fetchWarTv,
      path: "/tv-series/war",
      type: "tv",
    },
  },
  {
    path: "crime",
    element: {
      queryTitle: "crime-tvs",
      title: "Crime Tv Shows",
      queryFn: api.fetchCrimeTv,
      path: "/tv-series/crime",
      type: "tv",
    },
  },
  {
    path: "animation",
    element: {
      queryTitle: "animation-tvs",
      title: "Animation Tv Shows",
      queryFn: api.fetchAnimationTv,
      path: "/tv-series/animation",
      type: "tv",
    },
  },
  {
    path: "family",
    element: {
      queryTitle: "family-tvs",
      title: "Family Tv Shows",
      queryFn: api.fetchFamilyTv,
      path: "/tv-series/family",
      type: "tv",
    },
  },
  {
    path: "documentary",
    element: {
      queryTitle: "documentary-tvs",
      title: "Documantrys",
      queryFn: api.fetchDocumentaryTv,
      path: "/tv-series/documentary",
      type: "tv",
    },
  },
];

export const homeMovieTvInterface = [
  {
    path: "popular",
    element: {
      queryTitle: "popular-movies",
      title: "Most Popular Movies",
      queryFn: api.fetchTrendingMovie,
      path: "/movies/popular",
      type: "movie",
    },
  },
  {
    path: "popular",
    element: {
      queryTitle: "popular-tvs",
      title: "Most Popular Tv Shows",
      queryFn: api.fetchPopularTv,
      path: "/tv-series/popular",
      type: "tv",
    },
  },
  {
    path: "/up-coming",
    element: {
      queryTitle: "upcoming-movies",
      title: "Upcoming Movies",
      queryFn: api.fetchUpcomingMovies,
      path: "/up-coming",
      type: "movie",
    },
  },
  {
    path: "top-rated",
    element: {
      queryTitle: "toprated-movies",
      title: "Top Rated Movies Of All Time",
      queryFn: api.fetchTopRatedMovies,
      path: "/movies/top-rated",
      type: "movie",
    },
  },
  {
    path: "top-rated",
    element: {
      queryTitle: "toprated-tvs",
      title: "Top Rated Tv Shows",
      queryFn: api.fetchTopRatedTv,
      path: "/tv-series/top-rated",
      type: "tv",
    },
  },
];
