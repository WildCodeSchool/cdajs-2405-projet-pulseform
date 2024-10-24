import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { Program } from "../entities/Program";

@InputType()
export class ProgramInput {

    @Field()
    title!: string;

}

@Resolver(Program)
export class ProgramMutations {

    @Mutation(_ => Program)
    async publishProgram(@Arg("programData") programData: ProgramInput): Promise<Program> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}