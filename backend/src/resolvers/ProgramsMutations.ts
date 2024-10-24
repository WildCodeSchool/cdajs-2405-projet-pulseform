import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import AppDataSource from "../AppDataSource"
import { Program } from "../entities/Program";

@InputType()
export class ProgramInput {

    @Field((type) => ID)
    id?: number;
  
    @Field()
    name: string;
  
    @Field({ nullable: true })
    description?: string;
  
    @Field((type) => Int, { nullable: true })
    total_duration?: number;
  
    @Field((type) => FitnessLevel)
    level: FitnessLevel;
  
    @Field((type) => Date)
    createdAt: Date;
  
    @Field((type) => Int)
    visibility: number;
  
    @Field((type) => Int, { nullable: true })
    like?: number;

}

@Resolver(Program)
export class ProgramMutations {

    @Mutation(_ => Program)
    async publishProgram(@Arg("programData") programData: ProgramInput): Promise<Program> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {

           
        })
    }

}