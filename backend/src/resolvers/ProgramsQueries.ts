import { Arg, Query, Resolver } from "type-graphql";
import { Program } from "../entities/Program";
import { FitnessLevel } from "../entities/Enums";
import AppDataSource from "../AppDataSource";

@Resolver(Program)
export class ProgramsQueries {

    // Récupérer l'ensemble des programmes
    @Query(type => [Program])
    async getAllPrograms(): Promise<Program[]> {
        const programs: Program[] = await AppDataSource.manager.find(Program);
        return programs;
    }

    // Récupérer les programmes par niveau
    @Query(() => [Program])
    async getProgramsByLevel(
        @Arg("level", () => FitnessLevel) level: FitnessLevel
    ): Promise<Program[]> {
        return await AppDataSource.manager.find(Program, {
            where: { level },
            relations: ["exercices"],
        });
    }

    // Récupérer un programme par id, avec ses exercices
    @Query((type) => Program, { nullable: true })
    async getProgramById(@Arg("id") id: number): Promise<Program | null> {
        return await AppDataSource.manager.findOne(Program, {
            where: { id },
            relations: ["exercices"],
        });
    }

}