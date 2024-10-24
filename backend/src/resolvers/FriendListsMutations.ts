import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { FriendList } from "../entities/FriendList";

@InputType()
export class FriendListInput {

    @Field()
    title!: string;

}

@Resolver(FriendList)
export class FriendListMutations {

    @Mutation(_ => FriendList)
    async publishFriendList(@Arg("friendListData") friendListData: FriendListInput): Promise<FriendList> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}