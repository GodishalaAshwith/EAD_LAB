const express = require("express");
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.send("List of users");
});

// POST new user
router.post("/add", (req, res) => {
  res.send("User added");
});

module.exports = router;
