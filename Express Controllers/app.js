const express = require("express");
const app = express();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("./nodeAppControl");

//Parse JSON
app.use(express.json());

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.send("POST");
});

app.get("/api/people", getPeople);

app.post("/api/people", createPerson);

app.post("/api/postman/people", createPersonPostman);

app.put("/api/people/:id", updatePerson);

app.delete("/api/people/:id", deletePerson);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
