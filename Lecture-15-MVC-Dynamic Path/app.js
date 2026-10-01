//Core Module
const path= require('path');
// External Module
const express = require('express');


const hostRouter = require("./routes/hostRouter");
const errorController = require("./controllers/error")
const rootDir = require("./utils/pathUtil");
const storeRouter = require('./routes/storeRouter');

const app=express();

app.set('view engine','ejs');
app.set('views', path.join(rootDir, 'views'));
app.use(express.static(path.join(rootDir,"public")));

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host",hostRouter);

app.use(errorController.getError)




const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`)
});