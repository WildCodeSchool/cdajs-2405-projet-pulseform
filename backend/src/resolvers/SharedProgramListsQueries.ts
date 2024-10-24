import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { SharedProgramList } from "../entities/SharedProgramList";
import AppDataSource from "../AppDataSource"

@Resolver(SharedProgramList)
export class SharedProgramListsQueries {

    @Query(type => [SharedProgramList])
    async getAllSharedProgramLists(): Promise<SharedProgramList[]> {
        const sharedProgramLists: SharedProgramList[] = await AppDataSource.manager.find(SharedProgramList);
        return sharedProgramLists;
    }

}