import { gql } from "@apollo/client";

export const GET_ALL_PROGRAMS = gql`
  query getAllPrograms {
    getAllPrograms {
      id
      name
      description
      total_duration
      level
      createdAt
      visibility
      like
      exercices {
        id
        name
        description
        duration
        kcal_loss
        muscle
        level
        img_src
      }
      tags {
        id
        name
      }
    }
  }
`;

export const GET_PROGRAM_BY_ID = gql`
  query getProgramById($id: ID!) {
    getProgramById(id: $id) {
      id
      name
      description
      createdAt
      tags {
        id
        name
      }
    }
  }
`;
