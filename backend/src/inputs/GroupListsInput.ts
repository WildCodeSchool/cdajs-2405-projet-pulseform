import { Field, ID, InputType, Int } from "type-graphql";

// Pour ajouter un utilisateur à un groupe
@InputType()
export class GroupListsInput {
	@Field((type) => ID)
	id?: number;

	@Field({ nullable: true })
	name!: string;

	@Field((type) => Int)
	user_id!: number;

	@Field((type) => Int)
	group_id!: number;

	@Field()
	user_accept!: boolean;
}

// Pour récupérer les groupes d'un utilisateur
@InputType()
export class GetUserGroupsInput {
	@Field(() => Int)
	user_id!: number;
}

// Pour récupérer les membres d'un groupe
@InputType()
export class GetGroupMembersInput {
	@Field(() => Int)
	group_id!: number;
}
