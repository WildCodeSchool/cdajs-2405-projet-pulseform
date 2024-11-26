import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../AppDataSource";
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

    // Ajouter un utilisateur à un groupe
    @Mutation(() => GroupList)
    async addUserToGroup(
        @Arg("input") input: GroupListInput
    ): Promise<GroupList> {
        const { user_id, group_Id } = input;

        // Vérifier si l'utilisateur appartient déjà à ce groupe
        const existingGroupMembership = await AppDataSource.manager.findOne(GroupList, {
            where: { user_id, group_Id },
        });

        if (existingGroupMembership) {
            throw new Error("User is already a member of the group");
        }

        // Ajouter l'utilisateur au groupe (sans l'avoir encore accepté)
        const newGroupMembership = new GroupList(input.name, user_id, group_Id, false, new Date());
        return await newGroupMembership.save();
    }

    // Accepter une demande d'ajout au groupe (confirmer l'adhésion)
    @Mutation(() => Boolean)
    async acceptGroupInvitation(
        @Arg("user_id") user_id: number,
        @Arg("group_Id") group_Id: number
    ): Promise<boolean> {
        const groupMembership = await AppDataSource.manager.findOne(GroupList, {
            where: { user_id, group_Id },
        });

        if (!groupMembership) {
            throw new Error("Group membership not found");
        }

        if (groupMembership.added) {
            throw new Error("User already added to the group");
        }

        groupMembership.added = true;
        await groupMembership.save();
        return true;
    }

    // Supprimer un utilisateur du groupe
    @Mutation(() => Boolean)
    async removeUserFromGroup(
        @Arg("user_id") user_id: number,
        @Arg("group_Id") group_Id: number
    ): Promise<boolean> {
        const groupMembership = await AppDataSource.manager.findOne(GroupList, {
            where: { user_id, group_Id },
        });

        if (!groupMembership) {
            throw new Error("Group membership not found");
        }

        await AppDataSource.manager.remove(GroupList, groupMembership);
        return true;
    }
}
