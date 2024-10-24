import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { SharedProgramList } from "../entities/SharedProgramList";

@InputType()
export class SharedProgramListInput {

    @Field((type) => ID)
    id?: number;
  
    @Field((type) => Int)
    user_id: number;
  
    @Field((type) => Int)
    friend_id: number;
  
    @Field((type) => Int)
    program_id: number;
  
    @Field((type) => Int)
    group_list_id: number;

}

@Resolver(SharedProgramList)
export class SharedProgramListMutations {

    @Mutation(_ => SharedProgramList)
    async publishSharedProgramList(@Arg("sharedProgramListData") sharedProgramListData: SharedProgramListInput): Promise<SharedProgramList> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}