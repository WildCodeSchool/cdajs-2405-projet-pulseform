import { ExercisesMutations } from "./Exercises/ExercisesMutations";
import { ExercisesQueries } from "./Exercises/ExercisesQueries";
import { GroupListsMutations } from "./GroupLists/GroupListsMutations";
import { GroupListsQueries } from "./GroupLists/GroupListsQueries";
import { GroupsMutations } from "./Groups/GroupsMutations";
import { GroupsQueries } from "./Groups/GroupsQueries";
import { HistoriesMutations } from "./Histories/HistoriesMutations";
import { HistoriesQueries } from "./Histories/HistoriesQueries";
import { ProgramsMutations } from "./Programs/ProgramsMutations";
import { ProgramsQueries } from "./Programs/ProgramsQueries";
import { SharedProgramListsMutations } from "./SharedProgramLists/SharedProgramListsMutations";
import { SharedProgramListsQueries } from "./SharedProgramLists/SharedProgramListsQueries";
import { TagsMutations } from "./Tags/TagsMutations";
import { TagsQueries } from "./Tags/TagsQueries";
import { UsersMutations } from "./Users/UsersMutations";
import { UsersQueries } from "./Users/UsersQueries";

export const resolvers = [
  ExercisesMutations,
  ExercisesQueries,
  GroupListsMutations,
  GroupListsQueries,
  GroupsMutations,
  GroupsQueries,
  HistoriesMutations,
  HistoriesQueries,
  ProgramsMutations,
  ProgramsQueries,
  SharedProgramListsMutations,
  SharedProgramListsQueries,
  TagsMutations,
  TagsQueries,
  UsersMutations,
  UsersQueries,
] as const;
