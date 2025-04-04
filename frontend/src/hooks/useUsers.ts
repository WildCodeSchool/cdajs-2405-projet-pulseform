import {
  useGetAllUsersQuery,
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
    user,
  };
};

export const useMe = () => {
  const { loading, error, data } = useMeQuery();
  const user = data?.me;

  return {
    loading,
    error,
    user,
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
