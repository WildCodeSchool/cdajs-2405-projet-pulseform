import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { type Request } from "express";
import jwt from "jsonwebtoken";
import { buildSchema } from "type-graphql";
import AppDataSource from "./AppDataSource";
import { User } from "./entities/User";
import { UserModel } from "./models/UserModel";
import { resolvers } from "./resolvers";
import type { MyContext } from "./types/context";
dotenv.config();

// Initialise Express
const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: `${process.env.SERVER_URL}:${process.env.PORT_FRONT}`,
    credentials: true,
  }),
);

// Fonction pour récupérer l'utilisateur depuis le JWT
const getUser = async (req: Request): Promise<User | null> => {
  const token = req.cookies.token;
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
    csrfPrevention: true,
    formatError: (error) => {
      console.error(error);
      return {
        message: error.message,
        code: error.extensions?.code || "INTERNAL_SERVER_ERROR",
      };
    },
  });

  await server.start();

  // Middleware GraphQL avec CORS activé
  app.use(
    "/graphql",
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }): Promise<MyContext> => {
        const user = await getUser(req);
        return { req, res, user, models: { User: UserModel } };
      },
    }),
  );

  // Démarre le serveur Express
  app.listen(process.env.PORT_BACK, () => {
    console.log(
      `🚀 Server is running on ${process.env.SERVER_URL}:${process.env.PORT_BACK}/graphql`,
    );
  });
};

// Démarrage du serveur
startServer().catch((error) => {
  console.error("❌ Error starting server:", error);
});
