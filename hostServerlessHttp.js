const serverless = require("serverless-http")
const {createServer} = require("./graphqlServer")

const expressServer = createServer()

const handler = serverless(expressServer)

module.exports = {
  handler
}