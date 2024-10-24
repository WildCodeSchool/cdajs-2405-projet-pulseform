import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { GroupList } from "../entities/GroupList";
import AppDataSource from "../AppDataSource"

@Resolver(GroupList)
export class GroupListsQueries {

    @Query(type => [GroupList])
    async getAllGroupLists(): Promise<GroupList[]> {
        const groupLists: GroupList[] = await AppDataSource.manager.find(GroupList);
        return groupLists;
    }

}