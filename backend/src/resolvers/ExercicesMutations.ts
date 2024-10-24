import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { Exercice } from "../entities/Exercice";

@InputType()
export class ExerciceInput {

    @Field()
    title!: string;

}

@Resolver(Exercice)
export class ExerciceMutations {

    @Mutation(_ => Exercice)
    async publishExercice(@Arg("exerciceData") exerciceData: ExerciceInput): Promise<Exercice> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}