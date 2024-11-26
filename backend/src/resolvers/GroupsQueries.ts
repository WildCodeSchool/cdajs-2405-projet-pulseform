import { Query, Resolver } from "type-graphql";
import AppDataSource from "../AppDataSource";
import { Group } from "../entities/Group";

@Resolver(Group)
export class GroupQueries {
    
    //Récupérer tous les groupes
    @Query(() => [Group])
    async getAllGroups(): Promise<Group[]> {
        return await AppDataSource.manager.find(Group);
    }

    // Récupérer un groupe spécifique
    @Query(() => Group, { nullable: true })
    async getGroupById(@Arg("id") id: number): Promise<Group | null> {
        return await AppDataSource.manager.findOne(Group, { where: { id } });
    }

}