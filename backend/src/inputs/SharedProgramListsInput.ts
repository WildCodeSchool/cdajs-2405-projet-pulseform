import { Field, InputType, Int } from "type-graphql";

// shared programs by user and group
@InputType()
export class GetSharedProgramsByUserAndGroupInput {
	@Field(() => Int)
	user_id!: number;

	@Field(() => Int)
	group_list_id!: number;
}

// programs shared with user
@InputType()
export class GetProgramsSharedWithUserInput {
	@Field(() => Int)
	friend_id!: number;
}

// Share a program
@InputType()
export class ShareProgramInput {
	@Field(() => Int)
	user_id!: number;

	@Field(() => Int)
	friend_id!: number;

	@Field(() => Int)
	program_id!: number;

	@Field(() => Int)
	group_list_id!: number;
}
