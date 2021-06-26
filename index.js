import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "./graphQl/query.graphql",
  resolvers: resolvers,
});

server.start(() => console.log("Server is running"));
