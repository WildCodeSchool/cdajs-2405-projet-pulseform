import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { GroupList } from "../entities/GroupList";

@InputType()
export class GroupListInput {

    @Field((type) => ID)
    id?: number;

    @Field({ nullable: true })
    name?: string;
  
    @Field((type) => Int)
    user_id: number;
  
    @Field((type) => Int)
    group_Id: number;
  
    @Field()
    added: boolean;
  
    @Field((type) => Date)
    createdAt: Date;

}

@Resolver(GroupList)
export class GroupListMutations {

    @Mutation(_ => GroupList)
    async publishGroupList(@Arg("groupListData") groupListData: GroupListInput): Promise<GroupList> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}