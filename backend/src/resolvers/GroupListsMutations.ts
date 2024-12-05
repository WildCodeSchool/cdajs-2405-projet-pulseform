import { Arg, Field, ID, InputType, Int, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../AppDataSource";
import { GroupList } from "../entities/GroupList";
import { User } from "../entities/User";
import { Group } from "../entities/Group";

@InputType()
export class GroupListInput {

    @Field((type) => ID)
    id?: number;

    @Field({ nullable: true })
    name!: number;
  
    @Field((type) => Int)
    user_id!: number;
  
    @Field((type) => Int)
    group_id!: number;
  
    @Field()
    user_accept!: boolean;
  
    @Field((type) => Date)
    createdAt!: number;

}

@Resolver(GroupList)
export class GroupListsMutations {

    // Ajouter un utilisateur à un groupe
    @Mutation(() => GroupList)
    async addUserToGroup(
        @Arg("input") input: GroupListInput
    ): Promise<GroupList> {
        const { user_id, group_id, name } = input;

        // Vérifier si l'utilisateur existe
        const user = await AppDataSource.manager.findOne(User, { where: { id: user_id } });
        if (!user) {
        throw new Error("User not found");
        }

        // Vérifier si le groupe existe
        const group = await AppDataSource.manager.findOne(Group, { where: { id: group_id } });
        if (!group) {
        throw new Error("Group not found");
        }

        // Vérifier si l'utilisateur appartient déjà au groupe
        const existingGroupMembership = await AppDataSource.manager.findOne(GroupList, {
        where: { user, group }
        });

        if (existingGroupMembership) {
        throw new Error("User is already a member of the group");
        }

        // Créer une nouvelle instance de GroupList en utilisant le constructeur personnalisé
        const newGroupMembership = new GroupList(
        //name,
        user_id,
        group_id,
        false,
        new Date()
        );

        // Sauvegarder la relation dans la base de données
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

        if (groupMembership.user_accept) {
            throw new Error("User already added to the group");
        }

        groupMembership.user_accept = true;
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
