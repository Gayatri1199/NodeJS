const http = require('http')


const server = http.createServer((res,req)=>{
  console.log(req)
});
const PORT = 3000;

server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`)
});