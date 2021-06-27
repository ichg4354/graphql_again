import { userData, getPersonById } from "./db";

const resolvers = {
  Query: {
    crowd: () => userData,
    person: (_, args) => getPersonById(args.id),
  },
};

export default resolvers;
