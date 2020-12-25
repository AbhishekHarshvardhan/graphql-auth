const { GraphQLObjectType, GraphQLString } = require('graphql');
const graphql = require('graphql');
const { signup, login } = require('../services/auth');
const UserType = require('./types/user_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: function (parentValue, { email, password }, req) {
        return signup({ email, password, req });
      },
    },
    logout: {
      type: UserType,
      resolve: function (parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: function (parentValue, { email, password }, req) {
        return login({ email, password, req });
      },
    },
  },
});

module.exports = mutation;
