import { Arg, Int, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Group } from "../../entities/Group";

@Resolver(Group)
export class GroupsQueries {
    
    //Récupérer tous les groupes
    @Query(() => [Group])
    async getAllGroups(
        @Arg("limit", () => Int, { nullable: true }) limit = 10,
        @Arg("offset", () => Int, { nullable: true }) offset = 0
    ): Promise<Group[]> {
        return await AppDataSource.manager.find(Group, {
            take: limit,
            skip: offset,
            relations: ["creator", "groupLists"],
        });
    }

    // Récupérer un groupe spécifique
    @Query(() => Group, { nullable: true })
    async getGroupById(@Arg("id") id: number): Promise<Group | null> {
        return await AppDataSource.manager.findOne(Group, { where: { id } });
    }

}