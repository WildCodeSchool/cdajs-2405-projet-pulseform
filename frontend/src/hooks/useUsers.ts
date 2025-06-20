import {
  useGetAllUsersQuery,
  useGetHistoryByUserIdQuery,
  useGetHistoryEndDateProgramByUserIdQuery,
  useGetUserByIdQuery,
  useGetWeightByUserIdQuery,
  useMeQuery,
} from "@graphql/__generated__/schema";

export const useGetAllUsers = () => {
  const { loading, error, data } = useGetAllUsersQuery();
  const users = data?.getAllUsers;

  return {
    loading,
    error,
    users,
  };
};

export const useGetUserById = (id: number) => {
  const { loading, error, data } = useGetUserByIdQuery({
    variables: { id },
  });
  const user = data?.getUserById;

  return {
    loading,
    error,
    userById: user,
  };
};

export const useMe = () => {
  const { loading, error, data, refetch } = useMeQuery({
    fetchPolicy: "network-only",
  });
  const user = data?.me;

  return {
    loading,
    error,
    user,
    refetch,
  };
};

export const useGetUserByIdWithWeights = (id: number) => {
  const { loading, error, data } = useGetWeightByUserIdQuery({
    variables: { id },
  });
  const userWeight = data?.getWeightByUserId;

  return {
    loading,
    error,
    userWeight,
  };
};

export const useGetUserExercicesForChart = (id: number) => {
  const { loading, error, data } = useGetHistoryByUserIdQuery({
    variables: { user_id: id },
  });
  const userExercicesChart = data?.getHistoryByUserId;

  return {
    loading,
    error,
    userExercicesChart,
  };
};

export const GetHistoryEndDateProgramByUserId = (id: number) => {
  const { loading, error, data } = useGetHistoryEndDateProgramByUserIdQuery({
    variables: { id },
  });
  const historyEndDateProgram = data?.getHistoryByUserId;

  return {
    loading,
    error,
    historyEndDateProgram,
  };
};
