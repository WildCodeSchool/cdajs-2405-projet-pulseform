import { Field, InputType, Int } from "type-graphql";
import { FitnessLevelEnum, MuscleGroupEnum } from "../entities/Enums";

// Create exercices
@InputType()
export class CreateExerciceInput {
	@Field()
	name!: string;

	@Field(() => MuscleGroupEnum)
	muscle!: MuscleGroupEnum;

	@Field(() => FitnessLevelEnum)
	level!: FitnessLevelEnum;

	@Field(() => Int)
	duration!: number;

	@Field(() => Int)
	kcal_loss!: number;

	@Field({ nullable: true })
	img_src?: string;

	@Field({ nullable: true })
	description?: string;

	@Field(() => [String], { nullable: true })
	tags?: string[];
}

// Update exercices
@InputType()
export class UpdateExerciceInput {
	@Field(() => Int)
	id!: number;

	@Field({ nullable: true })
	name?: string;

	@Field(() => MuscleGroupEnum, { nullable: true })
	muscle?: MuscleGroupEnum;

	@Field(() => FitnessLevelEnum, { nullable: true })
	level?: FitnessLevelEnum;

	@Field({ nullable: true })
	description?: string;

	@Field(() => [String], { nullable: true })
	tags?: string[];
}

// GetExercicesByMuscleInput
@InputType()
export class GetExercicesByMuscleInput {
	@Field(() => MuscleGroupEnum)
	muscle!: MuscleGroupEnum;
}

// GetExercicesByLevelInput
@InputType()
export class GetExercicesByLevelInput {
	@Field(() => FitnessLevelEnum)
	level!: FitnessLevelEnum;
}
