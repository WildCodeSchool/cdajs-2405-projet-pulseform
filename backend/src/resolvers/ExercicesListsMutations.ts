import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { ExerciceList } from "../entities/ExerciceList";

@InputType()
export class ExerciceListInput {

  @Field((type) => ID)
  id?: number;

  @Field((type) => Int)
  program_id: number;

  @Field((type) => Int)
  exercice_id: number;


}

@Resolver(ExerciceList)
export class ExerciceListMutations {

    @Mutation(_ => ExerciceList)
    async publishExerciceList(@Arg("exerciceListData") exerciceListData: ExerciceListInput): Promise<ExerciceList> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}