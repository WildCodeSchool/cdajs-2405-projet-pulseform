import { Arg, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { SharedProgramList } from "../../entities/SharedProgramList";
import { GetProgramsSharedWithUserInput, GetSharedProgramsByUserAndGroupInput } from "../../inputs/SharedProgramListsInput";

@Resolver(SharedProgramList)
export class SharedProgramListsQueries {

    // Récupérer les programmes partagés par un utilisateur avec ses amis dans un groupe
    @Query(() => [SharedProgramList])
    async getSharedProgramsByUserAndGroup(
        @Arg("data") data: GetSharedProgramsByUserAndGroupInput
    ): Promise<SharedProgramList[]> {
        const { user_id, group_list_id } = data;
        return await AppDataSource.manager.find(SharedProgramList, {
            where: { user_id, group_list_id },
        });
    }

    // Récupérer tous les programmes partagés avec un utilisateur spécifique
    @Query(() => [SharedProgramList])
    async getProgramsSharedWithUser(
        @Arg("data") data: GetProgramsSharedWithUserInput
    ): Promise<SharedProgramList[]> {
        const { friend_id } = data;
        return await AppDataSource.manager.find(SharedProgramList, {
            where: {
                friend: { id: friend_id },
            },
            relations: ["user", "program", "friend"],
        });
    }
}