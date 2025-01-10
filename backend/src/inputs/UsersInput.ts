import { Field, InputType, Int } from "type-graphql";
import { FitnessLevelEnum, MemberRoleEnum } from "../entities/Enums";

// Create a user
@InputType()
export class CreateUserInput {
	@Field()
	username!: string;

	@Field()
	description!: string;

	@Field()
	email!: string;

	@Field()
	password!: string;

	@Field()
	image!: string;

	@Field()
	birthday!: Date;

	@Field()
	gender!: string;

	@Field(() => Int)
	weight!: number;

	@Field(() => Int)
	height!: number;

	@Field()
	createdAt!: Date;

	@Field(() => MemberRoleEnum)
	role!: MemberRoleEnum;

	@Field(() => FitnessLevelEnum)
	level!: FitnessLevelEnum;
}

// Update a user
@InputType()
export class UpdateUserInput {
	@Field()
	id!: number;

	@Field()
	username!: string;

	@Field()
	description!: string;

	@Field()
	email!: string;

	@Field()
	password!: string;

	@Field()
	image!: string;

	@Field()
	birthday!: Date;

	@Field()
	gender!: string;

	@Field()
	weight!: number;

	@Field()
	height!: number;

	@Field()
	createdAt!: Date;

	@Field(() => MemberRoleEnum)
	role!: MemberRoleEnum;

	@Field(() => FitnessLevelEnum)
	level!: FitnessLevelEnum;
}
