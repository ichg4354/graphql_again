import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getData = async (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    console.log(limit);
    REQUEST_URL += `?limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
    console.log(REQUEST_URL);
  }
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(REQUEST_URL);
  return movies;
};
