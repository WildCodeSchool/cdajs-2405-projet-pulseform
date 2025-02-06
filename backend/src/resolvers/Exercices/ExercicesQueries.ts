import { Arg, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Exercice } from "../../entities/Exercice";
import {
	GetExercicesByLevelInput,
	GetExercicesByMuscleInput,
} from "../../inputs/ExercicesInput";

@Resolver(Exercice)
export class ExercicesQueries {
	// Récupérer l'ensemble des exercices
	@Query(() => [Exercice])
	async getAllExercices(): Promise<Exercice[]> {
		return await AppDataSource.manager.find(Exercice);
	}

	// Récupérer les détails d'un exercice
	@Query(() => Exercice, { nullable: true })
	async getExerciceById(@Arg("id") id: number): Promise<Exercice | null> {
		return await AppDataSource.manager.findOne(Exercice, {
			where: { id },
			relations: ["tags"],
		});
	}

	// Récupérer les exercices par groupe musculaire
	@Query(() => [Exercice])
	async getExercicesByMuscle(
		@Arg("data", () => GetExercicesByMuscleInput)
		data: GetExercicesByMuscleInput,
	): Promise<Exercice[]> {
		const { muscle } = data;
		return await AppDataSource.manager.find(Exercice, {
			where: { muscle },
		});
	}

	// Récupérer les exercices par niveau de fitness
	@Query(() => [Exercice])
	async getExercicesByLevel(
		@Arg("data", () => GetExercicesByLevelInput) data: GetExercicesByLevelInput,
	): Promise<Exercice[]> {
		const { level } = data;
		return await AppDataSource.manager.find(Exercice, {
			where: { level },
		});
	}
}
