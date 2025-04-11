import { gql } from "@apollo/client";

export const ADD_HISTORY_MUTATION = gql`
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
