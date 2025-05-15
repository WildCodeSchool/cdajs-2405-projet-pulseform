import { Field, InputType, Int } from "type-graphql";

// Create history
@InputType()
export class CreateHistoryInput {
  @Field()
  user_id!: number;

  @Field()
  program_id!: number;

  @Field(() => Int, { nullable: true })
  total_kcal_loss?: number | null;

  @Field({ nullable: true })
  completed_exercises?: number;

  @Field({ nullable: true })
  total_time_spent?: number;

  @Field()
  start_date!: Date;

  @Field()
  end_date!: Date;
}

// Update history
@InputType()
export class UpdateHistoryInput {
  @Field()
  id!: number;

  @Field({ nullable: true })
  start_date?: Date;

  @Field({ nullable: true })
  end_date?: Date;
}
