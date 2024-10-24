import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { ExerciceList } from "../entities/ExerciceList";
import AppDataSource from "../AppDataSource"

@Resolver(ExerciceList)
export class ExercicesListsQueries {

    @Query(type => [ExerciceList])
    async getAllExercicesLists(): Promise<ExerciceList[]> {
        const exercicesLists: ExerciceList[] = await AppDataSource.manager.find(ExerciceList);
        return exercicesLists;
    }

}