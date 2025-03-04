import { GraphQLError } from "graphql";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource"; // Importe ton AppDataSource pour accéder à la gestion des entités
import { User } from "../../entities/User";
import type { MyContext } from "../../types/context";

@Resolver(User)
export class UsersQueries {
  // Récupérer tous les utilisateurs avec leurs tags
  @Query(() => [User])
  async getAllUsers(@Ctx() context: MyContext): Promise<User[]> {
    if (!context.user) {
      throw new Error("Unauthorized");
    }

    return AppDataSource.manager.find(User, {
      relations: ["tags"],
    });
  }

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

    const user = await AppDataSource.manager.findOne(User, {
      where: { id },
      relations: ["tags"],
    });

    return user;
  }
}
