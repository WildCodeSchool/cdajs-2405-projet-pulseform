import { Arg, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { FitnessLevelEnum } from "../../entities/Enums";
import { Program } from "../../entities/Program";
import { ProgramFilterInput } from "../../inputs/ProgramsInput";

@Resolver(Program)
export class ProgramsQueries {
  // Récupérer l'ensemble des programmes
  @Query(() => [Program])
  async getAllPrograms(
    @Arg("filters", () => ProgramFilterInput, { nullable: true })
    filters?: ProgramFilterInput,
  ): Promise<Program[]> {
    const where: Partial<Pick<Program, "level" | "visibility" | "name">> = {};

    if (filters) {
      if (filters.level) where.level = filters.level;
      if (filters.visibility !== 0) where.visibility = filters.visibility;
      if (filters.name) where.name = filters.name;
    }

    return await AppDataSource.manager.find(Program, {
      where,
      relations: ["exercices", "tags"],
    });
  }

  // Récupérer les programmes par niveau
  @Query(() => [Program])
  async getProgramsByLevel(
    @Arg("level", () => FitnessLevelEnum) level: FitnessLevelEnum,
  ): Promise<Program[]> {
    return await AppDataSource.manager.find(Program, {
      where: { level },
      relations: ["exercices", "tags"],
    });
  }

  // Récupérer un programme par id, avec ses exercices
  @Query(() => Program, { nullable: true })
  async getProgramById(@Arg("id") id: number): Promise<Program | null> {
    return await AppDataSource.manager.findOne(Program, {
      where: { id },
      relations: ["tags", "exercices"],
    });
  }

  // Rechercher un programme avec des mots-clés
  @Query(() => [Program])
  async searchPrograms(@Arg("keyword") keyword: string): Promise<Program[]> {
    const programs = await AppDataSource.getRepository(Program)
      .createQueryBuilder("program")
      .leftJoinAndSelect("program.tags", "tags")
      .leftJoinAndSelect("program.exercices", "exercices")
      .where("program.name LIKE :keyword", { keyword: `%${keyword}%` })
      .orWhere("program.description LIKE :keyword", { keyword: `%${keyword}%` })
      .getMany();

    return programs;
  }
}
