const { readFileSync } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log("User Hit the Server");
  // console.log(req.method);
  const homepage = readFileSync('D:/Github/Learn-Node-JS/HTTP_Basics/index.html')
  const homepageStyle = readFileSync('D:/Github/Learn-Node-JS/HTTP_Basics/style.css')
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homepageStyle);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
