import axios from "axios";

const fetchSimilar = (api_key, type, id) => {
  return axios.get(`https://api.themoviedb.org/3/${type}/${id}/similar`, {
    params: {
      api_key,
    },
  });
};

const fetchCredits = (api_key, type, id) => {
  return axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits`, {
    params: {
      api_key,
    },
  });
};
const fetchDetailsVideo = (api_key, type, id, videos = "") => {
  return axios.get(`https://api.themoviedb.org/3/${type}/${id}${videos}`, {
    params: {
      api_key,
    },
  });
};

const fetchDetails = (api_key, type, id) => {
  return axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
    params: {
      api_key,
    },
  });
};

const fetchUpcomingMovies = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
    params: {
      api_key,
      page,
      with_original_language: "en",
    },
  });
};

export const fetchComedyMovie = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key,
      with_genres: "35",
      without_genres:
        "16, 10751, 10762, 9648, 878, 99, 53, 18, 28, 36, 37, 80, 10402, 10749, 10752, 37",
      page,
    },
  });
};

export const fetchCrimeMovie = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key,
      with_genres: "80",
      without_genres: "16",
      page,
    },
  });
};

export const fetchRomanceMovie = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key,
      with_genres: "10749",
      without_genres: "16",
      page,
    },
  });
};

export const fetchWarMovie = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key,
      with_genres: "10752",
      without_genres: "16",
      page,
    },
  });
};

export const fetchAnimationMovie = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key,
      with_genres: "16",
      page,
    },
  });
};

export const fetchHorrorMovie = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key,
      with_genres: "27",
      without_genres: "16",
      page,
    },
  });
};

export const fetchTopRatedMovies = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
    params: {
      api_key,
      page,
      with_original_language: "en",
    },
  });
};

export const fetchTrendingMovie = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/movie/popular`, {
    params: {
      api_key,
      page,
      with_original_language: "en",
    },
  });
};

export const fetchWarTv = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/tv`, {
    params: {
      api_key,
      with_genres: "10768",
      without_genres: "16",
      with_original_language: "en",
      page,
    },
  });
};

export const fetchPopularTv = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/trending/tv/day`, {
    params: {
      api_key,
      page,
      with_original_language: "en",
    },
  });
};

export const fetchTopRatedTv = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/tv/top_rated`, {
    params: {
      api_key,
      page,
      with_original_language: "en",
    },
  });
};

export const fetchAnimationTv = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/tv`, {
    params: {
      api_key,
      with_genres: "16",
      with_original_language: "en",
      page,
    },
  });
};

export const fetchFamilyTv = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/tv`, {
    params: {
      api_key,
      with_genres: "10751",
      without_genres: "16",
      with_original_language: "en",
      page,
    },
  });
};

export const fetchDocumentaryTv = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/tv`, {
    params: {
      api_key,
      with_genres: "99",
      without_genres: "16",
      with_original_language: "en",
      page,
    },
  });
};

export const fetchCrimeTv = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/tv`, {
    params: {
      api_key,
      with_genres: "80",
      without_genres: "16",
      page,
    },
  });
};

export const fetchComedyTv = (api_key, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/discover/tv`, {
    params: {
      api_key,
      with_genres: "35",
      without_genres: " 16",
      with_original_language: "en",
      page,
    },
  });
};

const api = {
  fetchAnimationTv,
  fetchFamilyTv,
  fetchDocumentaryTv,
  fetchCrimeTv,
  fetchComedyTv,
  fetchTopRatedTv,
  fetchPopularTv,
  fetchWarTv,
  fetchTrendingMovie,
  fetchTopRatedMovies,
  fetchHorrorMovie,
  fetchAnimationMovie,
  fetchWarMovie,
  fetchRomanceMovie,
  fetchCrimeMovie,
  fetchComedyMovie,
  fetchUpcomingMovies,
  fetchDetailsVideo,
  fetchDetails,
  fetchCredits,
  fetchSimilar,
};

export default api;
