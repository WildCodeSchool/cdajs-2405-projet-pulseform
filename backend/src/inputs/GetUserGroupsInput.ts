import { InputType, Field, Int } from "type-graphql";

@InputType()
export class GetUserGroupsInput {
    @Field(() => Int)
    user_id: number | undefined;
}
