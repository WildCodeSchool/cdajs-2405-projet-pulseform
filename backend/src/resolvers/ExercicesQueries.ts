import { Arg, Query, Resolver } from "type-graphql";
import { Exercice } from "../entities/Exercice";
import { MuscleGroup, FitnessLevel } from "../entities/Enums";
import AppDataSource from "../AppDataSource";

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
        @Arg("muscle", () => MuscleGroup) muscle: MuscleGroup
    ): Promise<Exercice[]> {
        return await AppDataSource.manager.find(Exercice, {
            where: { muscle },
        });
    }

    // Récupérer les exercices par niveau de fitness
    @Query(() => [Exercice])
    async getExercicesByLevel(
        @Arg("level", () => FitnessLevel) level: FitnessLevel
    ): Promise<Exercice[]> {
        return await AppDataSource.manager.find(Exercice, {
            where: { level },
        });
    }
}