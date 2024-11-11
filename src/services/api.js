import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_API_KEY;

export const imagePath = "https://image.tmdb.org/t/p/w500";
export const imagePathOriginal = "https://image.tmdb.org/t/p/original";

/* Trending  */

export const fetchTrending = async (timewindow = "day") => {
  const { data } = await axios.get(
    `${baseURL}/trending/all/${timewindow}?api_key=${apiKey}`
  );
  return data?.results;
};
/* Movie Details (Top Level) */

export const fetchDetails = async (type, id) => {
  const res = await axios.get(`${baseURL}/${type}/${id}?api_key=${apiKey}`);
  return res?.data;
};

/* Movies & Series - Credits */
export const fetchCredits = async (type, id) => {
  const res = await axios.get(
    `${baseURL}/${type}/${id}/credits?api_key=${apiKey}`
  );
  return res?.data;
};

/* Movies & Series - Credits - Videos */

export const fetchVideos = async (type, id) => {
  const res = await axios.get(
    `${baseURL}/${type}/${id}/videos?api_key=${apiKey}`
  );
  return res?.data;
};
/* Movies & Series - Credits - Videos */

export const fetchMovies = async (page, sortBy) => {
  const res = await axios.get(
    `${baseURL}/discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
  );
  return res?.data;
};
export const fetchTvSeries = async (page, sortBy) => {
  const res = await axios.get(
    `${baseURL}/discover/tv?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
  );
  return res?.data;
};

// SEARCH

export const searchData = async (query, page) => {
  const res = await axios.get(
    `${baseURL}/search/multi?api_key=${apiKey}&query=${query}&page=${page}`
  );
  return res?.data
};