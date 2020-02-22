const {createServer} = require("./graphqlServer")

const server = createServer()

const port = 3000

server.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`) //TODO strategy to suppress console output during tests
})