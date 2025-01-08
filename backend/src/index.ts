import "reflect-metadata";
import AppDataSource from "./AppDataSource";
import { buildSchema } from "type-graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";

const startServer = async () => {
  await AppDataSource.initialize();

  // const schema = await buildSchema({
  //   resolvers: [TestResolver],
  // });

  // const server = new ApolloServer({
  //   schema,
  //   introspection: true,
  // });

  // const { url } = await startStandaloneServer(server, {
  //   listen: { port: 4000 },
  // });

  // console.log(`🚀  Server ready at: ${url}`);
};

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
