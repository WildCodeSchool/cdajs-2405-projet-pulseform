import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { Exercice } from "../entities/Exercice";

@InputType()
export class ExerciceInput {

    @Field((type) => ID)
    id?: number;
  
    @Field()
    name: string;
  
    @Field({ nullable: true })
    description?: string;
  
    @Field((type) => Int)
    duration: number;
  
    @Field((type) => Int)
    kcal_loss: number;
  
    @Field((type) => MuscleGroup)
    muscle: MuscleGroup;
  
    @Field((type) => FitnessLevel)
    level: FitnessLevel;
  
    @Field({ nullable: true })
    img_src: string;
}

@Resolver(Exercice)
export class ExerciceMutations {

    @Mutation(_ => Exercice)
    async publishExercice(@Arg("exerciceData") exerciceData: ExerciceInput): Promise<Exercice> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}