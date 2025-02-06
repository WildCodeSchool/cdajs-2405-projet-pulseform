import { Arg, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Group } from "../../entities/Group";
import { GroupList } from "../../entities/GroupList";
import {
	GetGroupMembersInput,
	GetUserGroupsInput,
} from "../../inputs/GroupListsInput";

@Resolver(GroupList)
export class GroupListsQueries {
	// Récupérer tous les groupes d'un utilisateur
	@Query(() => [Group])
	async getUserGroups(
		@Arg("data", () => GetUserGroupsInput) data: GetUserGroupsInput,
	): Promise<Group[]> {
		const { user_id } = data;
		const groupLists = await AppDataSource.manager.find(GroupList, {
			where: { user_id },
			relations: ["group"],
		});

		// Extraire les groupes associés à l'utilisateur
		const groups = groupLists
			.map((groupList) => groupList.group)
			.filter((group): group is Group => group !== undefined);
		return groups;
	}

	// Récupérer les membres d'un groupe
	@Query(() => [GroupList])
	async getGroupMembers(
		@Arg("data", () => GetGroupMembersInput) data: GetGroupMembersInput,
	): Promise<GroupList[]> {
		const { group_id } = data;

		return await AppDataSource.manager.find(GroupList, {
			where: { group: { id: group_id } },
			relations: ["user"],
		});
	}
}
