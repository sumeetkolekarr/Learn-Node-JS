const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our Home Page!");
  } else if (req.url === "/about") {
    res.end("Welcome to our About Page!");
  } else {
    res.end(`<h1>Oops! No page found</h1>`);
  }
});

server.listen(5000);
