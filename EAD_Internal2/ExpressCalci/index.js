const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api/calc/:operation", (req, res) => {
  const { operation } = req.params;
  const { num1, num2 } = req.query;

  // Validate input
  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({ error: "Missing num1 or num2 parameter" });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: "num1 and num2 must be numbers" });
  }

  let result;

  switch (operation) {
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
      return res.status(400).json({ error: "Invalid operation" });
  }

  res.json({ operation, num1: n1, num2: n2, result });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
