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

  @Field(() => Date, { nullable: true })
  update_at?: Date;
}
