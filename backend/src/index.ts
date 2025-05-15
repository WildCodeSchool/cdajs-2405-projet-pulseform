import path from "node:path";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
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

// Serve static images from the "public" folder
app.use("/images", express.static(path.join(__dirname, "public", "images")));

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        `${process.env.SERVER_URL_DEV}`,
        `${process.env.SERVER_URL_STAGING}`,
        `${process.env.SERVER_URL_PRODUCTION}`,
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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
    "/",
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }): Promise<MyContext> => {
        const user = await getUser(req);
        return { req, res, user, models: { User: UserModel } };
      },
    }),
  );

  // Route de Health Check
  app.get("/health", async (_req: Request, res: Response): Promise<void> => {
    try {
      const dbStatus = (await AppDataSource.isInitialized)
        ? "connected"
        : "disconnected";
      res.status(200).json({ status: "ok", database: dbStatus });
    } catch (_) {
      res.status(500).json({ status: "error", database: "disconnected" });
    }
  });

  // Démarre le serveur Express
  app.listen(process.env.PORT_BACK, () => {
    console.log(
      `🚀 Server is running on ${process.env.SERVER_URL}:${process.env.PORT_BACK}`,
    );
  });
};

// Démarrage du serveur
startServer().catch((error) => {
  console.error("❌ Error starting server:", error);
});
