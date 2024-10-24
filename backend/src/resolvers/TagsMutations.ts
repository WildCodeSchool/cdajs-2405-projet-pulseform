import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { Tag } from "../entities/Tag";

@InputType()
export class TagInput {

    @Field()
    title!: string;

}

@Resolver(Tag)
export class TagMutations {

    @Mutation(_ => Tag)
    async publishTag(@Arg("tagData") tagData: TagInput): Promise<Tag> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}