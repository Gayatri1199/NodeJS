console.log("1st Millionaire of the family and bloodline is Gayatri Purohit");
const fs = require('fs');

fs.writeFile("outPut.txt","Writing File",(err)=>{
  if(err) console.log("There id error");
  else console.log("File Written Successfully");
})