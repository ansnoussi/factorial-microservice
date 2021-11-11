const express = require("express");
const app = express();
const cors = require("cors");

const factorial = (n) => (!(n > 1) ? 1 : factorial(n - 1) * n);

app.use(cors());

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.get("/api/:number", (req, res) => {
  let number = req.params.number;
  let fact = parseInt(number);

  return res.json({
    factorial: factorial(fact),
  });
});

app.listen(3001, () => {
  console.log("Microservice started");
});
