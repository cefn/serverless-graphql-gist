const serverless = require("serverless-http")
const {createServer} = require("./graphqlServer")

const server = createServer()
const handler = serverless(server)

module.exports = {
  handler
}
