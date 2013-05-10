var config = {
	server: {
		port: 8013
		}
};

var http = require('http');

  
  
   // Create the web server.
    var server = http.createServer(function (request, response) {
      
      
        if (request.method === 'OPTIONS') {

            // IE8 does not allow domains to be specified for 'Access-Control-Allow-Origin'.
            // Only * is allowed.

            var headers = {};
            headers["Access-Control-Allow-Origin"] = "*";
            headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
            headers["Access-Control-Allow-Credentials"] = true;
            headers["Access-Control-Max-Age"] = '86400'; // 24 hours
            headers["Access-Control-Allow-Headers"] = "Accept, Authorization, Content-Type, Origin, X-API-Version, X-HTTP-Method-Override, X-Requested-With";
            response.writeHead(200, headers);
            response.end();

            return;
        }
      
          response.writeHead(500, {"Content-Type": "text/plain"});
		  response.write("system error");
		  response.end();
	}).listen(config.server.port);
	  