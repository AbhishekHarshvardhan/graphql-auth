import gql from 'graphql-tag';
const currentUser = gql`
  {
    user {
      id
      email
    }
  }
`;

module.exports = currentUser;
