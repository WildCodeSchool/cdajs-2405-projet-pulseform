import { Query, Resolver } from "type-graphql";
import { Tag } from "../entities/Tag";
import AppDataSource from "../AppDataSource"

@Resolver(Tag)
export class TagsQueries {

    // Récupérer tous les tags
    @Query(type => [Tag])
    async getAllTags(): Promise<Tag[]> {
        const tags: Tag[] = await AppDataSource.manager.find(Tag);
        return tags;
    }

}