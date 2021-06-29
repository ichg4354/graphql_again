import { getUserData, getUserById, addUser } from "./db";

const resolvers = {
  Query: {
    crowd: () => getUserData(),
    person: (_, args) => getUserById(args.id),
  },
  Mutation: {
    addUser: (_, args) => addUser(args.name, args.age),
  },
};

export default resolvers;
