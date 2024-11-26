import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../AppDataSource";
import { Exercice } from "../entities/Exercice";
import { Tag } from "../entities/Tag";
import { FitnessLevel, MuscleGroup } from "../entities/Enums";

@Resolver(Exercice)
export class ExercicesMutations {

    // Mutation pour créer un nouvel exercice
    @Mutation(() => Exercice)
    async createExercice(
        @Arg("name") name: string,
        @Arg("muscle") muscle: MuscleGroup,
        @Arg("level", () => FitnessLevel) level: FitnessLevel,
        @Arg("description", { nullable: true }) description?: string,
        @Arg("tags", () => [String], { nullable: true }) tags?: string[]
    ): Promise<Exercice> {
        const exercice = new Exercice();
        exercice.name = name;
        exercice.muscle = muscle;
        exercice.level = level;
        exercice.description = description || "";
        
        // Sauvegarder l'exercice dans la base de données
        const savedExercice = await AppDataSource.manager.save(exercice);

        // Ajout des tags (si fournis)
        if (tags && tags.length > 0) {
            const tagEntities = await AppDataSource.manager.findByIds(Tag, tags);
            savedExercice.tags = tagEntities;
            await AppDataSource.manager.save(savedExercice);
        }

        return savedExercice;
    }

    // Mutation pour mettre à jour un exercice existant
    @Mutation(() => Exercice)
    async updateExercice(
        @Arg("id") id: number,
        @Arg("name", { nullable: true }) name?: string,
        @Arg("muscle", () => MuscleGroup, { nullable: true }) muscle?: MuscleGroup,
        @Arg("level", () => FitnessLevel, { nullable: true }) level?: FitnessLevel,
        @Arg("description", { nullable: true }) description?: string,
        @Arg("tags", () => [String], { nullable: true }) tags?: string[]
    ): Promise<Exercice | null> {
        const exercice = await AppDataSource.manager.findOne(Exercice, { where: { id } });

        if (!exercice) {
            throw new Error("Exercice not found");
        }

        // Mise à jour des champs de l'exercice
        if (name) exercice.name = name;
        if (muscle) exercice.muscle = muscle;
        if (level) exercice.level = level;
        if (description) exercice.description = description;

        // Mise à jour des tags (si fournis)
        if (tags && tags.length > 0) {
            const tagEntities = await AppDataSource.manager.findByIds(Tag, tags);
            exercice.tags = tagEntities;
        }

        return await AppDataSource.manager.save(exercice);
    }

    // Mutation pour supprimer un exercice
    @Mutation(() => Boolean)
    async deleteExercice(@Arg("id") id: number): Promise<boolean> {
        const exercice = await AppDataSource.manager.findOne(Exercice, { where: { id } });

        if (!exercice) {
            throw new Error("Exercice not found");
        }

        await AppDataSource.manager.remove(Exercice, exercice);
        return true;
    }
}
