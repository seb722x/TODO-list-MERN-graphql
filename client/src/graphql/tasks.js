import gql from "graphql-tag";

export const CREATE_TASK = gql`
  mutation ($title: String!, $projectId: ID!) {
    createTask(title: $title, projectId: $projectId) {
      _id
      projectId
    }
  }
`;

export const DELETE_TASK = gql`
  mutation ($id: ID!) {
    deleteTask(_id: $id) {
      _id
      title
    }
  }
`;
