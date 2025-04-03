import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class WeightInput {
  @Field(() => Number)
  weight!: number;

  @Field(() => String)
  date!: string;
}

@ObjectType()
export class Weight {
  @Field(() => Number)
  weight!: number;

  @Field(() => String)
  date!: string;

  @Field(() => Date)
  update_at!: Date;
}
