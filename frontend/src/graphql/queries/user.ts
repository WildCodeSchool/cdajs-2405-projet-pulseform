import { gql } from "@apollo/client";

export const ME_QUERY = gql`
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
      total_completed_exercises
      total_time_spent
      weights {
        month
        weight
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
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
      total_completed_exercises
      total_time_spent
    }
  }
`;

export const GET_ALL_USERS = gql`
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
      total_completed_exercises
      total_time_spent
    }
  }
`;

export const GET_WEIGHT_BY_USER_ID = gql`
  query GetWeightByUserId($id: Float!) {
    getWeightByUserId(id: $id) {
      month
      update_at
      weight
    }
  }
`;

export const GET_USER_ERXERCICES_FOR_CHART = gql`
query GetHistoryByUserId($user_id: Float!) {
  getHistoryByUserId(user_id: $user_id) {
    id
    start_date
    end_date
    program {
      id
      name
      total_duration
      tags {
        name
      }
    }
  }
}
`;

export const GET_PROGRAM_HISTORY_END_DATE_BY_USER_ID = gql`
  query GetHistoryEndDateProgramByUserId($id: Float!) {
    getHistoryByUserId(user_id: $id) {
      end_date
    }
  }
`;
