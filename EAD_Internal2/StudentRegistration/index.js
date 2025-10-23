const express = require("express");
const app = express();

// In-memory array to store registered users
const users = [];

// Middleware to parse JSON request bodies
app.use(express.json());

// POST /register route
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required",
    });
  }

  // Check if user already exists
  const exists = users.find((u) => u.username === username);
  if (exists) {
    return res.status(409).json({
      success: false,
      message: "Username already registered",
    });
  }

  // Store user
  users.push({ username, password });

  // Return success response
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: { username },
  });
});

// Optional: GET route to view all registered users (for testing)
app.get("/users", (req, res) => {
  res.json({
    count: users.length,
    users: users.map((u) => ({ username: u.username })),
  });
});

const PORT = process.env.PORT || 3000;

const server = app
  .listen(PORT, () => {
    console.log(`Server running on http://localhost:${server.address().port}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${PORT} is busy, trying ${PORT + 1}...`);
      app.listen(PORT + 1, () => {
        console.log(`Server running on http://localhost:${PORT + 1}`);
      });
    } else {
      console.error("Server error:", err);
    }
  });
