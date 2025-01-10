import { Arg, Query, Resolver } from "type-graphql";
import { LessThanOrEqual, MoreThanOrEqual } from "typeorm";
import AppDataSource from "../../AppDataSource";
import { History } from "../../entities/History";

@Resolver(History)
export class HistoriesQueries {
	// Récupérer l'historique complet des programmes suivis par un utilisateur
	@Query((type) => [History])
	async getHistoryByUserId(
		@Arg("user_id") user_id: number,
	): Promise<History[]> {
		const history: History[] = await AppDataSource.manager.find(History, {
			where: { user_id },
			relations: ["user", "program"],
		});
		return history;
	}

	// Récupérer un historique spécifique basé sur un identifiant
	@Query((type) => History, { nullable: true })
	async getHistoryById(@Arg("id") id: number): Promise<History | null> {
		return await AppDataSource.manager.findOne(History, {
			where: { id },
		});
	}

	// Récupérer l'historique des programmes d'un utilisateur pour un programme donné
	@Query((type) => [History])
	async getHistoryByUserAndProgram(
		@Arg("user_id") user_id: number,
		@Arg("program_id") program_id: number,
	): Promise<History[]> {
		const history: History[] = await AppDataSource.manager.find(History, {
			where: { user_id, program_id },
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
}
