import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import type { Request } from "express";
import { GraphQLError } from "graphql";
import { parse } from "graphql";
import jwt from "jsonwebtoken";
import { buildSchema } from "type-graphql";
import AppDataSource from "./AppDataSource";
import { User } from "./entities/User";
import { UserModel } from "./models/UserModel";
import { resolvers } from "./resolvers";
import type { MyContext } from "./types/context";

dotenv.config();

// Fonction pour décoder et vérifier le JWT
const getUser = async (token: string): Promise<User | null> => {
  if (!token) return null;

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "defaultSecret",
    ) as jwt.JwtPayload;
    return await AppDataSource.manager.findOne(User, {
      where: { email: decoded.email },
    });
  } catch (error) {
    console.error("JWT verification error:", error);
    return null;
  }
};

const startServer = async () => {
  await AppDataSource.initialize();

  const schema = await buildSchema({
    resolvers,
  });

  const server = new ApolloServer<MyContext>({
    schema,
    introspection: true,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }): Promise<MyContext> => {
      const request = req as Request;

      try {
        if (request.body?.query) {
          const parsedQuery = parse(request.body.query);
          const operationDefinitions = parsedQuery.definitions.filter(
            (def) => def.kind === "OperationDefinition",
          );

          const isLoginMutation = operationDefinitions.some(
            (def) =>
              def.kind === "OperationDefinition" &&
              def.operation === "mutation" &&
              "name" in def.selectionSet.selections[0] &&
              (def.selectionSet.selections[0].name.value === "login" ||
                def.selectionSet.selections[0].name.value === "createUser"),
          );

          if (isLoginMutation) {
            return { models: { User: UserModel } };
          }
        }
      } catch (error) {
        console.error("Erreur lors du parsing de la requête GraphQL :", error);
      }

      const token = req.headers.authorization?.split(" ")[1] || "";
      const user = await getUser(token);

      if (!user) {
        throw new GraphQLError("You must be logged in to query this schema", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      return {
        user,
        models: { User: UserModel },
      };
    },
  });

  console.log(`🚀 Server ready at: ${url}`);
};

startServer().catch((error) => {
  console.error("❌ Error starting server:", error);
});
