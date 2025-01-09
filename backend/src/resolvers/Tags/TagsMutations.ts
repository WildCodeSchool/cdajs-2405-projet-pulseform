import { Arg, Mutation, Resolver } from "type-graphql";
import { Tag } from "../../entities/Tag";
import AppDataSource from "../../AppDataSource";
import { Program } from "../../entities/Program";
import { In } from "typeorm";
import { AddTagInput, UpdateTagInput } from "../../inputs/TagsInput";

@Resolver(Tag)
export class TagsMutations {

    // Mutation pour ajouter un tag
    @Mutation(() => Tag)
    async addTag(
        @Arg("data") data: AddTagInput
    ): Promise<Tag> {
        const { name, program_id } = data;

        // Récupérer les programmes associés via les ids fournis
        const programs = await AppDataSource.manager.find(Program, {
            where: { id: In([program_id]) },
        });

        if (programs.length === 0) {
            throw new Error("No programs found with the provided IDs");
        }

        // Sauvegarde le tag dans la base de données
        const tag = new Tag(name, program_id, programs);
        return await tag.save();
    }

    // Mutation pour mettre à jour un tag existant
    @Mutation(() => Tag)
   async updateTag(
        @Arg("data") data: UpdateTagInput
    ): Promise<Tag> {
        const { id, name } = data;

        // Sauvegarde le tag mis à jour
        const tag = await AppDataSource.manager.findOne(Tag, { where: { id } });
        if (!tag) {
            throw new Error("Tag not found");
        }
        tag.name = name;
        return await tag.save();
    }

    // Mutation pour supprimer un tag
    @Mutation(() => Boolean)
    async deleteTag(@Arg("id") id: number): Promise<boolean> {
        const tag = await AppDataSource.manager.findOne(Tag, { where: { id } });

        if (!tag) {
            throw new Error("Tag not found");
        }

        // Supprime le tag de la base de données
        await AppDataSource.manager.remove(Tag, tag);
        return true;
    }
}