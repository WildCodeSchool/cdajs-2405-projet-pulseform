import {
  useGetAllProgramsQuery,
  useGetProgramByIdQuery,
} from "@graphql/__generated__/schema";

export const useGetAllPrograms = () => {
  const { loading, error, data } = useGetAllProgramsQuery();

  return {
    loading,
    error: error ?? null,
    programs: data?.getAllPrograms ?? [],
  };
};

export const useGetProgramById = (id: number) => {
  const { loading, error, data } = useGetProgramByIdQuery({
    variables: { id },
  });

  return {
    loading,
    error: error ?? null,
    program: data?.getProgramById ?? null,
  };
};
