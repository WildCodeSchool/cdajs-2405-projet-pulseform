import { Field, InputType } from "type-graphql";
import { Int } from "type-graphql";
import { TagsEnum } from "../entities/Enums";

// Get a tag
@InputType()
export class GetTagByIdInput {
	@Field(() => Int)
	id!: number;
}

// Create a tag
@InputType()
export class AddTagInput {
	@Field(() => TagsEnum)
	name!: TagsEnum;

	@Field(() => Int)
	program_id!: number;
}

// Update a tag
@InputType()
export class UpdateTagInput {
	@Field()
	id!: number;

	@Field(() => TagsEnum)
	name!: TagsEnum;
}
