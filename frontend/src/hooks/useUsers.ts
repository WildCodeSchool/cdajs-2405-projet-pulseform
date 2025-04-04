import {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
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
