import { GraphQLServer, PubSub } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import db from "./db";

// Resolver



const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,

  },
  context: {
    db
  }
});

server.start(() => {
  console.log("The server is up");
});
