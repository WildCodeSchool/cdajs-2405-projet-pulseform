import { gql } from "@apollo/client";

export const GET_ALL_PROGRAMS = gql`
  query getAllPrograms {
    getAllPrograms {
      id
      name
      description
      image
      total_duration
      level
      created_at
      visibility
      like
      exercises {
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
  query getProgramById($id: Float!) {
    getProgramById(id: $id) {
      id
      name
      description
      image
      total_duration
      level
      created_at
      visibility
      like
      exercises {
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
