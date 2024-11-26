import { Arg, Query, Resolver } from "type-graphql";
import AppDataSource from "../AppDataSource";
import { SharedProgramList } from "../entities/SharedProgramList";

@Resolver(SharedProgramList)
export class SharedProgramListQueries {

    // Récupérer les programmes partagés par un utilisateur avec ses amis dans un groupe
    @Query(() => [SharedProgramList])
    async getSharedProgramsByUserAndGroup(
        @Arg("user_id") user_id: number,
        @Arg("group_list_id") group_list_id: number
    ): Promise<SharedProgramList[]> {
        return await AppDataSource.manager.find(SharedProgramList, {
            where: { user_id, group_list_id },
        });
    }
}