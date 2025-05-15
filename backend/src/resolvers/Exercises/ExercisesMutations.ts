import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Exercise } from "../../entities/Exercise";
import {
  CreateExerciseInput,
  UpdateExerciseInput,
} from "../../inputs/ExercisesInput";

@Resolver(Exercise)
export class ExercisesMutations {
  // Mutation pour créer un nouvel exercise
  @Mutation(() => Exercise)
  async createExercise(
    @Arg("data", () => CreateExerciseInput) data: CreateExerciseInput,
  ): Promise<Exercise> {
    const { name, muscle, level, duration, kcal_loss, img_src, description } =
      data;

    // Sauvegarder l'exercise dans la base de données
    const exercise = new Exercise(
      name,
      description || "",
      duration,
      kcal_loss,
      muscle,
      level,
      img_src || "",
    );
    return await exercise.save();
  }

  // Mutation pour mettre à jour un exercise existant
  @Mutation(() => Exercise)
  async updateExercise(
    @Arg("data", () => UpdateExerciseInput) data: UpdateExerciseInput,
  ): Promise<Exercise | null> {
    const { id, name, muscle, level, description } = data;
    const exercise = await AppDataSource.manager.findOne(Exercise, {
      where: { id },
    });

    if (!exercise) {
      throw new Error("Exercise not found");
    }

    // Mise à jour des champs de l'exercise
    if (name) exercise.name = name;
    if (muscle) exercise.muscle = muscle;
    if (level) exercise.level = level;
    if (description) exercise.description = description;

    return await AppDataSource.manager.save(exercise);
  }

  // Mutation pour supprimer un exercise
  @Mutation(() => Boolean)
  async deleteExercise(@Arg("id") id: number): Promise<boolean> {
    const exercise = await AppDataSource.manager.findOne(Exercise, {
      where: { id },
    });

    if (!exercise) {
      throw new Error("Exercise not found");
    }

    await AppDataSource.manager.remove(Exercise, exercise);
    return true;
  }
}
