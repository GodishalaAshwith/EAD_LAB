const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

const users = []; // In-memory user store

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }
  users.push({ username, password });
  console.log(users); // Log users to console to see the array grow
  res.status(201).json({ message: "User registered successfully!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
