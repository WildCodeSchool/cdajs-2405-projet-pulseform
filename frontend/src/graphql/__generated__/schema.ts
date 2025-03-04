import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTimeISO: { input: Date; output: Date };
};

export type AddTagInput = {
  name: Tags;
  program_id: Scalars["Int"]["input"];
};

export type CreateExerciceInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  duration: Scalars["Int"]["input"];
  img_src?: InputMaybe<Scalars["String"]["input"]>;
  kcal_loss: Scalars["Int"]["input"];
  level: FitnessLevel;
  muscle: MuscleGroup;
  name: Scalars["String"]["input"];
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type CreateGroupInput = {
  create_by: Scalars["Float"]["input"];
  createdAt: Scalars["DateTimeISO"]["input"];
  name: Scalars["String"]["input"];
};

export type CreateHistoryInput = {
  end_date: Scalars["DateTimeISO"]["input"];
  program_id: Scalars["Float"]["input"];
  start_date: Scalars["DateTimeISO"]["input"];
  total_kcal_loss: Scalars["Float"]["input"];
  user_id: Scalars["Float"]["input"];
};

export type CreateProgramInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  exercices?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  level: FitnessLevel;
  like?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  tags?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  total_duration?: InputMaybe<Scalars["Int"]["input"]>;
  visibility: Scalars["Int"]["input"];
};

export type CreateUserInput = {
  birthday: Scalars["DateTimeISO"]["input"];
  createdAt: Scalars["DateTimeISO"]["input"];
  description: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  gender: Scalars["String"]["input"];
  height: Scalars["Int"]["input"];
  image: Scalars["String"]["input"];
  level: FitnessLevel;
  password: Scalars["String"]["input"];
  role: MemberRole;
  username: Scalars["String"]["input"];
  weight: Scalars["Int"]["input"];
};

export type Exercice = {
  __typename?: "Exercice";
  description?: Maybe<Scalars["String"]["output"]>;
  duration: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  img_src?: Maybe<Scalars["String"]["output"]>;
  kcal_loss: Scalars["Int"]["output"];
  level: FitnessLevel;
  muscle: MuscleGroup;
  name: Scalars["String"]["output"];
  programs?: Maybe<Array<Program>>;
};

/** Levels of fitness suitable for exercises */
export enum FitnessLevel {
  Advanced = "ADVANCED",
  Beginner = "BEGINNER",
  Intermediate = "INTERMEDIATE",
}

export type GetExercicesByLevelInput = {
  level: FitnessLevel;
};

export type GetExercicesByMuscleInput = {
  muscle: MuscleGroup;
};

export type GetGroupMembersInput = {
  group_id: Scalars["Int"]["input"];
};

export type GetProgramsSharedWithUserInput = {
  friend_id: Scalars["Int"]["input"];
};

export type GetSharedProgramsByUserAndGroupInput = {
  group_list_id: Scalars["Int"]["input"];
  user_id: Scalars["Int"]["input"];
};

export type GetTagByIdInput = {
  id: Scalars["Int"]["input"];
};

export type GetUserGroupsInput = {
  user_id: Scalars["Int"]["input"];
};

export type Group = {
  __typename?: "Group";
  create_by: Scalars["Int"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  creator: User;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type GroupList = {
  __typename?: "GroupList";
  createdAt: Scalars["DateTimeISO"]["output"];
  group: Group;
  group_Id: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  user: User;
  user_accept: Scalars["Boolean"]["output"];
  user_id: Scalars["Int"]["output"];
};

export type GroupListsInput = {
  group_id: Scalars["Int"]["input"];
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  user_accept: Scalars["Boolean"]["input"];
  user_id: Scalars["Int"]["input"];
};

export type History = {
  __typename?: "History";
  end_date?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id: Scalars["ID"]["output"];
  program_id: Scalars["Int"]["output"];
  start_date?: Maybe<Scalars["DateTimeISO"]["output"]>;
  total_kcal_loss?: Maybe<Scalars["Int"]["output"]>;
  user_id: Scalars["Int"]["output"];
};

/** Roles of a member in the system */
export enum MemberRole {
  Admin = "ADMIN",
  User = "USER",
}

/** Muscle groups targeted by exercises */
export enum MuscleGroup {
  Abdominals = "ABDOMINALS",
  Arms = "ARMS",
  Back = "BACK",
  Calves = "CALVES",
  Cardio = "CARDIO",
  Chest = "CHEST",
  Forearms = "FOREARMS",
  Glutes = "GLUTES",
  Legs = "LEGS",
  LowerBack = "LOWER_BACK",
  Neck = "NECK",
  Obliques = "OBLIQUES",
  Shoulders = "SHOULDERS",
  Trapezius = "TRAPEZIUS",
}

export type Mutation = {
  __typename?: "Mutation";
  acceptGroupInvitation: Scalars["Boolean"]["output"];
  addHistory: History;
  addProgram: Program;
  addTag: Tag;
  addUserToGroup: GroupList;
  createExercice: Exercice;
  createGroup: Group;
  createUser: User;
  deleteExercice: Scalars["Boolean"]["output"];
  deleteGroup: Scalars["Boolean"]["output"];
  deleteHistory: Scalars["Boolean"]["output"];
  deleteProgram: Scalars["Boolean"]["output"];
  deleteTag: Scalars["Boolean"]["output"];
  deleteUser: Scalars["Boolean"]["output"];
  login: Scalars["String"]["output"];
  removeUserFromGroup: Scalars["Boolean"]["output"];
  shareProgramWithFriend: SharedProgramList;
  unshareProgram: Scalars["Boolean"]["output"];
  updateExercice: Exercice;
  updateGroup: Group;
  updateHistory: History;
  updateProgram: Program;
  updateTag: Tag;
  updateUser: User;
};

export type MutationAcceptGroupInvitationArgs = {
  group_id: Scalars["Float"]["input"];
  user_id: Scalars["Float"]["input"];
};

export type MutationAddHistoryArgs = {
  data: CreateHistoryInput;
};

export type MutationAddProgramArgs = {
  data: CreateProgramInput;
};

export type MutationAddTagArgs = {
  data: AddTagInput;
};

export type MutationAddUserToGroupArgs = {
  data: GroupListsInput;
};

export type MutationCreateExerciceArgs = {
  data: CreateExerciceInput;
};

export type MutationCreateGroupArgs = {
  data: CreateGroupInput;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationDeleteExerciceArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteGroupArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteHistoryArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteProgramArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteTagArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRemoveUserFromGroupArgs = {
  group_Id: Scalars["Float"]["input"];
  user_id: Scalars["Float"]["input"];
};

export type MutationShareProgramWithFriendArgs = {
  data: ShareProgramInput;
};

export type MutationUnshareProgramArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationUpdateExerciceArgs = {
  data: UpdateExerciceInput;
};

export type MutationUpdateGroupArgs = {
  data: UpdateGroupInput;
};

export type MutationUpdateHistoryArgs = {
  data: UpdateHistoryInput;
};

export type MutationUpdateProgramArgs = {
  data: UpdateProgramInput;
  id: Scalars["Float"]["input"];
};

export type MutationUpdateTagArgs = {
  data: UpdateTagInput;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type Program = {
  __typename?: "Program";
  createdAt: Scalars["DateTimeISO"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  exercices?: Maybe<Array<Exercice>>;
  id: Scalars["ID"]["output"];
  level: FitnessLevel;
  like?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  tags?: Maybe<Array<Tag>>;
  total_duration?: Maybe<Scalars["Int"]["output"]>;
  visibility: Scalars["Boolean"]["output"];
};

export type ProgramFilterInput = {
  level?: InputMaybe<FitnessLevel>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  visibility?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  getAllExercices: Array<Exercice>;
  getAllGroups: Array<Group>;
  getAllPrograms: Array<Program>;
  getAllTags: Array<Tag>;
  getAllUsers: Array<User>;
  getExerciceById?: Maybe<Exercice>;
  getExercicesByLevel: Array<Exercice>;
  getExercicesByMuscle: Array<Exercice>;
  getGroupById?: Maybe<Group>;
  getGroupMembers: Array<GroupList>;
  getHistoryByDateRange: Array<History>;
  getHistoryById?: Maybe<History>;
  getHistoryByUserAndProgram: Array<History>;
  getHistoryByUserId: Array<History>;
  getProgramById?: Maybe<Program>;
  getProgramsByLevel: Array<Program>;
  getProgramsSharedWithUser: Array<SharedProgramList>;
  getSharedProgramsByUserAndGroup: Array<SharedProgramList>;
  getTagById?: Maybe<Tag>;
  getUserById?: Maybe<User>;
  getUserGroups: Array<Group>;
  searchPrograms: Array<Program>;
};

export type QueryGetAllGroupsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGetAllProgramsArgs = {
  filters?: InputMaybe<ProgramFilterInput>;
};

export type QueryGetExerciceByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryGetExercicesByLevelArgs = {
  data: GetExercicesByLevelInput;
};

export type QueryGetExercicesByMuscleArgs = {
  data: GetExercicesByMuscleInput;
};

export type QueryGetGroupByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryGetGroupMembersArgs = {
  data: GetGroupMembersInput;
};

export type QueryGetHistoryByDateRangeArgs = {
  end_date: Scalars["DateTimeISO"]["input"];
  start_date: Scalars["DateTimeISO"]["input"];
};

export type QueryGetHistoryByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryGetHistoryByUserAndProgramArgs = {
  program_id: Scalars["Float"]["input"];
  user_id: Scalars["Float"]["input"];
};

export type QueryGetHistoryByUserIdArgs = {
  user_id: Scalars["Float"]["input"];
};

export type QueryGetProgramByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryGetProgramsByLevelArgs = {
  level: FitnessLevel;
};

export type QueryGetProgramsSharedWithUserArgs = {
  data: GetProgramsSharedWithUserInput;
};

export type QueryGetSharedProgramsByUserAndGroupArgs = {
  data: GetSharedProgramsByUserAndGroupInput;
};

export type QueryGetTagByIdArgs = {
  data: GetTagByIdInput;
};

export type QueryGetUserByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryGetUserGroupsArgs = {
  data: GetUserGroupsInput;
};

export type QuerySearchProgramsArgs = {
  keyword: Scalars["String"]["input"];
};

export type ShareProgramInput = {
  friend_id: Scalars["Int"]["input"];
  group_list_id: Scalars["Int"]["input"];
  program_id: Scalars["Int"]["input"];
  user_id: Scalars["Int"]["input"];
};

export type SharedProgramList = {
  __typename?: "SharedProgramList";
  friend?: Maybe<User>;
  group_list_id?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  program_id: Scalars["Int"]["output"];
  user_id: Scalars["Int"]["output"];
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["ID"]["output"];
  name: Tags;
  program_id: Scalars["Float"]["output"];
  programs?: Maybe<Array<Program>>;
  users?: Maybe<Array<User>>;
};

/** Tags describing the purpose or benefits of exercises */
export enum Tags {
  AthleticPerformance = "ATHLETIC_PERFORMANCE",
  BalanceAndStability = "BALANCE_AND_STABILITY",
  CardiovascularHealth = "CARDIOVASCULAR_HEALTH",
  EnduranceImprovement = "ENDURANCE_IMPROVEMENT",
  FlexibilityEnhancement = "FLEXIBILITY_ENHANCEMENT",
  GeneralFitness = "GENERAL_FITNESS",
  MuscleGain = "MUSCLE_GAIN",
  Rehabilitation = "REHABILITATION",
  StrengthBuilding = "STRENGTH_BUILDING",
  StressRelief = "STRESS_RELIEF",
  ToningAndDefinition = "TONING_AND_DEFINITION",
  WeightLoss = "WEIGHT_LOSS",
}

export type UpdateExerciceInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  level?: InputMaybe<FitnessLevel>;
  muscle?: InputMaybe<MuscleGroup>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type UpdateGroupInput = {
  id: Scalars["Float"]["input"];
  name: Scalars["String"]["input"];
};

export type UpdateHistoryInput = {
  end_date?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id: Scalars["Float"]["input"];
  start_date?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
};

export type UpdateProgramInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  exercices?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  level?: InputMaybe<FitnessLevel>;
  like?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  total_duration?: InputMaybe<Scalars["Int"]["input"]>;
  visibility?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateTagInput = {
  id: Scalars["Float"]["input"];
  name: Tags;
};

export type UpdateUserInput = {
  birthday: Scalars["DateTimeISO"]["input"];
  createdAt: Scalars["DateTimeISO"]["input"];
  description: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  gender: Scalars["String"]["input"];
  height: Scalars["Float"]["input"];
  id: Scalars["Float"]["input"];
  image: Scalars["String"]["input"];
  level: FitnessLevel;
  password: Scalars["String"]["input"];
  role: MemberRole;
  username: Scalars["String"]["input"];
  weight: Scalars["Float"]["input"];
};

export type User = {
  __typename?: "User";
  birthday?: Maybe<Scalars["DateTimeISO"]["output"]>;
  createdAt: Scalars["DateTimeISO"]["output"];
  description: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  gender?: Maybe<Scalars["String"]["output"]>;
  groups?: Maybe<Array<Group>>;
  height?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  level?: Maybe<FitnessLevel>;
  password: Scalars["String"]["output"];
  role: MemberRole;
  tags?: Maybe<Array<Tag>>;
  username: Scalars["String"]["output"];
  weight?: Maybe<Scalars["Int"]["output"]>;
};

export type GetAllProgramsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProgramsQuery = {
  __typename?: "Query";
  getAllPrograms: Array<{
    __typename?: "Program";
    id: string;
    name: string;
    description?: string | null;
    total_duration?: number | null;
    level: FitnessLevel;
    createdAt: Date;
    visibility: boolean;
    like?: number | null;
    exercices?: Array<{
      __typename?: "Exercice";
      id: string;
      name: string;
      description?: string | null;
      duration: number;
      kcal_loss: number;
      muscle: MuscleGroup;
      level: FitnessLevel;
      img_src?: string | null;
    }> | null;
    tags?: Array<{ __typename?: "Tag"; id: string; name: Tags }> | null;
  }>;
};

export type GetProgramByIdQueryVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type GetProgramByIdQuery = {
  __typename?: "Query";
  getProgramById?: {
    __typename?: "Program";
    id: string;
    name: string;
    description?: string | null;
    createdAt: Date;
    tags?: Array<{ __typename?: "Tag"; id: string; name: Tags }> | null;
  } | null;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  getUserById?: { __typename?: "User"; id: string; email: string } | null;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: "Query";
  getAllUsers: Array<{ __typename?: "User"; id: string; email: string }>;
};

export const GetAllProgramsDocument = gql`
    query getAllPrograms {
  getAllPrograms {
    id
    name
    description
    total_duration
    level
    createdAt
    visibility
    like
    exercices {
      id
      name
      description
      duration
      kcal_loss
      muscle
      level
      img_src
    }
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllProgramsQuery__
 *
 * To run a query within a React component, call `useGetAllProgramsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProgramsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProgramsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProgramsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllProgramsQuery,
    GetAllProgramsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllProgramsQuery, GetAllProgramsQueryVariables>(
    GetAllProgramsDocument,
    options,
  );
}
export function useGetAllProgramsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllProgramsQuery,
    GetAllProgramsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllProgramsQuery, GetAllProgramsQueryVariables>(
    GetAllProgramsDocument,
    options,
  );
}
export function useGetAllProgramsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllProgramsQuery,
        GetAllProgramsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllProgramsQuery,
    GetAllProgramsQueryVariables
  >(GetAllProgramsDocument, options);
}
export type GetAllProgramsQueryHookResult = ReturnType<
  typeof useGetAllProgramsQuery
>;
export type GetAllProgramsLazyQueryHookResult = ReturnType<
  typeof useGetAllProgramsLazyQuery
>;
export type GetAllProgramsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllProgramsSuspenseQuery
>;
export type GetAllProgramsQueryResult = Apollo.QueryResult<
  GetAllProgramsQuery,
  GetAllProgramsQueryVariables
>;
export const GetProgramByIdDocument = gql`
    query getProgramById($id: Float!) {
  getProgramById(id: $id) {
    id
    name
    description
    createdAt
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetProgramByIdQuery__
 *
 * To run a query within a React component, call `useGetProgramByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProgramByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProgramByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProgramByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProgramByIdQuery,
    GetProgramByIdQueryVariables
  > &
    (
      | { variables: GetProgramByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProgramByIdQuery, GetProgramByIdQueryVariables>(
    GetProgramByIdDocument,
    options,
  );
}
export function useGetProgramByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProgramByIdQuery,
    GetProgramByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProgramByIdQuery, GetProgramByIdQueryVariables>(
    GetProgramByIdDocument,
    options,
  );
}
export function useGetProgramByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetProgramByIdQuery,
        GetProgramByIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetProgramByIdQuery,
    GetProgramByIdQueryVariables
  >(GetProgramByIdDocument, options);
}
export type GetProgramByIdQueryHookResult = ReturnType<
  typeof useGetProgramByIdQuery
>;
export type GetProgramByIdLazyQueryHookResult = ReturnType<
  typeof useGetProgramByIdLazyQuery
>;
export type GetProgramByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetProgramByIdSuspenseQuery
>;
export type GetProgramByIdQueryResult = Apollo.QueryResult<
  GetProgramByIdQuery,
  GetProgramByIdQueryVariables
>;
export const GetUserByIdDocument = gql`
    query getUserById($id: Float!) {
  getUserById(id: $id) {
    id
    email
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  > &
    (
      | { variables: GetUserByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export function useGetUserByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetUserByIdQuery,
        GetUserByIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetUserByIdSuspenseQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  getAllUsers {
    id
    email
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options,
  );
}
export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options,
  );
}
export function useGetAllUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllUsersQuery,
        GetAllUsersQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options,
  );
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<
  typeof useGetAllUsersLazyQuery
>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<
  typeof useGetAllUsersSuspenseQuery
>;
export type GetAllUsersQueryResult = Apollo.QueryResult<
  GetAllUsersQuery,
  GetAllUsersQueryVariables
>;
