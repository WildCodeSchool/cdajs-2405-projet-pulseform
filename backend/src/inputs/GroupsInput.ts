import { Field, InputType } from "type-graphql";

// Create group
@InputType()
export class CreateGroupInput {
	@Field()
	name!: string;

	@Field()
	create_by!: number;

	@Field()
	createdAt!: Date;
}

// update group
@InputType()
export class UpdateGroupInput {
	@Field()
	id!: number;

	@Field()
	name!: string;
}
