import {
  useGetAllExercisesQuery,
  useGetExerciseByIdQuery,
} from "@graphql/__generated__/schema";

export const useGetAllExercises = () => {
  const { loading, error, data } = useGetAllExercisesQuery();

  return {
    loading,
    error: error ?? null,
    exercises: data?.getAllExercises ?? [],
  };
};

export const useGetExerciseById = (id: number) => {
  const { loading, error, data } = useGetExerciseByIdQuery({
    variables: { id },
  });

  return {
    loading,
    error: error ?? null,
    exercise: data?.getExerciseById ?? null,
  };
};
