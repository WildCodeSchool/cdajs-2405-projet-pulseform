import { Arg, Mutation, Resolver,Int } from "type-graphql";
import AppDataSource from "../AppDataSource";
import { Program } from "../entities/Program";
import { FitnessLevel } from "../entities/Enums";
import { Exercice } from "src/entities/Exercice";
import { Tag } from "src/entities/Tag";
import { In } from "typeorm";


@Resolver(Program)
export class ProgramMutations {

    // Mutation pour publier un programme (ajouter ou mettre à jour)
    @Mutation(() => Program)
    async publishProgram(
        @Arg("name") name: string,
        @Arg("level", () => FitnessLevel) level: FitnessLevel,
        @Arg("visibility", () => Int) visibility: number,
        @Arg("description", { nullable: true }) description?: string,
        @Arg("total_duration", { nullable: true }) total_duration?: number,
        @Arg("like", () => Int, { nullable: true }) like?: number,
        @Arg("exercices", () => [String], { nullable: true }) exercices?: number[],
        @Arg("tags", () => [String], { nullable: true }) tags?: number[] 
    ): Promise<Program> {

        // Récupérer les exercices et les tags associés
        const exercicesEntities = exercices ? 
        await AppDataSource.manager.find(Exercice, { where: { id: In(exercices) } }) : [];
        const tagsEntities = tags ? 
        await AppDataSource.manager.find(Tag, { where: { id: In(tags) } }) : [];

        const program = new Program(
            name,
            description || "", 
            total_duration || 0,
            level,
            new Date(),
            visibility === 1,
            like ?? 0,
            exercicesEntities,  // Associer les entités Exercice
            tagsEntities
        );

        // Sauvegarde du programme dans la base de données
        return await AppDataSource.manager.save(program);
    }

    // Mutation pour supprimer un programme
    @Mutation(() => Boolean)
    async deleteProgram(@Arg("id") id: number): Promise<boolean> {
        const program = await AppDataSource.manager.findOne(Program, { where: { id } });

        if (!program) {
            throw new Error("Program not found");
        }

        // Supprimer le programme
        await AppDataSource.manager.remove(Program, program);
        return true;
    }
}