import { gql } from "@apollo/client";

export const GET_USER_HISTORY_BY_DATES = gql`
  query GetUserHistoryByDateRange($endDate: DateTimeISO!, $startDate: DateTimeISO!, $userId: Float!) {
  getUserHistoryByDateRange(end_date: $endDate, start_date: $startDate, user_id: $userId) {
    id
    start_date
    end_date
    total_completed_exercises
    total_time_spent
    program {
      id
      name
      total_duration
    }
  }
}
`;
