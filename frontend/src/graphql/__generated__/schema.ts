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

export type AuthPayload = {
  __typename?: "AuthPayload";
  user: User;
};

export type CreateAccountInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type CreateExerciseInput = {
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
  created_at: Scalars["DateTimeISO"]["input"];
  name: Scalars["String"]["input"];
};

export type CreateHistoryInput = {
  completed_exercises?: InputMaybe<Scalars["Float"]["input"]>;
  end_date: Scalars["DateTimeISO"]["input"];
  program_id: Scalars["Float"]["input"];
  start_date: Scalars["DateTimeISO"]["input"];
  total_kcal_loss: Scalars["Float"]["input"];
  total_time_spent?: InputMaybe<Scalars["Float"]["input"]>;
  user_id: Scalars["Float"]["input"];
};

export type CreateProgramInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  exercises?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  level: FitnessLevel;
  like?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  tags?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  total_duration?: InputMaybe<Scalars["Int"]["input"]>;
  visibility: Scalars["Int"]["input"];
};

export type CreateUserInput = {
  birthday: Scalars["DateTimeISO"]["input"];
  created_at: Scalars["DateTimeISO"]["input"];
  description: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  gender: Scalars["String"]["input"];
  height: Scalars["Int"]["input"];
  image: Scalars["String"]["input"];
  level: FitnessLevel;
  password: Scalars["String"]["input"];
  role: MemberRole;
  username: Scalars["String"]["input"];
  weights: Array<WeightInput>;
};

export type Exercise = {
  __typename?: "Exercise";
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

export type GetExercisesByLevelInput = {
  level: FitnessLevel;
};

export type GetExercisesByMuscleInput = {
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
  created_at: Scalars["DateTimeISO"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type GroupList = {
  __typename?: "GroupList";
  created_at: Scalars["DateTimeISO"]["output"];
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars["ID"]["output"]>;
  id: Scalars["ID"]["output"];
  user?: Maybe<User>;
  userId?: Maybe<Scalars["ID"]["output"]>;
  user_accept: Scalars["Boolean"]["output"];
};

export type GroupListsInput = {
  created_at?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  group_id: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  user_accept: Scalars["Boolean"]["input"];
  user_id: Scalars["Int"]["input"];
};

export type History = {
  __typename?: "History";
  end_date?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id: Scalars["ID"]["output"];
  program: Program;
  start_date?: Maybe<Scalars["DateTimeISO"]["output"]>;
  total_completed_exercises?: Maybe<Scalars["Int"]["output"]>;
  total_kcal_loss?: Maybe<Scalars["Int"]["output"]>;
  total_time_spent?: Maybe<Scalars["Int"]["output"]>;
  user: User;
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
  addWeight: Array<Weight>;
  createAccount: User;
  createExercise: Exercise;
  createGroup: Group;
  createUser: User;
  deleteExercise: Scalars["Boolean"]["output"];
  deleteGroup: Scalars["Boolean"]["output"];
  deleteHistory: Scalars["Boolean"]["output"];
  deleteProgram: Scalars["Boolean"]["output"];
  deleteTag: Scalars["Boolean"]["output"];
  deleteUser: Scalars["Boolean"]["output"];
  filterPrograms: Array<Program>;
  login: AuthPayload;
  removeUserFromGroup: Scalars["Boolean"]["output"];
  shareProgramWithFriend: SharedProgramList;
  unshareProgram: Scalars["Boolean"]["output"];
  updateExercise: Exercise;
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

export type MutationAddWeightArgs = {
  id: Scalars["Float"]["input"];
  weight: Scalars["Float"]["input"];
};

export type MutationCreateAccountArgs = {
  data: CreateAccountInput;
};

export type MutationCreateExerciseArgs = {
  data: CreateExerciseInput;
};

export type MutationCreateGroupArgs = {
  data: CreateGroupInput;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationDeleteExerciseArgs = {
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

export type MutationFilterProgramsArgs = {
  filters?: InputMaybe<ProgramFilterInput>;
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRemoveUserFromGroupArgs = {
  group_id: Scalars["Float"]["input"];
  user_id: Scalars["Float"]["input"];
};

export type MutationShareProgramWithFriendArgs = {
  data: ShareProgramInput;
};

export type MutationUnshareProgramArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationUpdateExerciseArgs = {
  data: UpdateExerciseInput;
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
  created_at: Scalars["DateTimeISO"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  exercises?: Maybe<Array<Exercise>>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  level: FitnessLevel;
  like?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  tags?: Maybe<Array<Tag>>;
  total_duration?: Maybe<Scalars["Int"]["output"]>;
  visibility: Scalars["Int"]["output"];
};

export type ProgramFilterInput = {
  level?: InputMaybe<FitnessLevel>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  visibility?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  getAllExercises: Array<Exercise>;
  getAllGroups: Array<Group>;
  getAllPrograms: Array<Program>;
  getAllTags: Array<Tag>;
  getAllUsers: Array<User>;
  getExerciseById?: Maybe<Exercise>;
  getExercisesByLevel: Array<Exercise>;
  getExercisesByMuscle: Array<Exercise>;
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
  getUserHistoryByDateRange: Array<History>;
  getWeightByUserId: Array<Weight>;
  me?: Maybe<User>;
  searchPrograms: Array<Program>;
};

export type QueryGetAllGroupsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGetAllProgramsArgs = {
  filters?: InputMaybe<ProgramFilterInput>;
};

export type QueryGetExerciseByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryGetExercisesByLevelArgs = {
  data: GetExercisesByLevelInput;
};

export type QueryGetExercisesByMuscleArgs = {
  data: GetExercisesByMuscleInput;
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

export type QueryGetUserHistoryByDateRangeArgs = {
  end_date: Scalars["DateTimeISO"]["input"];
  start_date: Scalars["DateTimeISO"]["input"];
  user_id: Scalars["Float"]["input"];
};

export type QueryGetWeightByUserIdArgs = {
  id: Scalars["Float"]["input"];
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
  group?: Maybe<Group>;
  id: Scalars["ID"]["output"];
  program: Program;
  user: User;
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["ID"]["output"];
  name: Tags;
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

export type UpdateExerciseInput = {
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
  exercises?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  image?: InputMaybe<Scalars["String"]["input"]>;
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
  created_at: Scalars["DateTimeISO"]["input"];
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
  weights: Array<WeightInput>;
};

export type User = {
  __typename?: "User";
  birthday?: Maybe<Scalars["DateTimeISO"]["output"]>;
  created_at: Scalars["DateTimeISO"]["output"];
  description: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  gender?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  level?: Maybe<FitnessLevel>;
  password: Scalars["String"]["output"];
  role: MemberRole;
  tags?: Maybe<Array<Tag>>;
  total_completed_exercises: Scalars["Int"]["output"];
  total_time_spent: Scalars["Int"]["output"];
  username: Scalars["String"]["output"];
  weights?: Maybe<Array<Weight>>;
};

export type Weight = {
  __typename?: "Weight";
  month: Scalars["String"]["output"];
  update_at: Scalars["DateTimeISO"]["output"];
  weight: Scalars["Float"]["output"];
};

export type WeightInput = {
  month: Scalars["String"]["input"];
  weight: Scalars["Float"]["input"];
};

export type AddHistoryMutationVariables = Exact<{
  data: CreateHistoryInput;
}>;

export type AddHistoryMutation = {
  __typename?: "Mutation";
  addHistory: {
    __typename?: "History";
    id: string;
    total_kcal_loss?: number | null;
    total_completed_exercises?: number | null;
    total_time_spent?: number | null;
    start_date?: Date | null;
    end_date?: Date | null;
    user: {
      __typename?: "User";
      id: string;
      username: string;
      total_completed_exercises: number;
      total_time_spent: number;
    };
    program: { __typename?: "Program"; id: string; name: string };
  };
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "AuthPayload";
    user: { __typename?: "User"; id: string; username: string; email: string };
  };
};

export type CreateAccountMutationVariables = Exact<{
  data: CreateAccountInput;
}>;

export type CreateAccountMutation = {
  __typename?: "Mutation";
  createAccount: {
    __typename?: "User";
    id: string;
    email: string;
    username: string;
  };
};

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: {
    __typename?: "User";
    id: string;
    email: string;
    username: string;
    birthday?: Date | null;
    gender?: string | null;
    height?: number | null;
    level?: FitnessLevel | null;
  };
};

export type GetAllExercisesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllExercisesQuery = {
  __typename?: "Query";
  getAllExercises: Array<{
    __typename?: "Exercise";
    id: string;
    name: string;
    description?: string | null;
    duration: number;
    kcal_loss: number;
    muscle: MuscleGroup;
    level: FitnessLevel;
    img_src?: string | null;
  }>;
};

export type GetExerciseByIdQueryVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type GetExerciseByIdQuery = {
  __typename?: "Query";
  getExerciseById?: {
    __typename?: "Exercise";
    id: string;
    name: string;
    description?: string | null;
    duration: number;
    kcal_loss: number;
    muscle: MuscleGroup;
    level: FitnessLevel;
    img_src?: string | null;
  } | null;
};

export type GetUserHistoryByDateRangeQueryVariables = Exact<{
  endDate: Scalars["DateTimeISO"]["input"];
  startDate: Scalars["DateTimeISO"]["input"];
  userId: Scalars["Float"]["input"];
}>;

export type GetUserHistoryByDateRangeQuery = {
  __typename?: "Query";
  getUserHistoryByDateRange: Array<{
    __typename?: "History";
    id: string;
    start_date?: Date | null;
    end_date?: Date | null;
    program: {
      __typename?: "Program";
      id: string;
      name: string;
      total_duration?: number | null;
    };
  }>;
};

export type GetAllProgramsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProgramsQuery = {
  __typename?: "Query";
  getAllPrograms: Array<{
    __typename?: "Program";
    id: string;
    name: string;
    description?: string | null;
    image?: string | null;
    total_duration?: number | null;
    level: FitnessLevel;
    created_at: Date;
    visibility: number;
    like?: number | null;
    exercises?: Array<{
      __typename?: "Exercise";
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
    image?: string | null;
    total_duration?: number | null;
    level: FitnessLevel;
    created_at: Date;
    visibility: number;
    like?: number | null;
    exercises?: Array<{
      __typename?: "Exercise";
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
  } | null;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "User";
    id: string;
    email: string;
    username: string;
    description: string;
    image?: string | null;
    created_at: Date;
    role: MemberRole;
    level?: FitnessLevel | null;
    birthday?: Date | null;
    height?: number | null;
    gender?: string | null;
    weights?: Array<{
      __typename?: "Weight";
      month: string;
      weight: number;
    }> | null;
  } | null;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  getUserById?: {
    __typename?: "User";
    id: string;
    username: string;
    description: string;
    email: string;
    image?: string | null;
    birthday?: Date | null;
    gender?: string | null;
    height?: number | null;
    created_at: Date;
    role: MemberRole;
    level?: FitnessLevel | null;
  } | null;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: "Query";
  getAllUsers: Array<{
    __typename?: "User";
    id: string;
    username: string;
    description: string;
    email: string;
    image?: string | null;
    birthday?: Date | null;
    gender?: string | null;
    height?: number | null;
    created_at: Date;
    role: MemberRole;
    level?: FitnessLevel | null;
  }>;
};

export type GetWeightByUserIdQueryVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type GetWeightByUserIdQuery = {
  __typename?: "Query";
  getWeightByUserId: Array<{
    __typename?: "Weight";
    month: string;
    update_at: Date;
    weight: number;
  }>;
};

export type GetHistoryByUserIdQueryVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type GetHistoryByUserIdQuery = {
  __typename?: "Query";
  getHistoryByUserId: Array<{
    __typename?: "History";
    end_date?: Date | null;
    program: {
      __typename?: "Program";
      tags?: Array<{ __typename?: "Tag"; name: Tags }> | null;
    };
  }>;
};

export const AddHistoryDocument = gql`
    mutation addHistory($data: CreateHistoryInput!) {
  addHistory(data: $data) {
    id
    user {
      id
      username
      total_completed_exercises
      total_time_spent
    }
    program {
      id
      name
    }
    total_kcal_loss
    total_completed_exercises
    total_time_spent
    start_date
    end_date
  }
}
    `;
export type AddHistoryMutationFn = Apollo.MutationFunction<
  AddHistoryMutation,
  AddHistoryMutationVariables
>;

/**
 * __useAddHistoryMutation__
 *
 * To run a mutation, you first call `useAddHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addHistoryMutation, { data, loading, error }] = useAddHistoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddHistoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddHistoryMutation,
    AddHistoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddHistoryMutation, AddHistoryMutationVariables>(
    AddHistoryDocument,
    options,
  );
}
export type AddHistoryMutationHookResult = ReturnType<
  typeof useAddHistoryMutation
>;
export type AddHistoryMutationResult =
  Apollo.MutationResult<AddHistoryMutation>;
export type AddHistoryMutationOptions = Apollo.BaseMutationOptions<
  AddHistoryMutation,
  AddHistoryMutationVariables
>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      username
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const CreateAccountDocument = gql`
    mutation CreateAccount($data: CreateAccountInput!) {
  createAccount(data: $data) {
    id
    email
    username
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<
  CreateAccountMutation,
  CreateAccountMutationVariables
>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >(CreateAccountDocument, options);
}
export type CreateAccountMutationHookResult = ReturnType<
  typeof useCreateAccountMutation
>;
export type CreateAccountMutationResult =
  Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<
  CreateAccountMutation,
  CreateAccountMutationVariables
>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UpdateUserInput!) {
  updateUser(data: $data) {
    id
    email
    username
    birthday
    gender
    height
    level
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const GetAllExercisesDocument = gql`
    query getAllExercises {
  getAllExercises {
    id
    name
    description
    duration
    kcal_loss
    muscle
    level
    img_src
  }
}
    `;

/**
 * __useGetAllExercisesQuery__
 *
 * To run a query within a React component, call `useGetAllExercisesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllExercisesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllExercisesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllExercisesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllExercisesQuery,
    GetAllExercisesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllExercisesQuery, GetAllExercisesQueryVariables>(
    GetAllExercisesDocument,
    options,
  );
}
export function useGetAllExercisesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllExercisesQuery,
    GetAllExercisesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllExercisesQuery,
    GetAllExercisesQueryVariables
  >(GetAllExercisesDocument, options);
}
export function useGetAllExercisesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllExercisesQuery,
        GetAllExercisesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllExercisesQuery,
    GetAllExercisesQueryVariables
  >(GetAllExercisesDocument, options);
}
export type GetAllExercisesQueryHookResult = ReturnType<
  typeof useGetAllExercisesQuery
>;
export type GetAllExercisesLazyQueryHookResult = ReturnType<
  typeof useGetAllExercisesLazyQuery
>;
export type GetAllExercisesSuspenseQueryHookResult = ReturnType<
  typeof useGetAllExercisesSuspenseQuery
>;
export type GetAllExercisesQueryResult = Apollo.QueryResult<
  GetAllExercisesQuery,
  GetAllExercisesQueryVariables
>;
export const GetExerciseByIdDocument = gql`
    query getExerciseById($id: Float!) {
  getExerciseById(id: $id) {
    id
    name
    description
    duration
    kcal_loss
    muscle
    level
    img_src
  }
}
    `;

/**
 * __useGetExerciseByIdQuery__
 *
 * To run a query within a React component, call `useGetExerciseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExerciseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExerciseByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetExerciseByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetExerciseByIdQuery,
    GetExerciseByIdQueryVariables
  > &
    (
      | { variables: GetExerciseByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetExerciseByIdQuery, GetExerciseByIdQueryVariables>(
    GetExerciseByIdDocument,
    options,
  );
}
export function useGetExerciseByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExerciseByIdQuery,
    GetExerciseByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetExerciseByIdQuery,
    GetExerciseByIdQueryVariables
  >(GetExerciseByIdDocument, options);
}
export function useGetExerciseByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetExerciseByIdQuery,
        GetExerciseByIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetExerciseByIdQuery,
    GetExerciseByIdQueryVariables
  >(GetExerciseByIdDocument, options);
}
export type GetExerciseByIdQueryHookResult = ReturnType<
  typeof useGetExerciseByIdQuery
>;
export type GetExerciseByIdLazyQueryHookResult = ReturnType<
  typeof useGetExerciseByIdLazyQuery
>;
export type GetExerciseByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetExerciseByIdSuspenseQuery
>;
export type GetExerciseByIdQueryResult = Apollo.QueryResult<
  GetExerciseByIdQuery,
  GetExerciseByIdQueryVariables
>;
export const GetUserHistoryByDateRangeDocument = gql`
    query GetUserHistoryByDateRange($endDate: DateTimeISO!, $startDate: DateTimeISO!, $userId: Float!) {
  getUserHistoryByDateRange(
    end_date: $endDate
    start_date: $startDate
    user_id: $userId
  ) {
    id
    start_date
    end_date
    program {
      id
      name
      total_duration
    }
  }
}
    `;

/**
 * __useGetUserHistoryByDateRangeQuery__
 *
 * To run a query within a React component, call `useGetUserHistoryByDateRangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserHistoryByDateRangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserHistoryByDateRangeQuery({
 *   variables: {
 *      endDate: // value for 'endDate'
 *      startDate: // value for 'startDate'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserHistoryByDateRangeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserHistoryByDateRangeQuery,
    GetUserHistoryByDateRangeQueryVariables
  > &
    (
      | { variables: GetUserHistoryByDateRangeQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserHistoryByDateRangeQuery,
    GetUserHistoryByDateRangeQueryVariables
  >(GetUserHistoryByDateRangeDocument, options);
}
export function useGetUserHistoryByDateRangeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserHistoryByDateRangeQuery,
    GetUserHistoryByDateRangeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserHistoryByDateRangeQuery,
    GetUserHistoryByDateRangeQueryVariables
  >(GetUserHistoryByDateRangeDocument, options);
}
export function useGetUserHistoryByDateRangeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetUserHistoryByDateRangeQuery,
        GetUserHistoryByDateRangeQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetUserHistoryByDateRangeQuery,
    GetUserHistoryByDateRangeQueryVariables
  >(GetUserHistoryByDateRangeDocument, options);
}
export type GetUserHistoryByDateRangeQueryHookResult = ReturnType<
  typeof useGetUserHistoryByDateRangeQuery
>;
export type GetUserHistoryByDateRangeLazyQueryHookResult = ReturnType<
  typeof useGetUserHistoryByDateRangeLazyQuery
>;
export type GetUserHistoryByDateRangeSuspenseQueryHookResult = ReturnType<
  typeof useGetUserHistoryByDateRangeSuspenseQuery
>;
export type GetUserHistoryByDateRangeQueryResult = Apollo.QueryResult<
  GetUserHistoryByDateRangeQuery,
  GetUserHistoryByDateRangeQueryVariables
>;
export const GetAllProgramsDocument = gql`
    query getAllPrograms {
  getAllPrograms {
    id
    name
    description
    image
    total_duration
    level
    created_at
    visibility
    like
    exercises {
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
    image
    total_duration
    level
    created_at
    visibility
    like
    exercises {
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
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
    description
    image
    created_at
    role
    level
    birthday
    height
    gender
    weights {
      month
      weight
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    options,
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetUserByIdDocument = gql`
    query getUserById($id: Float!) {
  getUserById(id: $id) {
    id
    username
    description
    email
    image
    birthday
    gender
    height
    created_at
    role
    level
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
    query GetAllUsers {
  getAllUsers {
    id
    username
    description
    email
    image
    birthday
    gender
    height
    created_at
    role
    level
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
export const GetWeightByUserIdDocument = gql`
    query GetWeightByUserId($id: Float!) {
  getWeightByUserId(id: $id) {
    month
    update_at
    weight
  }
}
    `;

/**
 * __useGetWeightByUserIdQuery__
 *
 * To run a query within a React component, call `useGetWeightByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWeightByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWeightByUserIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWeightByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetWeightByUserIdQuery,
    GetWeightByUserIdQueryVariables
  > &
    (
      | { variables: GetWeightByUserIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetWeightByUserIdQuery,
    GetWeightByUserIdQueryVariables
  >(GetWeightByUserIdDocument, options);
}
export function useGetWeightByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWeightByUserIdQuery,
    GetWeightByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetWeightByUserIdQuery,
    GetWeightByUserIdQueryVariables
  >(GetWeightByUserIdDocument, options);
}
export function useGetWeightByUserIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetWeightByUserIdQuery,
        GetWeightByUserIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetWeightByUserIdQuery,
    GetWeightByUserIdQueryVariables
  >(GetWeightByUserIdDocument, options);
}
export type GetWeightByUserIdQueryHookResult = ReturnType<
  typeof useGetWeightByUserIdQuery
>;
export type GetWeightByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetWeightByUserIdLazyQuery
>;
export type GetWeightByUserIdSuspenseQueryHookResult = ReturnType<
  typeof useGetWeightByUserIdSuspenseQuery
>;
export type GetWeightByUserIdQueryResult = Apollo.QueryResult<
  GetWeightByUserIdQuery,
  GetWeightByUserIdQueryVariables
>;
export const GetHistoryByUserIdDocument = gql`
    query GetHistoryByUserId($id: Float!) {
  getHistoryByUserId(user_id: $id) {
    end_date
    program {
      tags {
        name
      }
    }
  }
}
    `;

/**
 * __useGetHistoryByUserIdQuery__
 *
 * To run a query within a React component, call `useGetHistoryByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHistoryByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHistoryByUserIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetHistoryByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetHistoryByUserIdQuery,
    GetHistoryByUserIdQueryVariables
  > &
    (
      | { variables: GetHistoryByUserIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetHistoryByUserIdQuery,
    GetHistoryByUserIdQueryVariables
  >(GetHistoryByUserIdDocument, options);
}
export function useGetHistoryByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHistoryByUserIdQuery,
    GetHistoryByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetHistoryByUserIdQuery,
    GetHistoryByUserIdQueryVariables
  >(GetHistoryByUserIdDocument, options);
}
export function useGetHistoryByUserIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetHistoryByUserIdQuery,
        GetHistoryByUserIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetHistoryByUserIdQuery,
    GetHistoryByUserIdQueryVariables
  >(GetHistoryByUserIdDocument, options);
}
export type GetHistoryByUserIdQueryHookResult = ReturnType<
  typeof useGetHistoryByUserIdQuery
>;
export type GetHistoryByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetHistoryByUserIdLazyQuery
>;
export type GetHistoryByUserIdSuspenseQueryHookResult = ReturnType<
  typeof useGetHistoryByUserIdSuspenseQuery
>;
export type GetHistoryByUserIdQueryResult = Apollo.QueryResult<
  GetHistoryByUserIdQuery,
  GetHistoryByUserIdQueryVariables
>;
