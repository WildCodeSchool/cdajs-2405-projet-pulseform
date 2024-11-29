import { ExercicesMutations } from './ExercicesMutations';
import { ExercicesQueries } from './ExercicesQueries';
import { FriendListsMutations } from './FriendListsMutations';
import { FriendListsQueries } from './FriendListsQueries';
import { GroupListsMutations } from './GroupListsMutations';
import { GroupListsQueries } from './GroupListsQueries';
import { GroupsMutations } from './GroupsMutations';
import { GroupsQueries } from './GroupsQueries';
import { HistoriesMutations } from './HistoriesMutations';
import { HistoriesQueries } from './HistoriesQueries';
import { ProgramsMutations } from './ProgramsMutations';
import { ProgramsQueries } from './ProgramsQueries';
import { SharedProgramListsMutations } from './SharedProgramListsMutations';
import { SharedProgramListsQueries } from './SharedProgramListsQueries';
import { TagsMutations } from './TagsMutations';
import { TagsQueries } from './TagsQueries';
import { UsersMutations } from './UsersMutations';
import { UsersQueries } from './UsersQueries';

export const resolvers = [
    ExercicesMutations,
    ExercicesQueries,
    FriendListsMutations,
    FriendListsQueries,
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
    UsersQueries
] as const;
