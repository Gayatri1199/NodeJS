

//External Module
const express = require('express')

//Local Module
const requestListener = require('./user')

const app = express();

app.use("/",(req,res,next)=>{
  console.log("Came in first Middleware",req.url,req.method);
  res.send('<p>Welcome to nOde app</p>')
  next();
})

app.use("submit-details",(req,res,next)=>{
  console.log("Came in second Middleware",req.url,req.method);
})



const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`)
});