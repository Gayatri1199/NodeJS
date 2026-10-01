const path = require('path');
// const rootDir = require("./utils/pathUtil")

exports.getError = (req,res,next)=>{
   res.sendFile(path.join(__dirname,"../","views","404.html"));
}