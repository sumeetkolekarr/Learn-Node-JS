const express = require("express");
const app = express();
let { people } = require("./data");

// Static Assets
app.use(express.static("./methods-public"));

// Parse Form Data
app.use(express.urlencoded({ extended: false }));

//Parse JSON
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name === "") {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).send({ success: true, person: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.send("POST");
});

app.post("/api/postman/people", (req, res) => {
  const name = req.body;
  if (!name) {
    return res.status.json({
      success: false,
      msg: "Please Provide Name Value",
    });
  }
  res.status(201).send({ success: true, person: [...people, name] });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name);
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.json({
      success: false,
      msg: "No Person with id " + id,
    });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.json({
      success: false,
      msg: "No Person with id " + req.params.id,
    });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );

  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
