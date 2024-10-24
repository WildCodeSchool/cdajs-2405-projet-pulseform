import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Program } from "../entities/Program";
import AppDataSource from "../AppDataSource"

@Resolver(Program)
export class ProgramsQueries {

    @Query(type => [Program])
    async getAllPrograms(): Promise<Program[]> {
        const programs: Program[] = await AppDataSource.manager.find(Program);
        return programs;
    }

}