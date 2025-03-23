import { gql } from "@apollo/client";

// export const USER_LOGIN_QUERY = gql`
//   query LoginUser($email: String!, $password: String!) {
//     login(email: $email, password: $password)
//   }
// `;

// export const USER_CREATE_QUERY = gql`
//   mutation CreateUser($email: String!, $role: String!, $password: String!) {
//     createUser(email: $email, role: $role, password: $password) {
//       id
//     }
//   }
// `;

// export const USER_UPDATE_QUERY = gql`
//   mutation UpdateUser($id: ID!, $username: String!, $description: String!, $role: String!, $password: String!, $email: String!, weight: number!, height: number!, age: number!) {
//     updateUser(id: $id, username: $username, description: $description) {
//       id
//     }
// }`;

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
      weight
      height
      created_at
      role
      level
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
      weight
      height
      created_at
      role
      level
    }
  }
`;
