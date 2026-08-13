const requestHandler=(req,res)=>{
  console.log(req.url,req.method)
  if(req.url==="/"){
    res.setHeader('Content-Type','text/HTML');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Welcome to Calculator</h1> <a href="/calculator">Go to Calculatore</a>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
}

exports.requestHandler=requestHandler;