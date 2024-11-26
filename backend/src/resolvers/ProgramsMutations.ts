import { Arg, Mutation, Resolver, InputType, Field, ID, Int } from "type-graphql";
import { EntityManager } from "typeorm";
import AppDataSource from "../AppDataSource";
import { Program } from "../entities/Program";
import { FitnessLevel } from "../entities/Enums";

@InputType()
export class ProgramInput {
    @Field((type) => ID, { nullable: true })
    id?: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field((type) => Int, { nullable: true })
    total_duration?: number;

    @Field((type) => FitnessLevel)
    level: FitnessLevel;

    @Field((type) => Int)
    visibility: number;

    @Field((type) => Int, { nullable: true })
    like?: number;
}

@Resolver(Program)
export class ProgramMutations {

    // Mutation pour publier un programme (ajouter ou mettre à jour)
    @Mutation(_ => Program)
    async publishProgram(@Arg("programData") programData: ProgramInput): Promise<Program> {
        return AppDataSource.transaction(async (entityManager: EntityManager) => {
            let program: Program;

            if (programData.id) {
                // Si un ID est fourni, on met à jour un programme existant
                program = await entityManager.findOne(Program, { where: { id: programData.id } });

                if (!program) {
                    throw new Error("Program not found");
                }

                // Met à jour les propriétés du programme existant
                program.name = programData.name;
                program.description = programData.description || program.description;  // Valeur par défaut si description est vide
                program.total_duration = programData.total_duration;
                program.level = programData.level;
                program.visibility = programData.visibility;
                program.like = programData.like ?? 0; // Si like est undefined, on met 0
            } else {
                // Si aucun ID n'est fourni, on crée un nouveau programme
                program = new Program();
                program.name = programData.name;
                program.description = programData.description || "";
                program.total_duration = programData.total_duration;
                program.level = programData.level;
                program.visibility = programData.visibility;
                program.like = programData.like ?? 0;
                program.createdAt = new Date(); // Date actuelle pour createdAt
            }

            // Sauvegarde le programme (soit nouveau, soit mis à jour)
            return await entityManager.save(program);
        });
    }
}
