const http = require('http')
const fs= require('fs')

function requestListener(req,res){
  console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Hello My first Response from Home</title></head>');
    res.write('<body><h1>Enter your details</h1>')
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name">');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" name="gender" value="male" id="male">');
    res.write('<label for="Female">Female</label>')
    res.write('<input type="radio" name="gender" value="Female" id="Female">');
    res.write('<input type="submit" name="Submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  }else if(req.url.toLowerCase()==='/submit-details' && req.method==="POST"){
    fs.writeFileSync('user.txt','Millionair Gaayuuu');
    res.statusCode=302;
    res.setHeader('Location','/')
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