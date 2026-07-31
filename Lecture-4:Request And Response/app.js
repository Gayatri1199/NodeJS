const http = require('http')

function requestListener(req,res){
  console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Hello My first Response from Home</title></head>');
    res.write('<body><h1>Hello My first Response Heading from Home</h1></body>')
    res.write('</html>');
    return res.end();

  }else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Hello My first Response from products</title></head>');
    res.write('<body><h1>Hello My first Response Heading from products</h1></body>')
    res.write('</html>');
    return res.end();
  }else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Hello My first Response from 404</title></head>');
    res.write('<body><h1>Hello My first Response Heading from 404</h1></body>')
    res.write('</html>');
    return res.end();
  }
  
}

const server = http.createServer(requestListener);
const PORT = 3000;

server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`)
});