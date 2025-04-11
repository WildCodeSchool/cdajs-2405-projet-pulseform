import { Arg, Query, Resolver } from "type-graphql";
import { LessThanOrEqual, MoreThanOrEqual } from "typeorm";
import AppDataSource from "../../AppDataSource";
import { History } from "../../entities/History";
import { Program } from "../../entities/Program";
import { User } from "../../entities/User";

@Resolver(History)
export class HistoriesQueries {
  // Récupérer l'historique complet des programmes suivis par un utilisateur
  @Query(() => [History])
  async getHistoryByUserId(
    @Arg("user_id") user_id: number,
  ): Promise<History[]> {
    const user = await AppDataSource.manager.findOne(User, {
      where: { id: user_id },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const history: History[] = await AppDataSource.manager.find(History, {
      where: { user: { id: user_id } },
      relations: ["user", "program", "program.tags"],
    });

    if (!history.length) {
      throw new Error("User not history");
    }

    return history.filter((h) => h.program !== null);
  }

  // Récupérer un historique spécifique basé sur un identifiant
  @Query(() => History, { nullable: true })
  async getHistoryById(@Arg("id") id: number): Promise<History | null> {
    return await AppDataSource.manager.findOne(History, {
      where: { id },
    });
  }

  // Récupérer l'historique des programmes d'un utilisateur pour un programme donné
  @Query(() => [History])
  async getHistoryByUserAndProgram(
    @Arg("user_id") user_id: number,
    @Arg("program_id") program_id: number,
  ): Promise<History[]> {
    const user = await AppDataSource.manager.findOne(User, {
      where: { id: user_id },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const program = await AppDataSource.manager.findOne(Program, {
      where: { id: program_id },
    });

    if (!program) {
      throw new Error("Program not found");
    }

    const history: History[] = await AppDataSource.manager.find(History, {
      where: { user: { id: user_id }, program: { id: program_id } },
    });
    return history;
  }

  // Récupérer tous les historiques dans un intervalle de dates
  @Query(() => [History])
  async getHistoryByDateRange(
    @Arg("start_date") start_date: Date,
    @Arg("end_date") end_date: Date,
  ): Promise<History[]> {
    const history = await AppDataSource.manager.find(History, {
      where: {
        start_date: MoreThanOrEqual(start_date),
        end_date: LessThanOrEqual(end_date),
      },
    });
    return history;
  }

  // Récupérer tous les historiques d'un User dans un intervalle de dates
  @Query(() => [History])
  async getUserHistoryByDateRange(
    @Arg("user_id") user_id: number,
    @Arg("start_date") start_date: Date,
    @Arg("end_date") end_date: Date,
  ): Promise<History[]> {
    const user = await AppDataSource.manager.findOne(User, {
      where: { id: user_id },
    });
    if (!user) {
      throw new Error("User not found");
    }

    const histories = await AppDataSource.manager.find(History, {
      where: {
        user: { id: user_id },
        start_date: MoreThanOrEqual(start_date),
        end_date: LessThanOrEqual(end_date),
      },
      relations: ["user", "program"],
    });
    return histories;
  }
}
