import { getUserData, getUserById, addUser, delUser } from "./db";

const resolvers = {
  Query: {
    crowd: () => getUserData(),
    person: (_, args) => getUserById(args.id),
  },
  Mutation: {
    addUser: (_, args) => addUser(args.name, args.age),
    delUser: (_, args) => delUser(args.name),
  },
};

export default resolvers;
