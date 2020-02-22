const express = require("express")
const expressGraphql = require("express-graphql")
const {createSchema } = require("./graphqlSchema")

function createServer() {
  const schema = createSchema()

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
  createServer
}