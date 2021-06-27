import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "./graphql/query.graphql",
  resolvers: resolvers,
});

server.start(() => console.log("server is running"));
