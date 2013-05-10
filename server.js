var config = {
	server: {
		port: 8013
		}
};

var http = require('http');

  
  
   // Create the web server.
    var server = http.createServer(function (request, response) {
      
          response.writeHead(500, {"Content-Type": "text/plain"});
		  response.write("system error");
		  response.end();
	}).listen(config.server.port);
	  