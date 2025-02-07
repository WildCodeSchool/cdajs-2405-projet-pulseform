import { gql } from "@apollo/client";

export const GET_ALL_EXERCISES = gql`
  query GetAllExercises {
    GetAllExercices {
      #remettre ici nom de la méthode dans ExercicesQueries
      id
      name
      description
      duration
      kcal_loss
      muscle
      level
      img_src
    }
  }
`;

export const GET_EXERCICE_BY_ID = gql`
  query GetExerciceById($id: ID!) {
    GetExerciceById(id: $id) {
      id
      name
      description
      duration
      kcal_loss
      muscle
      level
      img_src
    }
  }
`;
