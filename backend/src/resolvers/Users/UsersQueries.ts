import { GraphQLError } from "graphql";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { User } from "../../entities/User";
import { Weight } from "../../inputs/WeightsInput";
import type { MyContext } from "../../types/context";

@Resolver(User)
export class UsersQueries {
  // Récupérer tous les utilisateurs
  @Query(() => [User])
  async getAllUsers(@Ctx() context: MyContext): Promise<User[]> {
    if (!context.user) {
      throw new Error("Unauthorized");
    }
    return context.models.User.getAll();
  }

  // Récupérer les informations d'un utilisateur
  @Query(() => User, { nullable: true })
  async getUserById(
    @Arg("id") id: number,
    @Ctx() context: MyContext,
  ): Promise<User | null> {
    if (!context.user) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }
    return context.models.User.getById(id);
  }

  // Récupérer l'utilisateur connecté (me)
  @Query(() => User, { nullable: true })
  async me(@Ctx() context: MyContext): Promise<User | null> {
    return context.user ?? null;
  }

  // Récupérer le poid d'un utilisateur
  @Query(() => [Weight])
  async getWeightByUserId(
    @Arg("id") id: number,
    @Ctx() context: MyContext,
  ): Promise<Weight[]> {
    // Le type de retour est un tableau de poids
    if (!context.user) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    // Appel au modèle pour récupérer les poids d'un utilisateur
    const userWeights = await context.models.User.getWeightByUserId(id);

    // Assurez-vous de mapper les données dans le bon format
    return userWeights.map(
      (weightData: { weight: number; month: string; update_at: Date }) => ({
        weight: weightData.weight,
        month: weightData.month,
        update_at: weightData.update_at,
      }),
    );
  }
}
