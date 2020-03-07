const {createServer} = require("./graphqlExpressServer")

const expressServer = createServer()

const port = 3001

expressServer.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`) //TODO strategy to suppress console output during tests
})