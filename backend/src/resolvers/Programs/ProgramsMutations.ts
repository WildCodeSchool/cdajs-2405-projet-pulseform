import { Arg, Mutation, Resolver } from "type-graphql";
import { In } from "typeorm";
import AppDataSource from "../../AppDataSource";
import { Exercise } from "../../entities/Exercise";
import { Program } from "../../entities/Program";
import { Tag } from "../../entities/Tag";
import {
  CreateProgramInput,
  ProgramFilterInput,
  UpdateProgramInput,
} from "../../inputs/ProgramsInput";

@Resolver(Program)
export class ProgramsMutations {
  // 🟢 Mutation pour ajouter un programme
  @Mutation(() => Program)
  async addProgram(
    @Arg("data", () => CreateProgramInput) data: CreateProgramInput,
  ): Promise<Program> {
    const {
      name,
      level,
      visibility,
      description,
      total_duration,
      like,
      exercises,
      tags,
    } = data;

    // 🔍 Récupérer les exercises et les tags associés
    const exercisesEntities = exercises
      ? await AppDataSource.manager.find(Exercise, {
          where: { id: In(exercises) },
        })
      : [];
    const tagsEntities = tags
      ? await AppDataSource.manager.find(Tag, { where: { id: In(tags) } })
      : [];

    // ✅ Sauvegarde du programme dans la base de données
    const program = new Program(
      name,
      description || "",
      total_duration || 0,
      level,
      new Date(),
      visibility,
      like ?? 0,
      exercisesEntities,
      tagsEntities,
    );
    return await program.save();
  }

  // 🟡 Mutation pour modifier un programme
  @Mutation(() => Program)
  async updateProgram(
    @Arg("id") id: number,
    @Arg("data", () => UpdateProgramInput) data: UpdateProgramInput,
  ): Promise<Program | null> {
    // 🔍 Trouver le programme existant
    const program = await AppDataSource.manager.findOne(Program, {
      where: { id },
    });
    if (!program) {
      return null;
    }

    // ✅ Mettre à jour uniquement les champs fournis
    if (data.name !== undefined) program.name = data.name;
    if (data.level !== undefined) program.level = data.level;
    if (data.visibility !== undefined) program.visibility = data.visibility; // ⬅️ `visibility` reste un `Int`
    if (data.description !== undefined) program.description = data.description;
    if (data.total_duration !== undefined)
      program.total_duration = data.total_duration;
    if (data.like !== undefined) program.like = data.like;

    // 🔍 Récupérer et associer les nouvelles entités Exercise et Tag
    if (data.exercises) {
      const exercisesEntities = await AppDataSource.manager.find(Exercise, {
        where: { id: In(data.exercises) },
      });
      program.exercises = exercisesEntities;
    }
    if (data.tags) {
      const tagsEntities = await AppDataSource.manager.find(Tag, {
        where: { id: In(data.tags) },
      });
      program.tags = tagsEntities;
    }

    return await AppDataSource.manager.save(program);
  }

  // 🔴 Mutation pour supprimer un programme
  @Mutation(() => Boolean)
  async deleteProgram(@Arg("id") id: number): Promise<boolean> {
    const program = await AppDataSource.manager.findOne(Program, {
      where: { id },
    });

    if (!program) {
      throw new Error("Program not found"); // Gestion d'erreur si le programme n'existe pas
    }

    // 🚀 Suppression du programme
    await AppDataSource.manager.remove(Program, program);
    return true;
  }

  // 🔍 Mutation pour rechercher des programmes avec filtres
  @Mutation(() => [Program])
  async filterPrograms(
    @Arg("filters", () => ProgramFilterInput, { nullable: true })
    filters: ProgramFilterInput,
  ): Promise<Program[]> {
    const queryBuilder = AppDataSource.manager.createQueryBuilder(
      Program,
      "program",
    );

    // Appliquer les filtres seulement s'ils sont définis
    if (filters?.level) {
      queryBuilder.andWhere("program.level = :level", { level: filters.level });
    }
    if (filters?.visibility !== undefined) {
      queryBuilder.andWhere("program.visibility = :visibility", {
        visibility: filters.visibility,
      });
    }
    if (filters?.name) {
      queryBuilder.andWhere("program.name LIKE :name", {
        name: `%${filters.name}%`, // 🔎 Recherche partielle sur le nom
      });
    }

    return await queryBuilder.getMany(); // 🔥 Retourner les programmes filtrés
  }
}
