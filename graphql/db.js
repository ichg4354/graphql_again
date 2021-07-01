import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

let MovieData;

const getData = async () => {
  const {
    data: { data },
  } = await axios.get(API_URL);
  MovieData = data;
  return MovieData;
};

getData();
