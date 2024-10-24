import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Exercice } from "../entities/Exercice";
import AppDataSource from "../AppDataSource"

@Resolver(Exercice)
export class ExercicesQueries {

    @Query(type => [Exercice])
    async getAllExercices(): Promise<Exercice[]> {
        const exercices: Exercice[] = await AppDataSource.manager.find(Exercice);
        return exercices;
    }

}