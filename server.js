const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
let totalSum = 200;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/coinvalue", function (req, res) {
  res.send("Received Total Sum: " + req.body.name + " .");
  totalSum = req.body.name;
  console.log(req);
});

app.get("/api/sum", function (req, res) {
  res.json(totalSum);
});

app.listen(port, () => console.log(`Started Server on Port ${port}`));
