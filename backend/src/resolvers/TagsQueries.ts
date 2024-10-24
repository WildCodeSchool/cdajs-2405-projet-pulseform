import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Tag } from "../entities/Tag";
import AppDataSource from "../AppDataSource"

@Resolver(Tag)
export class TagsQueries {

    @Query(type => [Tag])
    async getAllTags(): Promise<Tag[]> {
        const tags: Tag[] = await AppDataSource.manager.find(Tag);
        return tags;
    }

}