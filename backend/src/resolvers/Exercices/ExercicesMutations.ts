import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Exercice } from "../../entities/Exercice";
import {
	CreateExerciceInput,
	UpdateExerciceInput,
} from "../../inputs/ExercicesInput";

@Resolver(Exercice)
export class ExercicesMutations {
	// Mutation pour créer un nouvel exercice
	@Mutation(() => Exercice)
	async createExercice(
		@Arg("data", () => CreateExerciceInput) data: CreateExerciceInput,
	): Promise<Exercice> {
		const { name, muscle, level, duration, kcal_loss, img_src, description } =
			data;

		// Sauvegarder l'exercice dans la base de données
		const exercice = new Exercice(
			name,
			description || "",
			duration,
			kcal_loss,
			muscle,
			level,
			img_src || "",
		);
		return await exercice.save();
	}

	// Mutation pour mettre à jour un exercice existant
	@Mutation(() => Exercice)
	async updateExercice(
		@Arg("data", () => UpdateExerciceInput) data: UpdateExerciceInput,
	): Promise<Exercice | null> {
		const { id, name, muscle, level, description } = data;
		const exercice = await AppDataSource.manager.findOne(Exercice, {
			where: { id },
		});

		if (!exercice) {
			throw new Error("Exercice not found");
		}

		// Mise à jour des champs de l'exercice
		if (name) exercice.name = name;
		if (muscle) exercice.muscle = muscle;
		if (level) exercice.level = level;
		if (description) exercice.description = description;

		return await AppDataSource.manager.save(exercice);
	}

	// Mutation pour supprimer un exercice
	@Mutation(() => Boolean)
	async deleteExercice(@Arg("id") id: number): Promise<boolean> {
		const exercice = await AppDataSource.manager.findOne(Exercice, {
			where: { id },
		});

		if (!exercice) {
			throw new Error("Exercice not found");
		}

		await AppDataSource.manager.remove(Exercice, exercice);
		return true;
	}
}
