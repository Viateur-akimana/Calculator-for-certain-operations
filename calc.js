const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

app.post("/add", (req, res) => {
  const numbers = req.body.numbers;
  if (!numbers || !Array.isArray(numbers)) {
    return res.status(400).send({ error: "Numbers not provided or invalid" });
  }

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    res.send({ sum });
});
app.post('/multiply', (req, res) => {
  const numbers = req.body.numbers;
  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }

  res.json({ product });
});

app.listen(5600, () => {
  console.log('Server running ..');
});
