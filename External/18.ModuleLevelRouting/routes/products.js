const express = require("express");
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.send("List of products");
});

// POST new product
router.post("/add", (req, res) => {
  res.send("Product added");
});

module.exports = router;
