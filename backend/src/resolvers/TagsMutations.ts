import { Arg, Mutation, Resolver } from "type-graphql";
import { Tag } from "../entities/Tag";
import AppDataSource from "../AppDataSource";

@Resolver(Tag)
export class TagsMutations {

    // Mutation pour ajouter un tag
    @Mutation(() => Tag)
    async addTag(@Arg("name") name: string): Promise<Tag> {
        const tag = new Tag();
        tag.name = name;

        // Sauvegarde le tag dans la base de données
        return await AppDataSource.manager.save(tag);
    }

    // Mutation pour mettre à jour un tag existant
    @Mutation(() => Tag)
    async updateTag(
        @Arg("id") id: number,
        @Arg("name") name: string
    ): Promise<Tag> {
        const tag = await AppDataSource.manager.findOne(Tag, { where: { id } });

        if (!tag) {
            throw new Error("Tag not found");
        }

        tag.name = name;

        // Sauvegarde le tag mis à jour
        return await AppDataSource.manager.save(tag);
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
