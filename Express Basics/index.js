const express = require("express");
const path = require("path");
const app = express();

//Setup Static and MiddleWare
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   console.log("User Hit the Resource");
//   res.send("Home Page");
//   res.sendFile(path.resolve(__dirname, './nav-app/index.html'))
      // 1. Adding to static folder 
      // 2. Server Side Rendering 
// });

app.get("/about", (req, res) => {
  console.log("User Hit the Resource");
  res.send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resouce not found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
