import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../AppDataSource";
import { Group } from "../entities/Group";
import { User } from "../entities/User";

@Resolver(Group)
export class GroupsMutations {
    
    // Créer un groupe
    @Mutation(() => Group)
    async createGroup(
        @Arg("name") name: string,
        @Arg("create_by") create_by: number,
        @Arg("createdAt") createdAt: Date,
        @Arg("creator") creator: User
    ): Promise<Group> {
        const newGroup = new Group(name, create_by, createdAt, creator);
        return await newGroup.save();
    }

    // Mettre à jour un groupe
    @Mutation(() => Group)
    async updateGroupName(
        @Arg("id") id: number,
        @Arg("name") name: string
    ): Promise<Group> {
        const group = await AppDataSource.manager.findOne(Group, { where: { id } });

        if (!group) {
            throw new Error("Group not found");
        }

        group.name = name;
        return await group.save();
    }
}