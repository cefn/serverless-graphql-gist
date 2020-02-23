const awsServerlessExpress = require("aws-serverless-express")
const {createServer} = require("./graphqlExpressServer")

const expressServer = createServer()

const awsServerless = awsServerlessExpress.createServer(expressServer)

const handler = (event, context) => { awsServerlessExpress.proxy(awsServerless, event, context) }

module.exports = {
  handler
}
