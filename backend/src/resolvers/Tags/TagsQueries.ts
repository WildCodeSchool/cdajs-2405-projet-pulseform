import { Arg, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Tag } from "../../entities/Tag";
import type { GetTagByIdInput } from "../../inputs/TagsInput";

@Resolver(Tag)
export class TagsQueries {
	// Récupérer tous les tags
	@Query((type) => [Tag])
	async getAllTags(): Promise<Tag[]> {
		const tags: Tag[] = await AppDataSource.manager.find(Tag);
		return tags;
	}

	// Récupérer un tag par son ID
	@Query((type) => Tag, { nullable: true })
	async getTagById(@Arg("data") data: GetTagByIdInput): Promise<Tag | null> {
		const { id } = data;

		const tag = await AppDataSource.manager.findOne(Tag, { where: { id } });
		return tag || null;
	}
}
