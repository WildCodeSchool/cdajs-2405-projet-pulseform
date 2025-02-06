import { Arg, Query, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Tag } from "../../entities/Tag";
import { GetTagByIdInput } from "../../inputs/TagsInput";

@Resolver(Tag)
export class TagsQueries {
	// Récupérer tous les tags
	@Query(() => [Tag])
	async getAllTags(): Promise<Tag[]> {
		const tags: Tag[] = await AppDataSource.manager.find(Tag);
		return tags;
	}

	// Récupérer un tag par son ID
	@Query(() => Tag, { nullable: true })
	async getTagById(
		@Arg("data", () => GetTagByIdInput) data: GetTagByIdInput,
	): Promise<Tag | null> {
		const { id } = data;

		const tag = await AppDataSource.manager.findOne(Tag, { where: { id } });
		return tag || null;
	}
}
