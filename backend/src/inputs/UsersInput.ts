import { Field, InputType, Int } from "type-graphql";
import { FitnessLevelEnum, MemberRoleEnum } from "../entities/Enums";
import { WeightInput } from "./WeightsInput";

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

  @Field(() => [WeightInput])
  weights!: WeightInput[];

  @Field(() => Int)
  height!: number;

  @Field()
  created_at!: Date;

  @Field(() => FitnessLevelEnum)
  level!: FitnessLevelEnum;

  @Field(() => MemberRoleEnum)
  role!: MemberRoleEnum;
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

  @Field({ nullable: true })
  gender?: string;

  @Field(() => [WeightInput])
  weights!: WeightInput[];

  @Field()
  height!: number;

  @Field()
  created_at!: Date;

  @Field(() => FitnessLevelEnum)
  level!: FitnessLevelEnum;

  @Field(() => MemberRoleEnum)
  role!: MemberRoleEnum;
}

@InputType()
export class CreateAccountInput {
  @Field()
  email!: string;

  @Field()
  username!: string;

  @Field()
  password!: string;
}
