import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { History } from "../entities/History";

@InputType()
export class HistoryInput {

    @Field((type) => ID)
    id?: number;
  
    @Field((type) => Int)
    user_id: number;

    @Field((type) => Int)
    program_id: number;
  
    @Field((type) => Int, { nullable: true })
    total_kcal_loss?: number;
  
    @Field({ nullable: true })
    start_date?: Date;
  
    @Field({ nullable: true })
    end_date?: Date;

}

@Resolver(History)
export class HistoryMutations {

    @Mutation(_ => History)
    async publishHistory(@Arg("historyData") historyData: HistoryInput): Promise<History> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}