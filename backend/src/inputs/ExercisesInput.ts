import { Field, InputType, Int } from "type-graphql";
import { FitnessLevelEnum, MuscleGroupEnum } from "../entities/Enums";

// Create exercises
@InputType()
export class CreateExerciseInput {
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

// Update exercises
@InputType()
export class UpdateExerciseInput {
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

// GetExercisesByMuscleInput
@InputType()
export class GetExercisesByMuscleInput {
  @Field(() => MuscleGroupEnum)
  muscle!: MuscleGroupEnum;
}

// GetExercisesByLevelInput
@InputType()
export class GetExercisesByLevelInput {
  @Field(() => FitnessLevelEnum)
  level!: FitnessLevelEnum;
}
