import { Arg, Mutation, Resolver } from "type-graphql";
import { History } from "../entities/History";
import AppDataSource from "../AppDataSource";

@Resolver(History)
export class HistoriesMutations {

    // Mutation pour ajouter un historique (un utilisateur commence un programme)
    @Mutation(() => History)
    async addHistory(
        @Arg("user_id") user_id: number,
        @Arg("program_id") program_id: number,
        @Arg("total_kcal_loss") total_kcal_loss: number,
        @Arg("start_date") start_date: Date,
        @Arg("end_date") end_date: Date
    ): Promise<History> {
        // Créer une nouvelle entrée d'historique
        const history = new History(user_id, program_id, total_kcal_loss, start_date, end_date);

        // Sauvegarder l'historique dans la base de données
        return await AppDataSource.manager.save(history);
    }

    // Mutation pour mettre à jour un historique existant
    @Mutation(() => History)
    async updateHistory(
        @Arg("id") id: number,
        @Arg("start_date", { nullable: true }) start_date?: Date,
        @Arg("end_date", { nullable: true }) end_date?: Date
    ): Promise<History> {
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
        return await AppDataSource.manager.save(history);
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
