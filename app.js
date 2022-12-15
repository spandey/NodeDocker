// const express = require('express');
// const app = express();

// app.get("/", (req,res, next)=>{

//   res.send("hello shambhu")

// })




// const PORT = process.env.port || 3010;
// const HOST = "localhost";
// app.listen(PORT, HOST, () => {
//   console.log(`Running on http://${HOST}:${PORT}`);
// }); 


const http = require('http');
// const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };


let app = function (req,res,next) {
  res.writeHead(200)
  res.end("hello word")
 
 }

http.createServer(app).listen(3011, ()=>console.log("Server running on 3011"))

// https.createServer(options, app).listen(3012, ()=>console.log("https Server running on 3011"))