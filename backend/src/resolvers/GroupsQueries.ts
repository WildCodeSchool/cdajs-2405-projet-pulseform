import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Group } from "../entities/Group";
import AppDataSource from "../AppDataSource"

@Resolver(Group)
export class GroupsQueries {

    @Query(type => [Group])
    async getAllGroups(): Promise<Group[]> {
        const groups: Group[] = await AppDataSource.manager.find(Group);
        return groups;
    }

}