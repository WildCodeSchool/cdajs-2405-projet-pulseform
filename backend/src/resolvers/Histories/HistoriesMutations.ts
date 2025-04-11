import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { History } from "../../entities/History";
import { Program } from "../../entities/Program";
import { User } from "../../entities/User";
import {
  CreateHistoryInput,
  UpdateHistoryInput,
} from "../../inputs/HistoriesInput";

@Resolver(History)
export class HistoriesMutations {
  // Mutation pour ajouter un historique (un utilisateur commence un programme)
  @Mutation(() => History)
  async addHistory(
    @Arg("data", () => CreateHistoryInput) data: CreateHistoryInput,
  ): Promise<History> {
    const {
      user_id,
      program_id,
      total_kcal_loss,
      completed_exercises = 0,
      total_time_spent = 0,
      start_date,
      end_date,
    } = data;

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

    // Créer une nouvelle entrée d'historique

    const history = new History(
      user,
      program,
      total_kcal_loss,
      start_date,
      end_date,
      completed_exercises,
      total_time_spent,
    );

    await history.save();

    // Update user lifetime stats
    user.total_completed_exercises =
      (user.total_completed_exercises || 0) + completed_exercises;

    user.total_time_spent = (user.total_time_spent || 0) + total_time_spent;

    await user.save();

    return history;
  }

  // Mutation pour mettre à jour un historique existant
  @Mutation(() => History)
  async updateHistory(
    @Arg("data", () => UpdateHistoryInput) data: UpdateHistoryInput,
  ): Promise<History> {
    const { id, start_date, end_date } = data;

    // Trouver l'historique existant
    const history = await AppDataSource.manager.findOne(History, {
      where: { id },
    });

    if (!history) {
      throw new Error("History not found");
    }

    // Mettre à jour les champs
    if (start_date) history.start_date = start_date;
    if (end_date) history.end_date = end_date;

    // Sauvegarder l'historique mis à jour
    return await history.save();
  }

  // Mutation pour supprimer un historique
  @Mutation(() => Boolean)
  async deleteHistory(@Arg("id") id: number): Promise<boolean> {
    const history = await AppDataSource.manager.findOne(History, {
      where: { id },
    });

    if (!history) {
      throw new Error("History not found");
    }

    // Supprimer l'historique
    await AppDataSource.manager.remove(History, history);
    return true;
  }
}
