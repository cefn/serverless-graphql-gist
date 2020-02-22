const express = require("express")
const graphql = require("graphql")
const expressGraphql = require("express-graphql")

function createApiServer() {
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

  const graphqlEndpoint = expressGraphql({
    schema,
    graphiql: true
  })

  const app = express()
  app.use("/graphql", graphqlEndpoint)
  app.use(express.static("static"))
  return app
}

module.exports = {
  createApiServer
}