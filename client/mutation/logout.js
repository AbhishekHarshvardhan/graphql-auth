import gql from 'graphql-tag';
const mutation = gql`
  mutation {
    logout {
      id
    }
  }
`;

module.exports = mutation;
