const serverless = require("serverless-http")
const {createServer} = require("./graphqlExpressServer")

const expressServer = createServer()

const handler = serverless(expressServer)

module.exports = {
  handler
}