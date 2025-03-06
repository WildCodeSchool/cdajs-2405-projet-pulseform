import { Field, ObjectType } from "type-graphql";
import { User } from "../entities/User";

@ObjectType()
export class AuthPayload {
  @Field()
  token!: string;

  @Field(() => User)
  user!: User;
}
