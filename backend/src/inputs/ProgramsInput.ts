import { InputType, Field, Int } from "type-graphql";
import { FitnessLevelEnum } from "../entities/Enums";

// Recherche multi critères
@InputType()
export class ProgramFilterInput {
    @Field(() => FitnessLevelEnum, { nullable: true })
    level?: FitnessLevelEnum;

    @Field(() => Int, { nullable: true })
    visibility?: number;

    @Field({ nullable: true })
    name?: string;
}

// Create a program
@InputType()
export class CreateProgramInput {
    @Field()
    name!: string;

    @Field(() => FitnessLevelEnum)
    level!: FitnessLevelEnum;

    @Field(() => Int)
    visibility!: number;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int, { nullable: true })
    total_duration?: number;

    @Field(() => Int, { nullable: true })
    like?: number;

    @Field(() => [Int], { nullable: true })
    exercices?: number[];

    @Field(() => [Int], { nullable: true })
    tags?: number[];
}

// update a program
@InputType()
export class UpdateProgramInput {
    @Field({ nullable: true })
    name?: string;

    @Field(() => FitnessLevelEnum, { nullable: true })
    level?: FitnessLevelEnum;

    @Field(() => Int, { nullable: true })
    visibility?: number;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int, { nullable: true })
    total_duration?: number;

    @Field(() => Int, { nullable: true })
    like?: number;

    @Field(() => [Int], { nullable: true })
    exercices?: number[];

    @Field(() => [Int], { nullable: true })
    tags?: number[];
}
