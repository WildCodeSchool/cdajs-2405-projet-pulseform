import { Arg, Mutation, Resolver } from "type-graphql";
import { In } from "typeorm";
import AppDataSource from "../../AppDataSource";
import { Exercice } from "../../entities/Exercice";
import { Program } from "../../entities/Program";
import { Tag } from "../../entities/Tag";
import type {
	CreateProgramInput,
	UpdateProgramInput,
} from "../../inputs/ProgramsInput";

@Resolver(Program)
export class ProgramsMutations {
	// Mutation pour ajouter un programme
	@Mutation(() => Program)
	async addProgram(@Arg("data") data: CreateProgramInput): Promise<Program> {
		const {
			name,
			level,
			visibility,
			description,
			total_duration,
			like,
			exercices,
			tags,
		} = data;

		// Récupérer les exercices et les tags associés
		const exercicesEntities = exercices
			? await AppDataSource.manager.find(Exercice, {
					where: { id: In(exercices) },
				})
			: [];
		const tagsEntities = tags
			? await AppDataSource.manager.find(Tag, { where: { id: In(tags) } })
			: [];

		// Sauvegarde du programme dans la base de données
		const program = new Program(
			name,
			description || "",
			total_duration || 0,
			level,
			new Date(),
			visibility === 1,
			like ?? 0,
			exercicesEntities,
			tagsEntities,
		);
		return await program.save();
	}

	// Mutation pour modifier un programme
	@Mutation(() => Program)
	async updateProgram(
		@Arg("id") id: number,
		@Arg("data") data: UpdateProgramInput,
	): Promise<Program | null> {
		// Trouver le programme existant
		const program = await AppDataSource.manager.findOne(Program, {
			where: { id },
		});
		if (!program) {
			return null;
		}

		// Mettre à jour les propriétés du programme si elles sont fournies
		if (data.name) program.name = data.name;
		if (data.level) program.level = data.level;
		if (data.visibility !== undefined)
			program.visibility = data.visibility === 1;
		if (data.description !== undefined) program.description = data.description;
		if (data.total_duration !== undefined)
			program.total_duration = data.total_duration;
		if (data.like !== undefined) program.like = data.like;

		// Récupérer et associer les entités Exercice et Tag
		if (data.exercices) {
			const exercicesEntities = await AppDataSource.manager.find(Exercice, {
				where: { id: In(data.exercices) },
			});
			program.exercices = exercicesEntities;
		}
		if (data.tags) {
			const tagsEntities = await AppDataSource.manager.find(Tag, {
				where: { id: In(data.tags) },
			});
			program.tags = tagsEntities;
		}

		// Sauvegarder les modifications dans la base de données
		return await AppDataSource.manager.save(program);
	}

	// Mutation pour supprimer un programme
	@Mutation(() => Boolean)
	async deleteProgram(@Arg("id") id: number): Promise<boolean> {
		const program = await AppDataSource.manager.findOne(Program, {
			where: { id },
		});

		if (!program) {
			throw new Error("Program not found");
		}

		// Supprimer le programme
		await AppDataSource.manager.remove(Program, program);
		return true;
	}
}
