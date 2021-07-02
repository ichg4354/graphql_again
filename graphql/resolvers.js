import { getData } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getData(limit, rating),
  },
};

export default resolvers;
