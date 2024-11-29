import { Arg, Query, Resolver } from "type-graphql";
import { GroupList } from "../entities/GroupList";
import AppDataSource from "../AppDataSource";

@Resolver(GroupList)
export class GroupListsQueries {

    // Récupérer le groupe d'un utilisateur
    @Query(() => [GroupList])
    async getUserGroups(@Arg("user_id") user_id: number): Promise<GroupList[]> {
        return await AppDataSource.manager.find(GroupList, {
            where: { user_id },
        });
    }

    // Récupérer les membres d'un groupe
    @Query(() => [GroupList])
    async getGroupMembers(@Arg("group_Id") group_Id: number): Promise<GroupList[]> {
        return await AppDataSource.manager.find(GroupList, {
            where: { group_Id },
        });
    }
}
