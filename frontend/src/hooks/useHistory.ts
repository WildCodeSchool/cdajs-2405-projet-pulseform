import {
  useGetHistoryByUserIdQuery,
  useGetUserHistoryByDateRangeQuery,
} from "@graphql/__generated__/schema";

export const useHistoryByUserId = (userId: number) => {
  const { loading, error, data } = useGetHistoryByUserIdQuery({
    variables: { user_id: userId },
  });

  return {
    loading,
    error,
    histories: data?.getHistoryByUserId,
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
