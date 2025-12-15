const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = "ead_secret_key";
const user = { id: 1, username: "admin", password: "1234" };

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username || password !== user.password)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// JWT Middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: "Token required" });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};

// Protected Route
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome", user: req.user });
});

app.listen(3000, () => console.log("Server started"));
