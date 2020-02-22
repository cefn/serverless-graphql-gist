const serverless = require("serverless-http")
const express = require("express")
const graphql = require("graphql")
const expressGraphql = require("express-graphql")

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
      // `args` describes the arguments that the `user` query accepts
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

const server = express()
const graphqlEndpoint = expressGraphql({
  schema,
  graphiql: true
})

server.use("/graphql", graphqlEndpoint)
server.use(express.static("static"))

const handler = serverless(server)

//TODO collapse into this?
//module.exports.endpoint = serverless(server)

module.exports.endpoint = async (event, context, callback) => {
  return await handler(event, context)
}
