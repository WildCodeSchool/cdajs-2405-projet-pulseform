import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { FriendList } from "../entities/FriendList";
import AppDataSource from "../AppDataSource"

@Resolver(FriendList)
export class FriendListsQueries {

    @Query(type => [FriendList])
    async getAllFriendLists(): Promise<FriendList[]> {
        const friendLists: FriendList[] = await AppDataSource.manager.find(FriendList);
        return friendLists;
    }

}