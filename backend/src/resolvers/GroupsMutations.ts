import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { Group } from "../entities/Group";

@InputType()
export class GroupInput {

    @Field()
    title!: string;

}

@Resolver(Group)
export class GroupMutations {

    @Mutation(_ => Group)
    async publishGroup(@Arg("groupData") groupData: GroupInput): Promise<Group> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}