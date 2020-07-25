const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
  if (req.method == "GET" && req.url.match("/?name") !== null) {
    // parse query string
    const q = url.parse(req.url, true).query;
    // get name from query
    const name = q.name;

    // set content header
    res.writeHead(200, { "Content-Type": "text/plain" });
    // return a response
    res.write(`Hello ${name}, Welcome to WeJapa Internships`); //write a response to the client
    res.end(); //end the response
  } else if (req.method == "POST") {
    let name = "";
    req.on("data", function (chunk) {
      name += chunk;
    });

    req.on("end", function () {
      // set content header
      res.writeHead(200, { "Content-Type": "text/plain" });
      // return a response with POST data
      res.write(`Hello ${name}, Welcome to WeJapa Internships`); //write a response to the client
      res.end(); //end the response
    });
  } else {
    // set content header
    res.writeHead(200, { "Content-Type": "text/plain" });
    // return a response
    res.write("Hello World, welcome to WeJapa Internships"); //write a response to the client
    res.end(); //end the response
  }
});

// set port number
const port = parseInt(3000, 10);

// start server and set server port
server.listen(port);

// Listen for error
server.on("error", function (err) {
  console.log(`Error starting server: ${err}`);
});

server.on("listening", function () {
  console.log(`Server is listening on port ${port}`);
});
