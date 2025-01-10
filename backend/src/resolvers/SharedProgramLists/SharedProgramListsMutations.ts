import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { SharedProgramList } from "../../entities/SharedProgramList";
import type { ShareProgramInput } from "../../inputs/SharedProgramListsInput";

@Resolver(SharedProgramList)
export class SharedProgramListsMutations {
	// Partager un programme avec un ami dans un groupe
	@Mutation(() => SharedProgramList)
	async shareProgramWithFriend(
		@Arg("data") data: ShareProgramInput,
	): Promise<SharedProgramList> {
		const { user_id, friend_id, program_id, group_list_id } = data;

		// Vérification si le partage existe déjà
		const existingShare = await AppDataSource.manager.findOne(
			SharedProgramList,
			{
				where: { user_id, program_id, group_list_id },
			},
		);

		if (existingShare) {
			throw new Error(
				"This program is already shared with this friend in this group",
			);
		}

		// Créer l'entrée de partage de programme
		const sharedProgram = new SharedProgramList(user_id, friend_id, program_id);
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
