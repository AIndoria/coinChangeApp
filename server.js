const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
let totalSum = 0;
const accurateChange = require("./scripts/makeChange");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/coinvalue", function (req, res) {
  console.log(req.body.coinsSum);
  totalSum = req.body.coinsSum;
});

app.get("/api/sum", function (req, res) {
  res.json(accurateChange.makeChange(totalSum));
  console.log("Total Sum is: " + totalSum);
});

app.listen(port, () => console.log(`Started Server on Port ${port}`));
