const express = require('express');
const parser = require('body-parser');
const app = express();

app.use((req,res,next)=>{
  console.log("First Dummy MiddleWare",req.url,req.method);
  next();
})

app.use((req,res,next)=>{
  console.log("Second Dummy MiddleWare",req.url,req.method);
  next();
})

// app.use((req,res,next)=>{
//   console.log("Third Dummy MiddleWare",req.url,req.method);
//   res.send("<h1>Practice Set using express</h1>")
// })


app.get("/",(req,res,next)=>{
  console.log("Handling / for GET",req.url,req.method);
  res.send(`<h1>Practice Set using express</h1>`)
})

app.get("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for GET",req.url,req.method);
  res.send(`<h1>Please give your details here</h1>`)
})
const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`)
});