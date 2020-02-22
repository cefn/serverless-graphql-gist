const awsServerlessExpress = require("aws-serverless-express")
const {createServer} = require("./graphqlServer")

const server = createServer()

const awsServer = awsServerlessExpress.createServer(server)

const handler = (event, context) => { awsServerlessExpress.proxy(awsServer, event, context) }

module.exports = {
  handler
}
