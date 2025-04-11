import {
  useGetHistoryByUserIdQuery,
  useGetUserHistoryByDateRangeQuery,
} from "@graphql/__generated__/schema";

export const useHistoryByUserId = (id: number) => {
  const { loading, error, data } = useGetHistoryByUserIdQuery({
    variables: { id },
  });
  const histories = data?.getHistoryByUserId;

  return {
    loading,
    error,
    histories,
  };
};

export const useUserHistoryByDatesRange = (
  userId: number,
  startDate: Date,
  endDate: Date,
) => {
  const { loading, error, data } = useGetUserHistoryByDateRangeQuery({
    variables: { userId, startDate, endDate },
  });
  const histories = data?.getUserHistoryByDateRange;

  return {
    loading,
    error,
    histories,
  };
};
