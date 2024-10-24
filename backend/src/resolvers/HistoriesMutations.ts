import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { History } from "../entities/History";

@InputType()
export class HistoryInput {

    @Field()
    title!: string;

}

@Resolver(History)
export class HistoryMutations {

    @Mutation(_ => History)
    async publishHistory(@Arg("historyData") historyData: HistoryInput): Promise<History> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}