import { Arg, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Exercise } from "../../entities/Exercise";
import {
  GetExercisesByLevelInput,
  GetExercisesByMuscleInput,
} from "../../inputs/ExercisesInput";

@Resolver(Exercise)
export class ExercisesQueries {
  // Récupérer l'ensemble des exercises
  @Query(() => [Exercise])
  async getAllExercises(): Promise<Exercise[]> {
    return await AppDataSource.manager.find(Exercise, {
      relations: ["programs"],
    });
  }

  // Récupérer les détails d'un exercise
  @Query(() => Exercise, { nullable: true })
  async getExerciseById(@Arg("id") id: number): Promise<Exercise | null> {
    return await AppDataSource.manager.findOne(Exercise, {
      where: { id },
      relations: ["tags"],
    });
  }

  // Récupérer les exercises par groupe musculaire
  @Query(() => [Exercise])
  async getExercisesByMuscle(
    @Arg("data", () => GetExercisesByMuscleInput)
    data: GetExercisesByMuscleInput,
  ): Promise<Exercise[]> {
    const { muscle } = data;
    return await AppDataSource.manager.find(Exercise, {
      where: { muscle },
    });
  }

  // Récupérer les exercises par niveau de fitness
  @Query(() => [Exercise])
  async getExercisesByLevel(
    @Arg("data", () => GetExercisesByLevelInput) data: GetExercisesByLevelInput,
  ): Promise<Exercise[]> {
    const { level } = data;
    return await AppDataSource.manager.find(Exercise, {
      where: { level },
    });
  }
}
