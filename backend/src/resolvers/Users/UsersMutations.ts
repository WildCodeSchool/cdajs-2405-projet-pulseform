import * as argon2 from "argon2";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "../../entities/User";
import { CreateUserInput, UpdateUserInput } from "../../inputs/UsersInput";
import { Weight } from "../../inputs/WeightsInput";
import { AuthPayload } from "../../types/AuthPayload";
import type { MyContext } from "../../types/context";

@Resolver(User)
export class UsersMutations {
  // Login
  @Mutation(() => AuthPayload)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() context: MyContext,
  ): Promise<AuthPayload> {
    const user = await context.models.User.getByEmail(email);
    if (!user) {
      throw new GraphQLError("User not found", {
        extensions: { code: "USER_NOT_FOUND" },
      });
    }

    // Vérifier si le mot de passe est correct
    const isValid = await argon2.verify(user.password, password);
    if (!isValid) {
      throw new GraphQLError("Invalid password", {
        extensions: { code: "INVALID_PASSWORD" },
      });
    }

    // Générer le JWT
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT secret is not defined");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: "24h" },
    );

    // Définir le cookie sécurisé
    context.res.cookie("token", token, {
      httpOnly: true, // Empêche l'accès via JS
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 jour
      path: "/", // Le cookie est valide pour toutes les routes
    });

    return { user };
  }

  // Mutation pour créer un nouvel utilisateur
  @Mutation(() => User)
  async createUser(
    @Arg("data", () => CreateUserInput) data: CreateUserInput,
    @Ctx() context: MyContext,
  ): Promise<User> {
    const { User: UserModel } = context.models;

    // Vérifier si un utilisateur avec cet email existe déjà
    const existingUser = await UserModel.getByEmail(data.email);
    if (existingUser) {
      throw new GraphQLError("User with this email already exists", {
        extensions: { code: "EMAIL_ALREADY_TAKEN" },
      });
    }

    // Hacher le mot de passe
    const hashedPassword = await argon2.hash(data.password);

    // Créer un nouvel utilisateur
    const newUser = await UserModel.create({
      ...data,
      password: hashedPassword,
    });

    return newUser;
  }

  // Mettre à jour un utilisateur (nécessite d'être admin ou soi-même)
  @Mutation(() => User)
  async updateUser(
    @Arg("data", () => UpdateUserInput) data: UpdateUserInput,
    @Ctx() context: MyContext,
  ): Promise<User> {
    const {
      user,
      models: { User: UserModel },
    } = context;

    // Vérifier l'authentification
    if (!user) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    // Récupérer l'utilisateur existant
    const existingUser = await UserModel.getById(data.id);
    if (!existingUser) {
      throw new GraphQLError("User not found", {
        extensions: { code: "USER_NOT_FOUND" },
      });
    }

    // Vérifier que l'utilisateur peut modifier ces données
    const isAdmin = user.role === "admin";
    const isSelf = user.id === data.id;
    if (!isAdmin && !isSelf) {
      throw new GraphQLError("Permission denied", {
        extensions: { code: "FORBIDDEN" },
      });
    }

    // Mettre à jour les champs autorisés
    const updatedUser = await UserModel.update(data.id, {
      ...data,
      password: data.password
        ? await argon2.hash(data.password)
        : existingUser.password,
    });

    return updatedUser;
  }

  // Mutation pour supprimer un utilisateur
  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("id") id: number,
    @Ctx() context: MyContext,
  ): Promise<boolean> {
    const {
      user,
      models: { User: UserModel },
    } = context;

    // Vérifier l'authentification
    if (!user) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    // Vérifier si l'utilisateur existe
    const existingUser = await UserModel.getById(id);
    if (!existingUser) {
      throw new GraphQLError("User not found", {
        extensions: { code: "USER_NOT_FOUND" },
      });
    }

    // Vérifier que l'utilisateur peut supprimer ce compte
    const isAdmin = user.role === "admin";
    const isSelf = user.id === id;
    if (!isAdmin && !isSelf) {
      throw new GraphQLError("Permission denied", {
        extensions: { code: "FORBIDDEN" },
      });
    }

    // Supprimer l'utilisateur
    await UserModel.delete(id);
    return true;
  }

  // Mutation pour ajouter un poids
  @Mutation(() => [Weight])
  async addWeight(
    @Arg("id") id: number,
    @Arg("weight") weight: number,
    @Ctx() context: MyContext,
  ): Promise<Weight[]> {
    const {
      user,
      models: { User: UserModel },
    } = context;

    // Vérifier l'authentification
    if (!user) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    // Vérifier si l'utilisateur existe
    const existingUser = await UserModel.getById(id);
    if (!existingUser) {
      throw new GraphQLError("User not found", {
        extensions: { code: "USER_NOT_FOUND" },
      });
    }

    // Vérifier que l'utilisateur peut modifier ces données
    const isAdmin = user.role === "admin";
    const isSelf = user.id === id;
    if (!isAdmin && !isSelf) {
      throw new GraphQLError("Permission denied", {
        extensions: { code: "FORBIDDEN" },
      });
    }

    const updatedWeights = [...existingUser.weights];

    // Traiter chaque poids reçu
    const formattedDate = new Date().toLocaleString("en-US", {
      month: "short",
    });

    // Vérifier si la date existe déjà dans le tableau
    const existingEntry = updatedWeights.find((e) => e.date === formattedDate);

    if (existingEntry) {
      // Mise à jour du poids existant
      existingEntry.weight = weight;
    } else {
      updatedWeights.push({
        weight,
        date: formattedDate,
        update_at: new Date(),
      });
    }

    await UserModel.update(id, { weights: updatedWeights });

    return updatedWeights;
  }
}
