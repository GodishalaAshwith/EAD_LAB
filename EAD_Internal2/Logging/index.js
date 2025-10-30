const express = require("express");
const app = express();
const port = 3000;

// 1. Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 2. Routes
app.get("/info", (req, res) => {
  res.json({ message: "Server Information Route Accessed" });
});

app.get("/status", (req, res) => {
  res.json({ status: "Server is running", timestamp: new Date() });
});

// 3. 404 Handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Logging server running on http://localhost:${port}`);
});
