const express = require("express")
const expressGraphql = require("express-graphql")
const {createSchema } = require("./graphqlSchema")

function createServer() {
  const schema = createSchema()

  const graphqlEndpoint = expressGraphql({
    schema,
    graphiql: true
  })

  const server = express()
  server.use("/graphql", graphqlEndpoint)
  server.use(express.static("static"))
  return server
}

module.exports = {
  createServer
}