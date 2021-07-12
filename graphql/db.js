import axios from "axios";

const API_URL = "https://yts.mx/api/v2/";

const axiosGet = async (URL) => {
  const {
    data: { data },
  } = await axios.get(URL);
  return data;
};

export const getData = async (limit, rating) => {
  let REQUEST_URL = API_URL;
  REQUEST_URL += "list_movies.json";
  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  const { movies } = await axiosGet(REQUEST_URL);
  return movies;
};

export const getMovieById = async (id) => {
  let REQUEST_URL = API_URL;
  REQUEST_URL += "movie_details.json";
  if (id) {
    REQUEST_URL += `?movie_id=${id}`;
  }
  const data = await axiosGet(REQUEST_URL);
  return data.movie;
};
