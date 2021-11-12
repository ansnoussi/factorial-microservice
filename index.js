const express = require("express");
const app = express();
const cors = require("cors");
const utils = require('./utils')

app.use(cors());

app.get("/ping", (req, res) => {
  return res.status(200).send("pong");
});

app.get("/:number", (req, res) => {
  try {
    let number = req.params.number;
    let fact = parseInt(number);

    if (fact < 0) {
      res.status(422).send("number must be positive.");
    }

    return res.status(200).json({
      factorial: utils.factorial(fact),
    });
  } catch (e) {
    return res.status(400).send("please supply number.");
  }
});

var port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log("Microservice started.");
});
