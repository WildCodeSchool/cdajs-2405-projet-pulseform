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
      weights {
        month
        weight
      }
      total_completed_exercises
      total_time_spent
    }
  }
`;
