import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { FriendList } from "../entities/FriendList";

@InputType()
export class FriendListInput {

    @Field((type) => ID)
    id?: number;
  
    @Field((type) => Int)
    user_id: number;
  
    @Field((type) => Int)
    friend_id: number;
  
    @Field()
    added: boolean;

    @Field((type) => Date)
    createdAt: Date;

}

@Resolver(FriendList)
export class FriendListMutations {

    @Mutation(_ => FriendList)
    async publishFriendList(@Arg("friendListData") friendListData: FriendListInput): Promise<FriendList> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}