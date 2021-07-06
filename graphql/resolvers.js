import { getData, getMovieById } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getData(limit, rating),
    movie: (_, { id }) => getMovieById(id),
  },
};

export default resolvers;
