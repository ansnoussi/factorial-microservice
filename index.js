const express = require("express");
const app = express();
const cors = require("cors");

// Calculate factorial of large numbers
const factorial = (userInt) => {
  if (userInt === 0) return "1";

  if (!userInt) return "";

  var i,
    nextNumber,
    carret,
    result = userInt.toString().split("").reverse().map(Number);

  while (--userInt) {
    i = carret = 0;

    while ((nextNumber = result[i++]) !== undefined || carret) {
      carret = (nextNumber || 0) * userInt + carret;
      result[i - 1] = carret % 10;
      carret = parseInt(carret / 10);
    }
  }

  return result.reverse().join("");
};

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
      factorial: factorial(fact),
    });
  } catch (e) {
    return res.status(400).send("please supply number.");
  }
});

app.listen(3001, () => {
  console.log("Microservice started.");
});
