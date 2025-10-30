const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Book", category: "Stationery", price: 20 },
];

// Retrieve a single product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found." });
  res.json(product);
});

// Add a new product
app.post("/products", (req, res) => {
  const newProduct = {
    id: Date.now(), // simple unique ID
    ...req.body,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => console.log(`Product API on http://localhost:${port}`));
