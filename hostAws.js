const serverless = require("serverless-http")
const {createApiServer} = require("./api")

const server = createApiServer()
const serverlessHandler = serverless(server)

async function handler(event, context, callback){
  return await serverlessHandler(event, context)
}

module.exports = {
  handler
}
