const http = require('http')
const requestListener = require('./user')

const server = http.createServer(requestListener);
const PORT = 3000;

server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`)
});