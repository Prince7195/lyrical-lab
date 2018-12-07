import gql from "graphql-tag";

export const likeLyricMutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
    }
  }
`;
