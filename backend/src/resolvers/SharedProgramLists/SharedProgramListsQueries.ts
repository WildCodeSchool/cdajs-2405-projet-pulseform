import { Arg, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Group } from "../../entities/Group";
import { SharedProgramList } from "../../entities/SharedProgramList";
import { User } from "../../entities/User";
import {
  GetProgramsSharedWithUserInput,
  GetSharedProgramsByUserAndGroupInput,
} from "../../inputs/SharedProgramListsInput";

@Resolver(SharedProgramList)
export class SharedProgramListsQueries {
  // Récupérer les programmes partagés par un utilisateur avec ses amis dans un groupe
  @Query(() => [SharedProgramList])
  async getSharedProgramsByUserAndGroup(
    @Arg("data", () => GetSharedProgramsByUserAndGroupInput)
    data: GetSharedProgramsByUserAndGroupInput,
  ): Promise<SharedProgramList[]> {
    const { user_id, group_list_id } = data;

    const user = await AppDataSource.manager.findOne(User, {
      where: { id: user_id },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const group = await AppDataSource.manager.findOne(Group, {
      where: { id: group_list_id },
    });

    if (!group) {
      throw new Error("Group not found");
    }

    return await AppDataSource.manager.find(SharedProgramList, {
      where: { user: { id: user_id }, group: { id: group_list_id } },
      relations: ["program", "user", "group"],
    });
  }

  // Récupérer tous les programmes partagés avec un utilisateur spécifique
  @Query(() => [SharedProgramList])
  async getProgramsSharedWithUser(
    @Arg("data", () => GetProgramsSharedWithUserInput)
    data: GetProgramsSharedWithUserInput,
  ): Promise<SharedProgramList[]> {
    const { friend_id } = data;

    const friend = await AppDataSource.manager.findOne(User, {
      where: { id: friend_id },
    });

    if (!friend) {
      throw new Error("Friend not found");
    }

    return await AppDataSource.manager.find(SharedProgramList, {
      where: {
        friend: { id: friend_id },
      },
      relations: ["user", "program", "friend"],
    });
  }
}
