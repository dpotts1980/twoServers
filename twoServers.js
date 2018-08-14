// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response) {
    response.end("You need to lose some weight" + request.url)
    }//end of handleRequest
    var server = http.createServer(handleRequest1);
    // Start our server so that it can begin listening to client requests.
    server.listen(PORT1, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT1);
  });
  
  function handleRequest2(request, response) {
    response.end("You have kind eyes!" + request.url)
    }//end of handleRequest
    var server = http.createServer(handleRequest2);
    // Start our server so that it can begin listening to client requests.
    server.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
  });
  



