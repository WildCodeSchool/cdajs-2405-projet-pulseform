import { gql } from "@apollo/client";

export const GET_ALL_EXERCISES = gql`
  query getAllExercises {
    getAllExercices {
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
  query getExerciceById($id: : Float!) {
    getExerciceById(id: $id) {
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
