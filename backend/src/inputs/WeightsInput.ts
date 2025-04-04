import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class WeightInput {
  @Field(() => Number)
  weight!: number;

  @Field(() => String)
  month!: string;
}

@ObjectType()
export class Weight {
  @Field(() => Number)
  weight!: number;

  @Field(() => String)
  month!: string;

  @Field(() => Date)
  update_at!: Date;
}
