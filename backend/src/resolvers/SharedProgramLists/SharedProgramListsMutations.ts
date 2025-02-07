import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Group } from "../../entities/Group";
import { Program } from "../../entities/Program";
import { SharedProgramList } from "../../entities/SharedProgramList";
import { User } from "../../entities/User";
import { ShareProgramInput } from "../../inputs/SharedProgramListsInput";

@Resolver(SharedProgramList)
export class SharedProgramListsMutations {
  // Partager un programme avec un ami dans un groupe
  @Mutation(() => SharedProgramList)
  async shareProgramWithFriend(
    @Arg("data", () => ShareProgramInput) data: ShareProgramInput,
  ): Promise<SharedProgramList> {
    const { user_id, friend_id, program_id, group_list_id } = data;

    const user = await AppDataSource.manager.findOne(User, {
      where: { id: user_id },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const friend = await AppDataSource.manager.findOne(User, {
      where: { id: friend_id },
    });

    if (!friend) {
      throw new Error("Friend not found");
    }

    const program = await AppDataSource.manager.findOne(Program, {
      where: { id: program_id },
    });

    if (!program) {
      throw new Error("Program not found");
    }

    const group = await AppDataSource.manager.findOne(Group, {
      where: { id: group_list_id },
    });

    if (!group) {
      throw new Error("Group not found");
    }

    // Vérification si le partage existe déjà
    const existingShare = await AppDataSource.manager.findOne(
      SharedProgramList,
      {
        where: {
          user: { id: user_id },
          friend: { id: friend_id },
          program: { id: program_id },
          group: { id: group_list_id },
        },
      },
    );

    if (existingShare) {
      throw new Error(
        "This program is already shared with this friend in this group",
      );
    }

    // Créer l'entrée de partage de programme
    const sharedProgram = new SharedProgramList(user, program, group, friend);
    return await sharedProgram.save();
  }

  // Annuler le partage d'un programme
  @Mutation(() => Boolean)
  async unshareProgram(@Arg("id") id: number): Promise<boolean> {
    const sharedProgram = await AppDataSource.manager.findOne(
      SharedProgramList,
      { where: { id } },
    );

    if (!sharedProgram) {
      throw new Error("Shared program entry not found");
    }

    await AppDataSource.manager.remove(SharedProgramList, sharedProgram);
    return true;
  }
}
