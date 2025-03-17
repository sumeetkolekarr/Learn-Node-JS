const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");

// Static Assets
// app.use(express.static("./methods-public"));

// // Parse Form Data
// app.use(express.urlencoded({ extended: false }));

//Parse JSON
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

//Alternative for routes
// router.route('/').get(getPeople).post(createPeople)

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
