import { gql } from "@apollo/client";

export const GET_ALL_EXERCISES = gql`
  query getAllExercises {
    getAllExercises {
      #remettre ici nom de la méthode dans ExercisesQueries
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
  query getExerciseById($id: Float!) {
    getExerciseById(id: $id) {
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
