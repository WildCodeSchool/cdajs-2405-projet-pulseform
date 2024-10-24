import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { Tag } from "../entities/Tag";

@InputType()
export class TagInput {

    @Field((type) => ID)
    id?: number;
  
    @Field((type) => Tags)
    name: Tags;
  
    @Field()
    program_id: number;
  
    @Field((type) => [User], { nullable: true })
    users?: User[];

}

@Resolver(Tag)
export class TagMutations {

    @Mutation(_ => Tag)
    async publishTag(@Arg("tagData") tagData: TagInput): Promise<Tag> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}