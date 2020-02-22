const graphql = require("graphql")

function createSchema(){
  // Maps id to User object
  var fakeDatabase = {
    "a": {
      id: "a",
      name: "alice",
    },
    "b": {
      id: "b",
      name: "bob",
    },
  }

  // Define the User type
  var userType = new graphql.GraphQLObjectType({
    name: "User",
    fields: {
      id: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString },
    }
  })

  // Define the Query type
  var queryType = new graphql.GraphQLObjectType({
    name: "Query",
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: graphql.GraphQLString }
        },
        resolve: (_, { id }) => {
          return fakeDatabase[id]
        }
      }
    }
  })

  var schema = new graphql.GraphQLSchema({ query: queryType })

  return schema
}

module.exports = {
  createSchema
}