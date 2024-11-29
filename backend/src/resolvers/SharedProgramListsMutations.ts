import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../AppDataSource";
import { SharedProgramList } from "../entities/SharedProgramList";

@Resolver(SharedProgramList)
export class SharedProgramListsMutations {

    // Partager un programme avec un ami dans un groupe
    @Mutation(() => SharedProgramList)
    async shareProgramWithFriend(
        @Arg("user_id") user_id: number,
        @Arg("friend_id") friend_id: number,
        @Arg("program_id") program_id: number,
        @Arg("group_list_id") group_list_id: number
    ): Promise<SharedProgramList> {
        // Vérification si le partage existe déjà
        const existingShare = await AppDataSource.manager.findOne(SharedProgramList, {
            where: { user_id, friend_id, program_id, group_list_id },
        });

        if (existingShare) {
            throw new Error("This program is already shared with this friend in this group");
        }

        // Créer l'entrée de partage de programme
        const sharedProgram = new SharedProgramList(user_id, friend_id, program_id, group_list_id);
        return await sharedProgram.save();
    }
}
