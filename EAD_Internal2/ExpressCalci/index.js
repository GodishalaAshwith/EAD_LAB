const express = require('express');
const app = express();

app.get('/api/calc/:op', (req, res) => {
  const { op } = req.params;
  const { num1, num2 } = req.query;
  const n1 = Number(num1), n2 = Number(num2);

  if (isNaN(n1) || isNaN(n2)) return res.status(400).json({ error: 'Invalid params' });


  let result;

  switch (op) {
    case "add":
      result = n1 + n2;
      break;
    case "subtract":
      result = n1 - n2;
      break;
    case "multiply":
      result = n1 * n2;
      break;
    case "divide":
      if (n2 === 0)
        return res.status(400).json({ error: "Cannot divide by zero" });
      result = n1 / n2;
      break;
    default:
      return res.status(400).json({ error: "Invalid op" });
  }

  res.json({ op, num1: n1, num2: n2, result });
});

app.listen(3000);





