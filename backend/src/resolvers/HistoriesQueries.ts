import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { History } from "../entities/History";
import AppDataSource from "../AppDataSource"

@Resolver(History)
export class HistoriesQueries {

    @Query(type => [History])
    async getAllHistories(): Promise<History[]> {
        const histories: History[] = await AppDataSource.manager.find(History);
        return histories;
    }

}