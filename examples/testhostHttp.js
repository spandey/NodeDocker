//A company hosts its website and a product API on same server using the code below:

let http = require("http");

let commonResponse = function(response){
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Request Completed");
}

let handleApi = function(req, res){
  if(req.method == "POST"){
    commonResponse(res);
    res.end();
  }
}

let handleWeb = function(req, res){
  commonResponse(res)
  res.end();
}

http.createServer(handleApi).listen(4513);
http.createServer(handleWeb).listen(4514);

// (Select all acceptable answers.)



// The handleWeb callback will write "Request Completed" to the response on HTTP POST, PUT, and GET requests. --- YES


// Navigating the browser to port 4513 will return HTTP status code 200.


// A call to res.end() is recommended but not required inside each createServer callback.


// The handleApi callback will write "Request Completed" to the response for an HTTP POST request. --- YES


// Inside the handleWeb callback, it is possible to get a query string of the HTTP request .   --- YES